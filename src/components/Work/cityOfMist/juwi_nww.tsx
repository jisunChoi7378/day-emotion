import Image from "next/image";

const Juwi_nww = () => {
  return (
    <article className="work-content work-novel">
      <header className="work-header">
        <h2 className="work-character center">양지조</h2>
        <div className="work-author">written by. 주위</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/cityOfMist/크리스마스합작_그림_주위_양지조_기념 사진.png"
          alt="주위님의 아름다운 양지조"
          width={400}
          height={400}
        />
      </div>
    </article>
  );
};

export default Juwi_nww;
