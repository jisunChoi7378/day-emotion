import Image from "next/image";

const SR_D_BS2 = () => {
  return (
    <article className="work-content work-novel">
      <header className="work-header">
        <h2 className="work-character center">양시백,홍설희</h2>
        <div className="work-author">written by. 져린</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/cityOfMist/크리스마스합작 제출_져린 _양시백, 홍설희.png"
          alt="져린님의 아름다운 양시백,홍설희"
          width={400}
          height={400}
        />
      </div>
    </article>
  );
};

export default SR_D_BS2;
