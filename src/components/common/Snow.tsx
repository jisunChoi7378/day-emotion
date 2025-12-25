const flakes = [
  { left: "5%", size: 6, opacity: 0.75, duration: 12, delay: 0 },
  { left: "12%", size: 5, opacity: 0.6, duration: 14, delay: 2 },
  { left: "20%", size: 4, opacity: 0.55, duration: 13, delay: 4 },
  { left: "28%", size: 7, opacity: 0.7, duration: 15, delay: 1 },
  { left: "34%", size: 5, opacity: 0.6, duration: 16, delay: 3 },
  { left: "42%", size: 6, opacity: 0.7, duration: 12, delay: 5 },
  { left: "48%", size: 4, opacity: 0.55, duration: 14, delay: 0 },
  { left: "55%", size: 7, opacity: 0.75, duration: 13, delay: 2 },
  { left: "62%", size: 5, opacity: 0.6, duration: 15, delay: 4 },
  { left: "68%", size: 4, opacity: 0.5, duration: 16, delay: 1 },
  { left: "74%", size: 6, opacity: 0.7, duration: 12, delay: 3 },
  { left: "81%", size: 5, opacity: 0.6, duration: 14, delay: 5 },
  { left: "88%", size: 7, opacity: 0.75, duration: 15, delay: 0 },
  { left: "94%", size: 6, opacity: 0.65, duration: 13, delay: 2 },
  { left: "2%", size: 5, opacity: 0.6, duration: 14, delay: 6 },
  { left: "17%", size: 6, opacity: 0.7, duration: 15, delay: 7 },
  { left: "31%", size: 4, opacity: 0.5, duration: 16, delay: 8 },
  { left: "39%", size: 7, opacity: 0.75, duration: 14, delay: 9 },
  { left: "46%", size: 5, opacity: 0.6, duration: 13, delay: 6 },
  { left: "53%", size: 6, opacity: 0.7, duration: 15, delay: 7 },
  { left: "59%", size: 4, opacity: 0.5, duration: 16, delay: 8 },
  { left: "66%", size: 7, opacity: 0.75, duration: 14, delay: 9 },
  { left: "71%", size: 5, opacity: 0.6, duration: 13, delay: 6 },
  { left: "77%", size: 6, opacity: 0.68, duration: 12, delay: 7 },
  { left: "83%", size: 4, opacity: 0.5, duration: 16, delay: 8 },
  { left: "90%", size: 7, opacity: 0.8, duration: 14, delay: 9 },
];

const Snow = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {flakes.map((flake, idx) => (
        <span
          key={idx}
          className="snowflake"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Snow;
