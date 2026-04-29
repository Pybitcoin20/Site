import { ArrowUpRight } from 'lucide-react';
import { FadingVideo } from './FadingVideo';

interface CapabilityCardProps {
  iconPath: string;
  tags: string[];
  title: string;
  description: string;
}

function CapabilityCard({ iconPath, tags, title, description }: CapabilityCardProps) {
  return (
    <div className="liquid-glass rounded-[1.25rem] p-8 min-h-[420px] flex flex-col group hover:bg-white/[0.03] transition-colors">
      <div className="flex items-start justify-between gap-4">
        {/* Icon */}
        <div className="w-12 h-12 liquid-glass rounded-[0.75rem] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
            <path d={iconPath} />
          </svg>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap justify-end gap-2 max-w-[70%]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="liquid-glass rounded-full px-3 py-1 text-[10px] text-white/70 font-body whitespace-nowrap uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1" />

      <div className="mt-8">
        <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
          {title}
        </h3>
        <p className="mt-4 text-sm md:text-base text-white/70 font-body font-light leading-relaxed max-w-[32ch]">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Capabilities() {
  const cards = [
    {
      iconPath: "M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z",
      tags: ["Natural Context", "Photo Realism", "Infinite Settings", "Eco-Vibe"],
      title: "AI Scenery",
      description: "AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests."
    },
    {
      iconPath: "M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z",
      tags: ["Scale Fast", "Visual Consistency", "Time Saver", "Ready to Post"],
      title: "Batch Production",
      description: "Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching."
    },
    {
      iconPath: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z",
      tags: ["Ray Tracing", "Physical Shadows", "Studio Quality", "Sunlight Sync"],
      title: "Smart Lighting",
      description: "Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight."
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-black flex flex-col">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 pt-32 pb-20 flex flex-col min-h-screen">
        <div className="mb-auto">
          <div className="text-sm font-body text-white/50 mb-4 tracking-widest uppercase font-medium">
            // Capabilities
          </div>
          <h2 className="font-heading italic text-white text-6xl md:text-8xl lg:text-[7rem] leading-[0.85] tracking-[-4px]">
            Production<br />evolved
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {cards.map((card, idx) => (
            <CapabilityCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
