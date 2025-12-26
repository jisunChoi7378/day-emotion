"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const dialogues = [
  { text: "문은...", choices: true },
  { speaker: "???", text: "…잠기지 않은 것 같아." },
  { text: "천천히 손을 뻗어 문을 열었다." },
  { text: "문틈으로 들어오는 햇빛에 눈이 부시다." },
  { text: "언제부터였을까." },
  { text: "눈은 이미 그쳐 있었다." },
  {
    text: "하지만 포근히 쌓여있는 눈은\n선물을 받은 사람들의 기쁨을 헤아리게 만든다.",
  },
  { text: "행복한 크리스마스가 될 것 같다." },
];

interface TrueEndStoryProps {
  triggerImageSrc?: string;
}

const TrueEndStory = ({
  triggerImageSrc = "/door_light.png",
}: TrueEndStoryProps) => {
  const router = useRouter();
  const [showStory, setShowStory] = useState(false);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const showFin = dialogueIndex >= 3; // show fin + sky background from the sunlight line onward

  useEffect(() => {
    if (!showStory) return;

    let frame = 0;
    const full = dialogues[dialogueIndex].text;
    setDisplayText("");
    setIsTyping(true);

    const timer = setInterval(() => {
      frame += 1;
      setDisplayText(full.slice(0, frame));
      if (frame >= full.length) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 18);

    return () => clearInterval(timer);
  }, [dialogueIndex, showStory]);

  const handleAdvance = () => {
    if (!showStory) return;

    const current = dialogues[dialogueIndex];

    if (isTyping) {
      setDisplayText(current.text);
      setIsTyping(false);
      return;
    }

    if (current.choices) return;

    if (dialogueIndex < dialogues.length - 1) {
      setDialogueIndex((prev) => prev + 1);
      return;
    }

    router.push("/trueend");
  };

  const startStory = () => {
    setShowStory(true);
    setDialogueIndex(0);
    setDisplayText("");
    setIsTyping(false);
  };

  const overlayBg = useMemo(() => {
    if (!showFin) return "bg-gradient-to-b from-[#0b0d17] to-[#192231]";
    return "bg-cover bg-center";
  }, [showFin]);

  const overlayStyle = useMemo(() => {
    if (!showFin) return undefined;
    return { backgroundImage: "url('/christmasbg-TrueEndSkyBlue.jpg')" };
  }, [showFin]);

  return (
    <>
      <button
        type="button"
        onClick={startStory}
        className="transition-transform hover:scale-105 focus-visible:scale-105"
      >
        <Image
          src={triggerImageSrc}
          alt="탈출하기"
          width={140}
          height={140}
          className="drop-shadow-lg"
        />
        <span className="sr-only">탈출하기</span>
      </button>

      {showStory && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center text-white px-4 ${overlayBg}`}
          style={overlayStyle}
        >
          <div className="relative h-[320px] w-[92%] max-w-3xl">
            {dialogueIndex === 1 && (
              <Image
                src="/main_door.png"
                alt="문"
                width={240}
                height={300}
                priority
                className="drop-shadow-lg absolute bottom-0 left-1/2 -translate-x-1/2"
              />
            )}
            {showFin && (
              <Image
                src="/fin.png"
                alt="FIN"
                width={260}
                height={320}
                priority
                className="drop-shadow-lg absolute bottom-0 left-1/2 -translate-x-1/2"
              />
            )}
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={handleAdvance}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleAdvance();
            }}
            className="relative -mt-8 w-[92%] max-w-3xl h-48 md:h-52 cursor-pointer select-none rounded-xl border border-[rgba(217,79,79,0.3)] bg-gradient-to-br from-[#0f1f18] via-[#142a25] to-[#2f0f14] p-5 md:p-6 flex flex-col justify-between overflow-visible shadow-[0_0_24px_rgba(217,79,79,0.35)]"
            aria-label="다음 대사로 넘기기"
          >
            {dialogues[dialogueIndex].speaker && (
              <span className="absolute -top-4 left-4 rounded-sm border border-[#f4cfcf] bg-[#e95e5e] px-3 py-1 text-sm font-semibold tracking-wide text-[#220c0c] shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                {dialogues[dialogueIndex].speaker}
              </span>
            )}
            <div className="text-base leading-relaxed whitespace-pre-line flex-1 overflow-y-auto pr-1">
              {displayText}
            </div>
            {dialogues[dialogueIndex].choices ? (
              <div className="pt-3 flex justify-end gap-2 text-[11px] sm:text-xs">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDialogueIndex(1);
                  }}
                  className="rounded-md border border-white/30 bg-white/10 px-3 py-1 font-semibold text-white/90 shadow hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                >
                  잠기지 않은 것 같다
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowStory(false);
                    setDialogueIndex(0);
                    setDisplayText("");
                    setIsTyping(false);
                  }}
                  className="rounded-md border border-white/30 bg-white/10 px-3 py-1 font-semibold text-white/90 shadow hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                >
                  열쇠를 찾아와야 할 것 같다
                </button>
              </div>
            ) : (
              <div className="pt-2 text-right text-xs text-white/70">
                탭하여 다음
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TrueEndStory;
