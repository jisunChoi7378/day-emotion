"use client";

import Image from "next/image";
import Link from "next/link";

const keys = [
  { label: "검은방", href: "/black-room", src: "/main_key1.png" },
  { label: "회색도시", href: "/city-of-mist", src: "/main_key2.png" },
  { label: "베스타", href: "/buried-stars", src: "/main_key3.png" },
  { label: "크오", href: "/crossover", src: "/main_key4.png" },
];

const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 py-10">
      <div className="relative flex items-center justify-center">
        <div className="absolute bottom-[-18px] left-1/2 h-6 w-48 -translate-x-1/2 rounded-full bg-black/20 blur-xl" />
        <Image
          src="/main_door.png"
          alt="메인 문"
          width={320}
          height={380}
          priority
          className="drop-shadow-lg"
        />
      </div>
      <p className="text-xl font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
        어떤 열쇠로 열어볼까?
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {keys.map((key) => (
          <Link
            key={key.href}
            href={key.href}
            className="flex flex-col items-center gap-2 transition-transform hover:scale-105"
          >
            <Image
              src={key.src}
              alt={`${key.label} 열쇠`}
              width={180}
              height={70}
            />
          </Link>
        ))}
      </div>
      <Link
        href="/postscript"
        className="group mt-4 flex flex-col items-center transition-transform hover:scale-105 focus-visible:scale-105"
      >
        <Image
          src="/present.png"
          alt="후기 페이지로 이동"
          width={84}
          height={84}
          className="drop-shadow-lg"
        />
        <span className="sr-only">후기 페이지로 이동</span>
      </Link>
    </div>
  );
};

export default MainPage;
