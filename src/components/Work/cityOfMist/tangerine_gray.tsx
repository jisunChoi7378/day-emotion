import Image from "next/image";

const Tangerine_gray = () => {
  return (
    <article className="work-content work-art">
      <header className="work-header">
        <h2 className="work-character center">양시백, 홍설희</h2>
        <h1 className="work-title center">돌아갈 곳</h1>
        <div className="work-author">illust by. 져린</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/cityOfMist/크리스마스합작 제출_져린 _양시백, 홍설희.png"
          alt="져린님의 아름다운 양시백,홍설희"
          width={1200}
          height={1200}
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 92vw, (max-width: 1440px) 88vw, 88vw"
        />
      </div>
    </article>
  );
};

export default Tangerine_gray;
