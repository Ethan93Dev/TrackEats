export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-6">
      <div className="max-w-5xl w-full text-center space-y-20">
        {/* Hero */}
        <header className="space-y-6">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            TrackEats
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A no-BS calorie tracker I built because every other app felt like it
            was trying way too hard.
          </p>
        </header>

        {/* Story Section */}
        <section className="rounded-3xl p-12 md:p-16 text-left space-y-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why I actually built this
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            It started with a simple problem: I wanted to stay under a calorie
            goal without turning food into a full-time job.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            I’m not a fitness influencer. I don’t meal prep for Instagram. I
            ride a motorcycle, eat whatever’s in the fridge, and just want to
            know if I’m still good for the day.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Every app I tried kept asking for more — macros, protein ratios,
            fasting windows, streaks, reminders. I wasn’t failing my diet… I was
            just tired of thinking about it.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            So I built TrackEats. Something simple enough that I’d actually use
            it every day.
          </p>
        </section>

        {/* Features */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <p className="text-xl font-semibold text-gray-900 mb-3">
              Log and move on
            </p>
            <p className="text-gray-700 leading-relaxed">
              What’d you eat? How many calories? That’s it. No tags, no photos,
              no pressure.
            </p>
          </div>

          <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <p className="text-xl font-semibold text-gray-900 mb-3">
              Know where you stand
            </p>
            <p className="text-gray-700 leading-relaxed">
              One clear daily total vs your goal. Green means relax. Red means
              maybe skip the midnight snack.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="space-y-6">
          <button className="inline-flex items-center justify-center bg-indigo-600 text-white py-4 px-12 rounded-full text-lg font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-300/50">
            Get Started →
            <span className="ml-3 text-sm font-normal opacity-80">
              (Use demo login)
            </span>
          </button>

          <p className="text-gray-500 text-sm">
            test@test.com / test123 — no signup needed
          </p>
        </section>

        <div className="h-20" />
      </div>
    </div>
  );
}
