import { motion } from 'motion/react';
import { ArrowUpRight, Play, Clock, Globe } from 'lucide-react';
import { FadingVideo } from './FadingVideo';
import { BlurText } from './BlurText';

export function Hero() {
  const fadeInUp = {
    initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
    animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 flex items-start justify-center">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top"
          style={{ width: '120%', height: '120%' }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center max-w-4xl">
        {/* Badge */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
          className="liquid-glass rounded-full inline-flex items-center p-1 pr-3"
        >
          <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            New
          </span>
          <span className="ml-3 text-sm text-white/90 font-body">
            Maiden Crewed Voyage to Mars Arrives 2026
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mt-8">
          <BlurText
            text="Venture Past Our Sky Across the Universe"
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px]"
          />
        </div>

        {/* Subheading */}
        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.8 }}
          className="mt-6 text-sm md:text-base text-white/80 max-w-2xl font-body font-light leading-snug"
        >
          Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 1.1 }}
          className="flex items-center gap-8 mt-10"
        >
          <button className="liquid-glass-strong rounded-full px-8 py-3 text-sm font-medium text-white flex items-center gap-2 group transition-all">
            Start Your Voyage
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button className="flex items-center gap-2 group text-sm font-medium text-white hover:text-white/80 transition-colors">
            View Liftoff
            <Play className="w-4 h-4 fill-current stroke-0" />
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-12 mb-8"
        >
          <div className="liquid-glass p-6 w-[220px] rounded-[1.25rem] text-left flex flex-col justify-between h-40">
            <div className="w-10 h-10 liquid-glass rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <div className="font-heading italic text-4xl text-white tracking-[-1px] leading-none">
                34.5 Min
              </div>
              <div className="text-xs text-white/60 font-body font-light mt-2 uppercase tracking-wider">
                Average Videos Watch Time
              </div>
            </div>
          </div>

          <div className="liquid-glass p-6 w-[220px] rounded-[1.25rem] text-left flex flex-col justify-between h-40">
            <div className="w-10 h-10 liquid-glass rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <div className="font-heading italic text-4xl text-white tracking-[-1px] leading-none">
                2.8B+
              </div>
              <div className="text-xs text-white/60 font-body font-light mt-2 uppercase tracking-wider">
                Users Across the Globe
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Partners */}
      <motion.div
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 1.4 }}
        className="relative z-10 w-full flex flex-col items-center gap-6 pb-12"
      >
        <div className="liquid-glass rounded-full px-4 py-1.5 text-[10px] uppercase font-semibold text-white/70 tracking-widest">
          Collaborating with top aerospace pioneers globally
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno'].map((name) => (
            <span
              key={name}
              className="font-heading italic text-2xl md:text-3xl text-white/90 tracking-tight hover:text-white transition-colors cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
