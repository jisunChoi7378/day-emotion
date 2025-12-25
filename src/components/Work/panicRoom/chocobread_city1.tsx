import Image from "next/image";

const Chocobread_city1 = () => {
  return (
    <article className="work-content work-art">
      <header className="work-header">
        <h2 className="work-character center">승범지은</h2>
        <h1 className="work-title center">상사불망</h1>
        <div className="work-author">illust by. 깁미깁미</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/panicRoom/크리스마스합작_그림_깁미깁미_승범지은_상사불망.png"
          alt="깁미깁미님의 아름다운 승범지은"
          width={1200}
          height={1200}
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 92vw, (max-width: 1440px) 88vw, 88vw"
        />
      </div>
    </article>
  );
};

export default Chocobread_city1;
