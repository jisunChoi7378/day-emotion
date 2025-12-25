import Image from "next/image";
import {useEffect, useState} from "react";

const BS_0224 = () => {
  const [character, setCharacter] = useState("허상은 여강휘");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // 모달의 스크롤 컨테이너 찾기
    const scrollContainer = document.querySelector(
      ".overflow-auto"
    ) as HTMLElement;

    if (!scrollContainer) {
      console.log("스크롤 컨테이너를 찾을 수 없습니다");
      return;
    }

    const handleScroll = () => {
      const currentScrollY = scrollContainer.scrollTop; // ✅ scrollTop 사용
      console.log("모달 스크롤:", currentScrollY); // 디버깅용
      setScrollY(currentScrollY);

      if (currentScrollY > 100) {
        setCharacter("하은성, 하무열");
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll, {passive: true});

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <article className="work-content work-novel">
      <header className="work-header">
        <h2 className="work-character center">{character}</h2>
        <div className="work-author">written by. 잔다</div>
        <p className="text-xs center">스크롤 후 다시 돌아오세요.</p>
      </header>
      <div className="h-100 md:hidden" />
      <div className="flex justify-center">
        <Image
          src="/paintingWork/panicRoom/크리스마스합작_그림_잔다_하은성하무열_첫 화이트 크리스마스.png"
          alt="잔다님의 아름다운 하은성 하무열"
          width={700}
          height={700}
        />
      </div>
    </article>
  );
};

export default BS_0224;
