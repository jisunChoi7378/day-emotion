import Image from "next/image";

const Doansae = () => {
  return (
    <article className="work-content work-novel">
      <header className="work-header">
        <h2 className="work-character center">
          검은방, 회색도시, 베리드 스타즈
        </h2>
        <div className="work-author">written by. 한안세</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/crossover/크리스마스합작_그림_한안세_준용성식세일_띵동.png"
          alt="한안세님의 아름다운 크오작품"
          width={400}
          height={400}
        />
      </div>
    </article>
  );
};

export default Doansae;
