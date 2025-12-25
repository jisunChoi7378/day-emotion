import Image from "next/image";

const Malang_face = () => {
  return (
    <article className="work-content work-novel">
      <header className="work-header">
        <h2 className="work-character center">
          검은방, 회색도시, 베리드 스타즈
        </h2>
        <div className="work-author">written by. 오꼬</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/crossover/크리스마스합작_그림_오꼬_류태현_양시백_정은창_내가이런뺑이를치게될줄이야.png"
          alt="오꼬님의 아름다운 크오작품"
          width={400}
          height={400}
        />
      </div>
    </article>
  );
};

export default Malang_face;
