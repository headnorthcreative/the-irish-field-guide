import { useState } from "react";
import { mapStops } from "@/lib/journeys";

export function RouteMap() {
  const [active, setActive] = useState(mapStops[0]!.id);
  const stop = mapStops.find((s) => s.id === active)!;
  return (
    <div>
      <div className="relative w-full overflow-hidden border border-ink/25 bg-mapsheet">
        <svg viewBox="0 0 900 440" className="block h-auto w-full" fill="none" stroke="var(--ink)" strokeWidth="1.4" role="img" aria-label="Sketch map of the Ring of Kerry">
          <path d="M40 120 C140 90 230 140 300 110 S420 70 470 120 L520 160 C560 200 600 170 650 200 S760 230 860 210" />
          <path d="M60 250 C170 230 260 280 360 250 S520 230 560 280 C600 320 700 300 850 330" />
          <path d="M40 360 C200 340 330 400 480 370 S700 380 860 400" opacity=".5" />
          <path d="M180 170 C260 190 330 210 400 200 S560 260 640 255 S690 190 700 150" stroke="var(--amber)" strokeWidth="2" strokeDasharray="6 6" />
          <text x="120" y="78" fill="var(--ink)" stroke="none" fontStyle="italic" fontSize="18" fontFamily="var(--font-display)">Iveragh · Ring of Kerry</text>
          <text x="868" y="36" textAnchor="end" fill="var(--ink)" opacity=".6" stroke="none" fontSize="12" letterSpacing="2.4">N ↑  SCALE 1 : 250,000</text>
          {mapStops.map((s) => (
            <g key={s.id}>
              {s.id === active && <circle cx={s.x} cy={s.y} r="14" stroke="var(--amber)" strokeWidth="1.5" />}
              <circle cx={s.x} cy={s.y} r="5" fill="var(--moss)" stroke="none" />
              <text
                x={s.labelX}
                y={s.y + 28}
                fill={s.id === active ? "var(--amber)" : "var(--ink)"}
                stroke="none"
                fontSize="21"
                fontFamily="var(--font-hand)"
              >
                {s.label}
              </text>
            </g>
          ))}
        </svg>
        {mapStops.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            aria-label={`Show lore for ${s.label}`}
            aria-pressed={s.id === active}
            className="absolute h-[18%] w-[16%] -translate-x-1/2 -translate-y-1/3 rounded-full focus-visible:outline-2 focus-visible:outline-amber"
            style={{ left: `${(s.x / 900) * 100}%`, top: `${(s.y / 440) * 100}%` }}
          />
        ))}
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start" aria-live="polite">
        <div className="border-l-2 border-amber pl-5">
          <p className="hand text-[26px] leading-tight text-moss">{stop.label}</p>
          <p className="mt-1 text-[17px] leading-[1.6] text-ink/80">{stop.lore}</p>
          {stop.time && <p className="hand mt-1 text-[20px] text-amber">↳ {stop.time}</p>}
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-[15px] italic text-ink/70 md:flex-col">
          {mapStops.map((s, i) => (
            <button key={s.id} onClick={() => setActive(s.id)} className={`text-left hover:text-amber ${s.id === active ? "text-amber underline underline-offset-4" : ""}`}>
              {i + 1}. {s.label.split(" — ")[0]!.split(" · ")[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
