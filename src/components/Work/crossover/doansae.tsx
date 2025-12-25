import Image from "next/image";

const Doansae = () => {
  return (
    <article className="work-content work-art">
      <header className="work-header">
        <h2 className="work-character center">김성식&장세일&서준용</h2>
        <h1 className="work-title center">띵동</h1>
        <div className="work-author">illust by. 한안세</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/crossover/크리스마스합작_그림_한안세_준용성식세일_띵동.png"
          alt="한안세님의 아름다운 크오작품"
          width={1200}
          height={1200}
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 92vw, (max-width: 1440px) 88vw, 88vw"
        />
      </div>
    </article>
  );
};

export default Doansae;
