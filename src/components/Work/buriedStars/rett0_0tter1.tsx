import Image from "next/image";

const Rett0_0tter1 = () => {
  return (
    <article className="work-content work-art">
      <header className="work-header">
        <h2 className="work-character center">도윤인하</h2>
        <h1 className="work-title center">(임시제목)</h1>
        <div className="work-author">illust by. 수달박사</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/buriedStars/크리스마스합작_그림_수달박사_도윤인하_.png"
          alt="수달박사님의 아름다운 도윤인하"
          width={1200}
          height={1200}
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 92vw, (max-width: 1440px) 88vw, 88vw"
        />
      </div>
    </article>
  );
};

export default Rett0_0tter1;
