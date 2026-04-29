import { ArrowUpRight } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 w-full px-8 lg:px-16 z-50 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="w-12 h-12 liquid-glass flex items-center justify-center rounded-full shrink-0">
        <span className="font-heading italic text-2xl text-white lowercase">a</span>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex items-center liquid-glass px-1.5 py-1.5 rounded-full">
        <div className="flex items-center">
          {['Home', 'Voyages', 'Worlds', 'Innovation', 'Plan Launch'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
          <button className="ml-2 flex items-center gap-1.5 bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap hover:bg-white/90 transition-colors">
            Claim a Spot
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Right: Invisible Spacer */}
      <div className="w-12 h-12 invisible" />
    </nav>
  );
}
