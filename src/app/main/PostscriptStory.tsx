"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const dialogues = [
  { text: "산타는...", choices: true },
  {
    text: "밀실을 나와, 도시를 지나 무대를 건너\n선물을 무사히 전달했다.",
  },
  {
    text: "다시 문 앞을 돌아보자,\n반가운 이름이 적힌 편지가 놓여 있다.",
  },
  {
    text: "편지를 열어볼까?",
  },
];

const PostscriptStory = () => {
  const router = useRouter();
  const [showStory, setShowStory] = useState(false);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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

  const goPostscript = () => {
    router.push("/postscript");
  };

  const startStory = () => {
    setShowStory(true);
    setDialogueIndex(0);
  };

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

    goPostscript();
  };

  const handleDeliver = () => {
    setDialogueIndex(1);
  };

  const handleStay = () => {
    setShowStory(false);
    setDialogueIndex(0);
    setDisplayText("");
    setIsTyping(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={startStory}
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
      </button>

      {showStory && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#0b0d17]/95 to-[#192231]/90 text-white px-4">
          <div
            role="button"
            tabIndex={0}
            onClick={handleAdvance}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleAdvance();
            }}
            className="relative w-[92%] max-w-3xl h-48 md:h-52 cursor-pointer select-none rounded-xl border border-[rgba(217,79,79,0.3)] bg-gradient-to-br from-[#0f1f18] via-[#142a25] to-[#2f0f14] p-5 md:p-6 flex flex-col justify-between overflow-visible shadow-[0_0_24px_rgba(217,79,79,0.35)]"
            aria-label="다음 대사로 넘기기"
          >
            <div className="text-base leading-relaxed whitespace-pre-line flex-1 overflow-y-auto pr-1">
              {displayText}
            </div>

            {dialogues[dialogueIndex].choices ? (
              <div className="pt-3 flex justify-end gap-2 text-[11px] sm:text-xs">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeliver();
                  }}
                  className="rounded-md border border-white/30 bg-white/10 px-3 py-1 font-semibold text-white/90 shadow hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                >
                  선물을 모두 전달했다.
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStay();
                  }}
                  className="rounded-md border border-white/30 bg-white/10 px-3 py-1 font-semibold text-white/90 shadow hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                >
                  아직 할 일이 남은 것 같다.
                </button>
              </div>
            ) : (
              <div className="pt-2 flex justify-end items-center gap-3 text-xs text-white/60">
                <span>탭하여 다음</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPostscript();
                  }}
                  className="rounded-md border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90 shadow hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                >
                  건너뛰기
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PostscriptStory;
