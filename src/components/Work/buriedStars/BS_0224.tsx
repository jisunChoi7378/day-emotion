import Image from "next/image";

const BS_0224 = () => {
  return (
    <article className="work-content work-novel">
      <header className="work-header">
        <h2 className="work-character center">장세일</h2>
        <div className="work-author">written by. 온점</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/buriedStars/크리스마스합작_그림_온점_장세일_선물.png"
          alt="온점님의 아름다운 장세일"
          width={400}
          height={400}
        />
      </div>
    </article>
  );
};

export default BS_0224;
