"use client";

import { useEffect, useRef } from "react";

interface Orb {
  x: number;
  y: number;
  r: number;
  color: string;
  vx: number;
  vy: number;
}

export default function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const orbs: Orb[] = [
      {
        x: width * 0.2,
        y: height * 0.25,
        r: 380,
        color: "rgba(0, 102, 255, 0.16)",
        vx: 0.35,
        vy: 0.2,
      },
      {
        x: width * 0.85,
        y: height * 0.45,
        r: 340,
        color: "rgba(0, 229, 190, 0.13)",
        vx: -0.25,
        vy: 0.3,
      },
      {
        x: width * 0.3,
        y: height * 0.85,
        r: 400,
        color: "rgba(16, 242, 150, 0.09)",
        vx: 0.2,
        vy: -0.25,
      },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -120 || orb.x > width + 120) orb.vx *= -1;
        if (orb.y < -120 || orb.y > height + 120) orb.vy *= -1;

        const grad = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.r
        );
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, "transparent");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full opacity-70"
      aria-hidden="true"
    />
  );
}
