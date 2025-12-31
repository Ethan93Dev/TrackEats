import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-zinc-950 text-zinc-400 border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10">
          {/* Brand & Mission */}
          <div className="max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/10">
                <span className="text-white font-black text-xl">T</span>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">
                TrackEats
              </span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-500">
              The straightforward calorie tracker.{" "}
              <br className="hidden md:block" />
              Built for people who want to spend less time logging and more time
              living.
            </p>
          </div>

          {/* Social / Contact */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-600">
              Connect
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="group flex items-center gap-2">
                <span className="text-xs font-bold text-zinc-500 group-hover:text-white transition-colors">
                  X / TWITTER
                </span>
              </a>
              <a href="#" className="group flex items-center gap-2">
                <span className="text-xs font-bold text-zinc-500 group-hover:text-white transition-colors">
                  GITHUB
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-600">
            © {currentYear} TrackEats — No junk, just data.
          </p>
          <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-700">
            v1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
}
