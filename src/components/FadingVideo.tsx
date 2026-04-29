import { useEffect, useRef } from 'react';

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;

export function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const isFadingOutRef = useRef(false);

  const fadeTo = (target: number, duration: number) => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    const video = videoRef.current;
    if (!video) return;

    const startOpacity = parseFloat(video.style.opacity || '0');
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentOpacity = startOpacity + (target - startOpacity) * progress;
      
      video.style.opacity = currentOpacity.toString();

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(animate);
      }
    };

    rafIdRef.current = requestAnimationFrame(animate);
  };

  const handleLoadedData = () => {
    const video = videoRef.current;
    if (!video) return;
    video.style.opacity = '0';
    video.play().catch(() => {});
    fadeTo(1, FADE_MS);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || isFadingOutRef.current) return;

    const remainingTime = video.duration - video.currentTime;
    if (remainingTime <= FADE_OUT_LEAD && remainingTime > 0) {
      isFadingOutRef.current = true;
      fadeTo(0, FADE_MS);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.style.opacity = '0';
    setTimeout(() => {
      video.currentTime = 0;
      video.play().catch(() => {});
      isFadingOutRef.current = false;
      fadeTo(1, FADE_MS);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={{ ...style, opacity: 0 }}
      muted
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  );
}
