import Image from "next/image";

const Stellaofastra = () => {
  return (
    <article className="work-content work-novel">
      <header className="work-header">
        <h2 className="work-character center">
          검은방, 회색도시, 베리드 스타즈
        </h2>
        <div className="work-author">written by. 이즈라크</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/crossover/크리스마스합작_그림_이즈라크_양수연권혜연민주영_비극을 든 산타클로스.png"
          alt="이즈라크님의 아름다운 크오작품"
          width={400}
          height={400}
        />
      </div>
    </article>
  );
};

export default Stellaofastra;
