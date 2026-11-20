"use client";

export default function AmbientCanvas() {
  // Ambient mesh: four low-opacity blurred glows, fixed behind the content,
  // slowly drifting. The glass panels refract them. Hidden for
  // prefers-reduced-motion via CSS.
  return (
    <div className="ambient-glow" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}
