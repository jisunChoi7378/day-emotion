import Image from "next/image";

const SR_D_BS2 = () => {
  return (
    <article className="work-content work-art">
      <header className="work-header">
        <h2 className="work-character center">회색도시2 ALL</h2>
        <h1 className="work-title center">크리스마스의 기적</h1>
        <div className="work-author">illust by. 꿈맛시루떡</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/cityOfMist/크리스마스합작_분야_꿈맛시루떡_회색도시2ALL_크리스마스의 기적.png"
          alt="꿈맛시루떡님의 아름다운 회색도시2"
          width={1200}
          height={1200}
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 92vw, (max-width: 1440px) 88vw, 88vw"
        />
      </div>
    </article>
  );
};

export default SR_D_BS2;
