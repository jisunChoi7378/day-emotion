import Image from "next/image";

const Chocobread_city1 = () => {
  return (
    <article className="work-content work-novel">
      <header className="work-header">
        <h2 className="work-character center">승범지은</h2>
        <div className="work-author">written by. 깁미깁미</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/panicRoom/크리스마스합작_그림_깁미깁미_승범지은_상사불망.png"
          alt="깁미깁미님의 아름다운 승범지은"
          width={400}
          height={400}
        />
      </div>
    </article>
  );
};

export default Chocobread_city1;
