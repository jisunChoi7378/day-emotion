import Image from "next/image";

const ID520graceyc = () => {
  return (
    <article className="work-content work-art">
      <header className="work-header">
        <h2 className="work-character center">한도윤</h2>
        <h1 className="work-title center">메리 크리스마스!</h1>
        <div className="work-author">illust by. 수봄</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/buriedStars/크리스마스합작_그림_수봄_한도윤_메리크리스마스!.PNG"
          alt="수달박사님의 아름다운 한도윤"
          width={1200}
          height={1200}
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 92vw, (max-width: 1440px) 88vw, 88vw"
        />
      </div>
    </article>
  );
};

export default ID520graceyc;
