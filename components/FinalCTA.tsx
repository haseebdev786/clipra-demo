"use client";

import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="section band-mist">
      <div className="wrap">
        <div className="text-center max-w-3xl mx-auto reveal-on-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1D1D1F]">
            One app for your Mac, iPhone, and iPad.
          </h2>
          <p className="lede mx-auto mt-5">
            Clipra is in development for Mac, iPhone and iPad. Explore the plans and see what we
            are building.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a href="/pricing" className="btn btn-primary">
              Try for free
            </a>
            <Link href="/updates" className="btn btn-outline">
              Read the roadmap
            </Link>
          </div>

          <p className="text-sm text-[#6E6E73] mt-6">
            Planned for macOS and iOS — the app is in development.
          </p>
        </div>
      </div>
    </section>
  );
}
