import React from "react";
import Image from "next/image";
import img1 from "@/images/braden-collum-9HI8UJMSdZA-unsplash.jpg";
import img2 from "@/images/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg";

export default function OurPhilosophy() {
  return (
    <section className="bg-emerald-50/50 rounded-3xl p-8 md:p-16 max-w-7xl mx-auto my-12">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Image Grid - Staggered Effect */}
        <div className="w-full lg:w-1/2 flex gap-4 items-center">
          <div className="w-1/2 pt-12">
            {" "}
            {/* Shifted down */}
            <Image
              src={img1}
              alt="Action/Fitness"
              className="rounded-2xl object-cover aspect-[3/4] shadow-lg ring-4 ring-white"
            />
          </div>
          <div className="w-1/2 pb-12">
            {" "}
            {/* Shifted up */}
            <Image
              src={img2}
              alt="Healthy Food"
              className="rounded-2xl object-cover aspect-[3/4] shadow-lg ring-4 ring-white"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 text-sm font-bold uppercase tracking-wider rounded-full">
            Our Philosophy
          </div>

          <h2 className="text-4xl font-bold text-zinc-900 leading-tight">
            Knowledge is the key to{" "}
            <span className="text-emerald-600">staying on track.</span>
          </h2>

          <div className="space-y-4">
            <p className="text-zinc-600 text-lg leading-relaxed italic border-l-4 border-emerald-200 pl-4">
              “Studies show that people who keep a simple food log are more
              likely to reach their goals.”
            </p>

            <p className="text-zinc-700 text-lg leading-relaxed">
              TrackEats cuts through the noise by focusing on what matters —
              straightforward nutrition and calorie tracking that gives you
              clear data without the overwhelm.
            </p>

            <p className="text-zinc-700 text-lg leading-relaxed font-medium">
              Healthy eating isn’t about perfection, it’s about progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
