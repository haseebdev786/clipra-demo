"use client";

import { useState, useEffect, useRef } from "react";

export default function Stats() {
  const [inView, setInView] = useState(false);
  const [priceVal, setPriceVal] = useState(0);
  const [privacyVal, setPrivacyVal] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const duration = 1600;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setPriceVal(Math.floor(ease * 50));
      setPrivacyVal(Math.floor(ease * 100));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setPriceVal(50);
        setPrivacyVal(100);
      }
    };

    requestAnimationFrame(step);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-16 border-y border-white/8 bg-[#080C16]/60 backdrop-blur-md z-10"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Stat 1 */}
          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#00E5BE] to-[#10F296] bg-clip-text text-transparent font-mono">
              {priceVal}%
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Lower Price than Paste ($14.99 vs $29.99/yr)
            </div>
          </div>

          {/* Stat 2 */}
          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#2E82FF] to-[#00E5BE] bg-clip-text text-transparent font-mono">
              &lt;18ms
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Smart Auto-Sort Response Time
            </div>
          </div>

          {/* Stat 3 */}
          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#0066FF] via-[#00E5BE] to-[#10F296] bg-clip-text text-transparent font-mono">
              {privacyVal}%
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Private iCloud &bull; Zero Server Storage
            </div>
          </div>

          {/* Stat 4 */}
          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#00E5BE] to-[#10F296] bg-clip-text text-transparent font-mono">
              10-in-1
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Instant Text Transformations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
