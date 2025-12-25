import Image from "next/image";

const Stellaofastra = () => {
  return (
    <article className="work-content work-art">
      <header className="work-header">
        <h2 className="work-character center">양수연&권혜연&민주영</h2>
        <h1 className="work-title center">비극을 든 산타클로스</h1>
        <div className="work-author">illust by. 이즈라크</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/crossover/크리스마스합작_그림_이즈라크_양수연권혜연민주영_비극을 든 산타클로스.png"
          alt="이즈라크님의 아름다운 크오작품"
          width={1200}
          height={1200}
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 92vw, (max-width: 1440px) 88vw, 88vw"
        />
      </div>
    </article>
  );
};

export default Stellaofastra;
