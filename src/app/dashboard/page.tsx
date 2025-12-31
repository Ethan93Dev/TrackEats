"use client";

import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import {
  Utensils,
  Flame,
  Plus,
  BarChart3,
  History,
  Sparkles,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from "recharts";

type Meal = {
  id: number;
  name: string;
  calories: number;
  eatenAt: string;
};

type ChartEntry = {
  dateStr: string;
  dayName: string;
  calories: number;
};

export default function Dashboard() {
  const [chartData, setChartData] = useState<ChartEntry[]>([]);
  const [todayTotal, setTodayTotal] = useState(0);
  const [name, setName] = useState("");
  const [calories, setCalories] = useState<number | "">("");
  const dailyGoal = 2000;

  // --- Helper to process raw meals into chart format ---
  const processData = useCallback((meals: Meal[]) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const todayStr = new Date().toLocaleDateString("en-CA");

    // 1. Create the skeleton for last 7 days
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - i);
      return {
        dateStr: d.toLocaleDateString("en-CA"),
        dayName: days[d.getDay()],
        calories: 0,
      };
    }).reverse();

    // 2. Sum calories
    meals.forEach((meal) => {
      const mealDate = new Date(meal.eatenAt).toLocaleDateString("en-CA");
      const dayEntry = last7Days.find((d) => d.dateStr === mealDate);
      if (dayEntry) dayEntry.calories += meal.calories;
    });

    // 3. Set states ONCE
    setChartData(last7Days);
    const today = last7Days.find((d) => d.dateStr === todayStr)?.calories || 0;
    setTodayTotal(today);
  }, []);

  const fetchMeals = useCallback(async () => {
    try {
      const res = await axios.get<{ meals: Meal[] }>("/api/meal/getMeals");
      processData(res.data.meals);
    } catch (err) {
      console.error("Fetch error", err);
    }
  }, [processData]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchMeals();
  }, [fetchMeals]);

  const handleMealSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !calories) return;
    try {
      await axios.post("/api/meal/createMeals", {
        name,
        calories: Number(calories),
      });
      setName("");
      setCalories("");
      fetchMeals(); // This triggers the update flow
    } catch (err) {
      console.error("Submission error", err);
    }
  };

  const remaining = Math.max(0, dailyGoal - todayTotal);

  return (
    <div className="min-h-screen  text-zinc-900 p-4 md:p-6 font-sans">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT SECTION */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-zinc-900 rounded-4xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                  Intake Dashboard
                </p>
                <h1 className="text-5xl font-black italic tracking-tighter">
                  {todayTotal.toLocaleString()}{" "}
                  <span className="text-xl text-zinc-600 not-italic font-bold uppercase tracking-normal">
                    kcal
                  </span>
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="px-3 py-1 bg-white/5 rounded-xl border border-white/10 text-xs font-semibold text-zinc-300 flex items-center gap-2">
                    <Sparkles size={12} className="text-indigo-400" />
                    {remaining > 0
                      ? `${remaining.toLocaleString()} kcal left`
                      : "Goal Achieved"}
                  </div>
                </div>
              </div>
              <div
                className={`p-3 rounded-2xl ${
                  todayTotal > dailyGoal ? "bg-rose-500/10" : "bg-orange-500/10"
                }`}
              >
                <Flame
                  className={`w-8 h-8 ${
                    todayTotal > dailyGoal ? "text-rose-500" : "text-orange-500"
                  }`}
                />
              </div>
            </div>
            <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
          </div>

          <div className="bg-white rounded-4xl p-8 border border-zinc-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 size={18} className="text-indigo-600" />
              <h3 className="text-lg font-bold text-zinc-800 tracking-tight">
                Weekly Activity
              </h3>
            </div>
            <div className="h-62.5 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f4f4f5"
                  />
                  <XAxis
                    dataKey="dayName"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#a1a1aa", fontSize: 12, fontWeight: 600 }}
                    dy={10}
                  />
                  <YAxis hide domain={[0, "auto"]} />
                  <Tooltip
                    cursor={{ fill: "#F8F9FC" }}
                    contentStyle={{
                      borderRadius: "16px",
                      border: "none",
                      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Bar dataKey="calories" radius={[6, 6, 6, 6]} barSize={32}>
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          entry.calories > dailyGoal ? "#FB7185" : "#6366F1"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-5 bg-white rounded-4xl p-8 border border-zinc-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-indigo-600 p-3 rounded-xl text-white shadow-md shadow-indigo-100">
                <Utensils size={22} />
              </div>
              <h2 className="text-2xl font-black tracking-tight">Log Meal</h2>
            </div>

            <form onSubmit={handleMealSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">
                  Item Name
                </label>
                <input
                  type="text"
                  placeholder="Salmon, Salad..."
                  className="w-full bg-zinc-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all text-base"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">
                  Energy (kcal)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full bg-zinc-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all text-xl font-black pr-20"
                    value={calories}
                    onChange={(e) =>
                      setCalories(
                        e.target.value === "" ? "" : Number(e.target.value)
                      )
                    }
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-zinc-400 uppercase">
                    Kcal
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-black text-lg py-5 rounded-2xl shadow-xl transition-all active:scale-[0.97] flex items-center justify-center gap-2 group mt-2"
              >
                Log Entry{" "}
                <Plus
                  size={20}
                  className="group-hover:rotate-90 transition-transform"
                />
              </button>
            </form>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-50 flex items-center gap-3 text-zinc-400 font-bold uppercase text-[10px] tracking-widest">
            <History size={16} /> Tracking Daily
          </div>
        </div>
      </div>
    </div>
  );
}
