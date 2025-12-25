import Image from "next/image";

const Hello_9r_ = () => {
  return (
    <article className="work-content work-art">
      <header className="work-header">
        <h2 className="work-character center">세일인하</h2>
        <h1 className="work-title center">다시 만난 무대</h1>
        <div className="work-author">illust by. 로아</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/buriedStars/크리스마스합작_그림_로아_세일인하_다시만난무대.png"
          alt="로아님의 아름다운 세일인하"
          width={1200}
          height={1200}
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 92vw, (max-width: 1440px) 88vw, 88vw"
        />
      </div>
    </article>
  );
};

export default Hello_9r_;
