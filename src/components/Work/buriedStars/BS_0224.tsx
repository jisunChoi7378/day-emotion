import Image from "next/image";

const BS_0224 = () => {
  return (
    <article className="work-content work-art">
      <header className="work-header">
        <h2 className="work-character center">장세일</h2>
        <h1 className="work-title center">선물</h1>
        <div className="work-author">illust by. 온점</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/buriedStars/크리스마스합작_그림_온점_장세일_선물.png"
          alt="온점님의 아름다운 장세일"
          width={1200}
          height={1200}
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 92vw, (max-width: 1440px) 88vw, 88vw"
        />
      </div>
    </article>
  );
};

export default BS_0224;
