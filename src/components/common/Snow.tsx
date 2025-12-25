import type { CSSProperties } from "react";

const flakes = [
  { left: "5%", size: 6, opacity: 0.75, duration: 12, delay: 0, drift: 14 },
  { left: "12%", size: 5, opacity: 0.6, duration: 14, delay: 2, drift: -10 },
  { left: "20%", size: 4, opacity: 0.55, duration: 13, delay: 4, drift: 9 },
  { left: "28%", size: 7, opacity: 0.7, duration: 15, delay: 1, drift: -16 },
  { left: "34%", size: 5, opacity: 0.6, duration: 16, delay: 3, drift: 12 },
  { left: "42%", size: 6, opacity: 0.7, duration: 12, delay: 5, drift: -14 },
  { left: "48%", size: 4, opacity: 0.55, duration: 14, delay: 0, drift: 8 },
  { left: "55%", size: 7, opacity: 0.75, duration: 13, delay: 2, drift: -18 },
  { left: "62%", size: 5, opacity: 0.6, duration: 15, delay: 4, drift: 15 },
  { left: "68%", size: 4, opacity: 0.5, duration: 16, delay: 1, drift: -9 },
  { left: "74%", size: 6, opacity: 0.7, duration: 12, delay: 3, drift: 11 },
  { left: "81%", size: 5, opacity: 0.6, duration: 14, delay: 5, drift: -12 },
  { left: "88%", size: 7, opacity: 0.75, duration: 15, delay: 0, drift: 16 },
  { left: "94%", size: 6, opacity: 0.65, duration: 13, delay: 2, drift: -15 },
  { left: "2%", size: 5, opacity: 0.6, duration: 14, delay: 6, drift: 10 },
  { left: "17%", size: 6, opacity: 0.7, duration: 15, delay: 7, drift: -13 },
  { left: "31%", size: 4, opacity: 0.5, duration: 16, delay: 8, drift: 12 },
  { left: "39%", size: 7, opacity: 0.75, duration: 14, delay: 9, drift: -17 },
  { left: "46%", size: 5, opacity: 0.6, duration: 13, delay: 6, drift: 14 },
  { left: "53%", size: 6, opacity: 0.7, duration: 15, delay: 7, drift: -11 },
  { left: "59%", size: 4, opacity: 0.5, duration: 16, delay: 8, drift: 9 },
  { left: "66%", size: 7, opacity: 0.75, duration: 14, delay: 9, drift: -16 },
  { left: "71%", size: 5, opacity: 0.6, duration: 13, delay: 6, drift: 12 },
  { left: "77%", size: 6, opacity: 0.68, duration: 12, delay: 7, drift: -14 },
  { left: "83%", size: 4, opacity: 0.5, duration: 16, delay: 8, drift: 10 },
  { left: "90%", size: 7, opacity: 0.8, duration: 14, delay: 9, drift: -18 },
];

const Snow = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {flakes.map((flake, idx) => (
        <span
          key={idx}
          className="snowflake"
          style={
            {
              left: flake.left,
              width: flake.size,
              height: flake.size,
              opacity: flake.opacity,
              animationDuration: `${flake.duration}s`,
              animationDelay: `${flake.delay}s`,
              fontSize: flake.size * 3,
              "--drift-start": `${flake.drift * -0.5}px`,
              "--drift-mid": `${flake.drift}px`,
              "--drift-end": `${flake.drift * -0.4}px`,
            } as CSSProperties & {
              "--drift-start"?: string;
              "--drift-mid"?: string;
              "--drift-end"?: string;
            }
          }
        >
          ❅
        </span>
      ))}
    </div>
  );
};

export default Snow;
