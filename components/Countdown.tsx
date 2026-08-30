"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  const clamped = Math.max(diff, 0);

  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
    done: diff <= 0,
  };
}

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetDate));
    const id = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (!timeLeft) {
    return <div className="h-24" aria-hidden />;
  }

  if (timeLeft.done) {
    return <p className="text-center font-display text-lg italic">The celebration has begun!</p>;
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-2 sm:gap-3">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex w-14 flex-col items-center border border-[var(--ink)]/40 py-2 sm:w-16"
        >
          <span className="font-display text-xl font-black sm:text-2xl">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="mt-0.5 text-[9px] uppercase tracking-widest opacity-70 sm:text-[10px]">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
