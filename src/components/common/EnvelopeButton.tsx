"use client";

import React, { useMemo, useState, type CSSProperties } from "react";

interface Props {
  id: number;
  author: string;
  onOpen: () => void;
  maxWidth?: number | string;
}

const createRng = (seed: number) => {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let x = t;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
};

const EnvelopeButton = ({ id, author, onOpen, maxWidth = 160 }: Props) => {
  const [open, setOpen] = useState(false);

  const palettes = useMemo(
    () => [
      {
        bodyTop: "#fff7f5",
        bodyBottom: "#ffe1e1",
        bodyBorder: "rgba(204, 38, 38, 0.2)",
        flapTop: "#ff6b6b",
        flapBottom: "#b22222",
        sealTop: "#ffd27a",
        sealBottom: "#ffb74d",
        sealText: "#7b2a00",
      },
      {
        bodyTop: "#f4fff4",
        bodyBottom: "#e0f6e8",
        bodyBorder: "rgba(17, 94, 40, 0.24)",
        flapTop: "#00b26b",
        flapBottom: "#0b3b17",
        sealTop: "#d4f9d0",
        sealBottom: "#9de29c",
        sealText: "#0f2f18",
      },
      {
        bodyTop: "#fffdf2",
        bodyBottom: "#f5ead4",
        bodyBorder: "rgba(176, 102, 0, 0.24)",
        flapTop: "#f6b800",
        flapBottom: "#c27400",
        sealTop: "#ffeab3",
        sealBottom: "#ffd27a",
        sealText: "#5a2d00",
      },
      {
        bodyTop: "#ffeeee",
        bodyBottom: "#f9cccc",
        bodyBorder: "rgba(153, 0, 0, 0.28)",
        flapTop: "#cc0000",
        flapBottom: "#7a0000",
        sealTop: "#ffd7a3",
        sealBottom: "#ffb066",
        sealText: "#4d1a00",
      },
      {
        bodyTop: "#f2fff5",
        bodyBottom: "#ddf8e3",
        bodyBorder: "rgba(46, 125, 50, 0.24)",
        flapTop: "#7bd67b",
        flapBottom: "#3b873f",
        sealTop: "#e8ffe8",
        sealBottom: "#b5f3b5",
        sealText: "#1f4d23",
      },
      {
        bodyTop: "#eefaf1",
        bodyBottom: "#d3eed9",
        bodyBorder: "rgba(11, 59, 23, 0.3)",
        flapTop: "#1f6b2f",
        flapBottom: "#0b3b17",
        sealTop: "#c7f1cf",
        sealBottom: "#8dd7a1",
        sealText: "#0a2b14",
      },
      {
        bodyTop: "#fff0f0",
        bodyBottom: "#ffd3d3",
        bodyBorder: "rgba(178, 34, 34, 0.28)",
        flapTop: "#d7263d",
        flapBottom: "#8b111f",
        sealTop: "#ffe0a6",
        sealBottom: "#ffb864",
        sealText: "#4a1a12",
      },
      {
        bodyTop: "#f9fff7",
        bodyBottom: "#e8f5e5",
        bodyBorder: "rgba(24, 94, 32, 0.24)",
        flapTop: "#5cbf60",
        flapBottom: "#2d7a34",
        sealTop: "#e5ffe0",
        sealBottom: "#baf5b2",
        sealText: "#214526",
      },
      {
        bodyTop: "#fff8f4",
        bodyBottom: "#ffe8d9",
        bodyBorder: "rgba(184, 80, 0, 0.22)",
        flapTop: "#e04732",
        flapBottom: "#a0291c",
        sealTop: "#ffdcb3",
        sealBottom: "#ffb97a",
        sealText: "#532112",
      },
      {
        bodyTop: "#f3fff5",
        bodyBottom: "#ddf3e0",
        bodyBorder: "rgba(22, 66, 35, 0.26)",
        flapTop: "#2f8f46",
        flapBottom: "#15522a",
        sealTop: "#d7f5dc",
        sealBottom: "#9fd9aa",
        sealText: "#0f2e17",
      },
      {
        bodyTop: "#fff5f5",
        bodyBottom: "#ffd9d9",
        bodyBorder: "rgba(189, 45, 45, 0.25)",
        flapTop: "#b72020",
        flapBottom: "#6f0f0f",
        sealTop: "#ffe6b8",
        sealBottom: "#ffc87d",
        sealText: "#4d1c0f",
      },
      {
        bodyTop: "#f2fff9",
        bodyBottom: "#e0f7ec",
        bodyBorder: "rgba(33, 94, 63, 0.22)",
        flapTop: "#3f9f5c",
        flapBottom: "#1b5e35",
        sealTop: "#d9f7e3",
        sealBottom: "#a8e4bc",
        sealText: "#113523",
      },
    ],
    [],
  );

  const randomProps = useMemo(() => {
    const rng = createRng(id * 0x9e3779b1 + 1337);
    const paletteIndex = Math.floor(rng() * palettes.length);
    const tiltDeg = (rng() - 0.5) * 48; // ~ -24deg to +24deg
    return { paletteIndex, tiltDeg };
  }, [id, palettes.length]);

  const palette = useMemo(
    () => palettes[randomProps.paletteIndex],
    [palettes, randomProps.paletteIndex],
  );

  const paletteVars = useMemo(
    () =>
      ({
        "--env-body-top": palette.bodyTop,
        "--env-body-bottom": palette.bodyBottom,
        "--env-body-border": palette.bodyBorder,
        "--env-flap-top": palette.flapTop,
        "--env-flap-bottom": palette.flapBottom,
        "--env-seal-top": palette.sealTop,
        "--env-seal-bottom": palette.sealBottom,
        "--env-seal-text": palette.sealText,
      }) as CSSProperties,
    [palette],
  );

  const handleToggle = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    if (!open) {
      setOpen(true);
    } else {
      // second click when open: open letter modal
      onOpen();
      setOpen(false);
    }
  };

  return (
    <div
      className="envelope-wrapper"
      style={{
        maxWidth,
        transform: `rotate(${randomProps.tiltDeg}deg)`,
        transformOrigin: "50% 50%",
      }}
    >
      <div
        className={`envelope ${open ? "open" : ""}`}
        onMouseLeave={() => setOpen(false)}
        onMouseEnter={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleToggle(e);
        }}
        style={paletteVars}
      >
        <div
          className="envelope-body"
          aria-label="envelope body"
          onClick={handleToggle}
          role="button"
          style={{ zIndex: 1 }}
        />

        <div
          className={`flap-wrap ${open ? "open" : ""}`}
          aria-label="envelope flap"
          onClick={handleToggle}
          role="button"
          style={{ zIndex: 4 }}
        >
          <div className="envelope-flap" />
          <div className="envelope-seal">❤</div>
        </div>

        <div
          className="letter"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
            setOpen(false);
          }}
        >
          <div className="letter-from">from. {author}</div>
        </div>
      </div>
    </div>
  );
};

export default EnvelopeButton;
