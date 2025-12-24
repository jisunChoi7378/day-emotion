import Image from "next/image";

const NO_wawa__ = () => {
  return (
    <article className="work-content work-novel">
      <header className="work-header">
        <h2 className="work-character center">장세일</h2>
        <div className="work-author">written by. 안사</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/buriedStars/크리스마스합작_그림_안사_장세일_네 행복한 성탄절을 원해.png"
          alt="안사님의 아름다운 장세일"
          width={400}
          height={400}
        />
      </div>
    </article>
  );
};

export default NO_wawa__;
