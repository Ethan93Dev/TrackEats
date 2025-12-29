export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-green-50 flex flex-col items-center py-16 px-6">
      <div className="max-w-4xl w-full text-center space-y-12">
        {/* Hero */}
        <header>
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-md">
            TrackEats
          </h1>
          <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            The no-BS calorie tracker I built because every app out there felt
            like it was trying too hard.
          </p>
        </header>

        {/* Why Section */}
        <section className="bg-white rounded-3xl shadow-lg p-10 md:p-16 text-left space-y-8">
          <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
            Why I made this
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
            I'm not a fitness influencer. I'm just a guy who rides a motorcycle,
            eats whatever's in the fridge, and wants to stay under 2,000
            calories without thinking about it all day.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
            Most apps? They nag you about macros, protein ratios, intermittent
            fasting reminders... I don't need that. I just want to log what I
            ate and know if I'm still good.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-8">
            <div className="bg-indigo-100 p-7 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default">
              <p className="text-xl font-semibold text-indigo-900 mb-2">
                Simple Input
              </p>
              <p className="text-gray-700 leading-relaxed">
                What'd you eat? How many calories? Done. No tags, no photos, no
                emojis.
              </p>
            </div>

            <div className="bg-green-100 p-7 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default">
              <p className="text-xl font-semibold text-green-900 mb-2">
                Clear Progress
              </p>
              <p className="text-gray-700 leading-relaxed">
                See your daily total vs your goal. Green bar? Good. Red? Time to
                chill.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="space-y-4">
          <button
            className="inline-flex items-center justify-center bg-indigo-600 text-white py-4 px-10 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-300/50"
            aria-label="Get started with demo login"
          >
            Get Started →
            <span className="ml-3 text-sm font-normal opacity-80">
              (Use demo login)
            </span>
          </button>

          <p className="text-gray-500 text-sm tracking-wide max-w-xs mx-auto">
            test@test.com / test123 — no signup needed
          </p>
        </section>

        {/* Extra footer spacing */}
        <div className="h-24" />
      </div>
    </div>
  );
}
