export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            Boutique Fitness Studio in Downtown
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Elevate Fitness Studio – Train Across Multiple Disciplines Under One Roof
          </h1>

          {/* Description */}
          <p className="mb-10 text-lg leading-relaxed text-slate-600">
            From HIIT and yoga to strength training and cycling, access 50+ weekly classes led by certified trainers with specialized credentials. No contracts, just flexible month-to-month memberships.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#membership"
              className="group inline-flex items-center justify-center rounded-lg bg-slate-900 px-8 py-3.5 text-base font-medium text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md"
            >
              View Class Schedule
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#trial"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-8 py-3.5 text-base font-medium text-slate-700 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              Book Free Trial Class
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-200 pt-12">
            <div className="text-center">
              <div className="text-3xl font-semibold text-slate-900">50+</div>
              <div className="mt-1 text-sm text-slate-600">Weekly Classes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold text-slate-900">12</div>
              <div className="mt-1 text-sm text-slate-600">Certified Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold text-slate-900">No</div>
              <div className="mt-1 text-sm text-slate-600">Long Contracts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Decoration */}
      <div className="absolute inset-x-0 top-0 -z-10 h-full overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-slate-100 to-transparent opacity-40 blur-3xl"></div>
      </div>
    </section>
  );
}