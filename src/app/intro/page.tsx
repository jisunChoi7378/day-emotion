"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const dialogues = [
  { speaker: "", text: "낯선 감각에 눈을 뜬다.", showSanta: false },
  { speaker: "???", text: "어…?", showSanta: false },
  {
    speaker: "",
    text: "새하얀 눈이 하늘을 가득 덮고 있다.\n차갑지만 이상할 정도로 보드라운 눈송이가 몸을 감싸오고,\n귓가엔 익숙한 캐롤이 들려온다.",
    showSanta: false,
  },
  { speaker: "???", text: "여기는….", showSanta: true },
  {
    speaker: "",
    text: "낯선 풍경에 상황을 파악하려 머리를 굴린다.\n…목적지와 다른 곳에 와 버린 것만 같다.",
    showSanta: true,
  },
  { speaker: "", text: "탈출해야 한다.", showSanta: true },
  { speaker: "", text: "정신 차리자.\n밀실에 잡혀가도 정신만 차리면 산다고 했다.", showSanta: true },
  {
    speaker: "",
    text: "손 안에 들린 건 커다란 선물 상자.\n그제야 오늘 해야만 하는 일이 떠오른다.",
    showSanta: true,
  },
  {
    speaker: "",
    text: "다른 날도 아니고, 12월 25일. \n크리스마스인 오늘만 할 수 있는 일이.",
    showSanta: true,
  },
  {
    speaker: "",
    text: "고개를 들자, 조그만 문이 눈앞에 들어온다.\n이곳을 나가 선물을 전해줘야 한다.",
    showSanta: true,
  },
  {
    speaker: "",
    text: "그 앞에는 각각 색깔이 다른 열쇠가 놓여 있다.\n목적지에 맞는 열쇠를 사용해야 나갈 수 있을 것 같다.",
    showSanta: true,
  },
  {
    speaker: "",
    text: "문 앞에 조그마한 종이가 붙어 있다.\n[검회베 스포일러 주의!]",
    showSanta: true,
  },
  { speaker: "", text: "…이상한 소리다.", showSanta: true },
];

const IntroPage = () => {
  const router = useRouter();
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let frame = 0;
    const full = dialogues[dialogueIndex].text;
    setDisplayText("");

    const timer = setInterval(() => {
      frame += 1;
      setDisplayText(full.slice(0, frame));
      if (frame >= full.length) {
        clearInterval(timer);
      }
    }, 18);

    return () => clearInterval(timer);
  }, [dialogueIndex]);

  const handleNextDialogue = () => {
    if (dialogueIndex < dialogues.length - 1) {
      setDialogueIndex((prev) => prev + 1);
      return;
    }
    router.push("/main");
  };

  const currentDialogue = dialogues[dialogueIndex];
  const showSanta = currentDialogue.showSanta;
  const showMainBackground = dialogueIndex >= 3;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center text-white ${showMainBackground ? "bg-transparent" : "bg-gradient-to-b from-[#0b0d17] to-[#192231]"}`}
    >
      <div className="relative h-[320px] w-[92%] max-w-3xl">
        {showSanta && (
          <Image
            src="/main_santa.png"
            alt="산타"
            width={260}
            height={320}
            priority
            className="drop-shadow-lg absolute bottom-0 left-[70%] -translate-x-1/2"
          />
        )}
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={handleNextDialogue}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleNextDialogue();
        }}
        className="relative -mt-16 w-[92%] max-w-3xl h-48 md:h-52 cursor-pointer select-none rounded-xl border border-[rgba(217,79,79,0.3)] bg-gradient-to-br from-[#0f1f18] via-[#142a25] to-[#2f0f14] p-5 md:p-6 flex flex-col justify-between overflow-visible shadow-[0_0_24px_rgba(217,79,79,0.35)]"
        aria-label="다음 대사로 넘기기"
      >
        {currentDialogue.speaker && (
          <span className="absolute -top-4 left-4 rounded-sm border border-[#f4cfcf] bg-[#e95e5e] px-3 py-1 text-sm font-semibold tracking-wide text-[#220c0c] shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
            {currentDialogue.speaker}
          </span>
        )}
        <div className="text-base leading-relaxed whitespace-pre-line flex-1 overflow-y-auto pr-1">
          {displayText}
        </div>
        <div className="pt-2 text-right text-xs text-white/60">탭하여 다음</div>
      </div>
    </div>
  );
};

export default IntroPage;
