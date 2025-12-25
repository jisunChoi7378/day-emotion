import Image from "next/image";
import { useEffect, useState } from "react";

const Wksek_cm = () => {
  const [character, setCharacter] = useState("허상은 여강휘");

  useEffect(() => {
    // 모달의 스크롤 컨테이너 찾기
    const scrollContainer = document.querySelector(
      ".overflow-auto",
    ) as HTMLElement;

    if (!scrollContainer) {
      console.log("스크롤 컨테이너를 찾을 수 없습니다");
      return;
    }

    const handleScroll = () => {
      const currentScrollY = scrollContainer.scrollTop; // ✅ scrollTop 사용

      if (currentScrollY > 260) {
        setCharacter("하은성, 하무열");
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <article className="work-content work-art">
      <header className="work-header">
        <h2 className="work-character center">{character}</h2>
        <h1 className="work-title center">첫 화이트 크리스마스</h1>
        <div className="work-author">illust by. 잔다</div>
        <p className="text-xs center">스크롤 후 다시 돌아오세요.</p>
      </header>
      <div className="h-100 md:hidden" />
      <div className="flex justify-center">
        <Image
          src="/paintingWork/panicRoom/크리스마스합작_그림_잔다_하은성하무열_첫 화이트 크리스마스.png"
          alt="잔다님의 아름다운 하은성 하무열"
          width={1200}
          height={1200}
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 92vw, (max-width: 1440px) 88vw, 88vw"
        />
      </div>
    </article>
  );
};

export default Wksek_cm;
