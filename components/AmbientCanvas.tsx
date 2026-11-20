"use client";

export default function AmbientCanvas() {
  // Subtle Liquid Glass ambience only: three low-opacity blurred glows,
  // fixed behind the content. Hidden for prefers-reduced-motion via CSS.
  return (
    <div className="ambient-glow" aria-hidden="true">
      <i />
      <i />
      <i />
    </div>
  );
}
