typescript
export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 flex-1">
            <a
              href="#home"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300"
            >
              Services
            </a>
          </div>

          <div className="flex-shrink-0 px-8">
            <a
              href="#"
              className="text-xl font-semibold tracking-tight text-slate-900 hover:text-slate-700 transition-colors duration-300"
            >
              Elevate Fitness Studio
            </a>
          </div>

          <div className="flex items-center justify-end gap-8 flex-1">
            <a
              href="#pricing"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}