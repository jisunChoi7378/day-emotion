"use client";

import React, { useMemo, useState } from "react";

interface Props {
  id: number;
  author: string;
  title: string;
  onOpen: () => void;
  maxWidth?: number | string;
}

const EnvelopeButton = ({
  id,
  author,
  title,
  onOpen,
  maxWidth = 160,
}: Props) => {
  const [open, setOpen] = useState(false);
  const tiltDeg = useMemo(() => ((id * 13) % 41) - 20, [id]);

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
        transform: `rotate(${tiltDeg}deg)`,
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
          <div className="letter-title">[{title}]</div>
        </div>
      </div>
    </div>
  );
};

export default EnvelopeButton;
