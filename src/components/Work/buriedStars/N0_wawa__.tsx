import Image from "next/image";

const NO_wawa__ = () => {
  return (
    <article className="work-content work-art">
      <header className="work-header">
        <h2 className="work-character center">장세일</h2>
        <h1 className="work-title center">네 행복한 성탄절을 원해</h1>
        <div className="work-author">illust by. 안사</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/buriedStars/크리스마스합작_그림_안사_장세일_네 행복한 성탄절을 원해.png"
          alt="안사님의 아름다운 장세일"
          width={1200}
          height={1200}
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 92vw, (max-width: 1440px) 88vw, 88vw"
        />
      </div>
    </article>
  );
};

export default NO_wawa__;
