import Image from "next/image";

const Juwi_nww = () => {
  return (
    <article className="work-content work-art">
      <header className="work-header">
        <h2 className="work-character center">양지조</h2>
        <h1 className="work-title center">기념 사진</h1>
        <div className="work-author">illust by. 주위</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/cityOfMist/크리스마스합작_그림_주위_양지조_기념 사진.png"
          alt="주위님의 아름다운 양지조"
          width={1200}
          height={1200}
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 92vw, (max-width: 1440px) 88vw, 88vw"
        />
      </div>
    </article>
  );
};

export default Juwi_nww;
