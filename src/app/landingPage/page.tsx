import OurPhilosophy from "../components/OurPhilosophy";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-20 pb-24 text-center">
        <h4 className="text-indigo-600 uppercase tracking-[0.2em] text-sm font-bold mb-6">
          Simple nutrition tracking app
        </h4>

        <h1 className="text-6xl md:text-7xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-8 max-w-3xl">
          Nutrition tracking <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
            for real life
          </span>
        </h1>

        <h3 className="text-xl text-zinc-600 mb-10 max-w-xl leading-relaxed">
          The no-BS calorie tracker for people who want results without the data
          entry headache. Log in seconds, stay on track all day.
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button className="bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-4 px-10 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95">
            <Link href="/login">Start Tracking Free</Link>
          </button>
        </div>
      </section>

      {/* Philosophy Section */}
      <div className="w-full pb-24">
        <OurPhilosophy />
      </div>
    </div>
  );
}
