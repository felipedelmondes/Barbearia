import { Scissors } from "lucide-react";

const ITEMS = [
  "CORTE CLÁSSICO",
  "BARBA NA NAVALHA",
  "SOBRANCELHA",
  "ACABAMENTO",
  "PIGMENTAÇÃO",
  "SPA CAPILAR",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-gold/15 bg-charcoal py-4">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10">
        {[...row, ...row].map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-display text-lg tracking-widest text-cream/70">
              {item}
            </span>
            <Scissors className="h-4 w-4 text-gold" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
