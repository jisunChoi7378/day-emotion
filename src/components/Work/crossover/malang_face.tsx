import Image from "next/image";

const Malang_face = () => {
  return (
    <article className="work-content work-art">
      <header className="work-header">
        <h2 className="work-character center">
          주인공조(류태현&양시백&정은창&한도윤)
        </h2>
        <h1 className="work-title center">내가이런뺑이를치게될줄이야</h1>
        <div className="work-author">illust by. 오꼬</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/crossover/크리스마스합작_그림_오꼬_류태현_양시백_정은창_내가이런뺑이를치게될줄이야.png"
          alt="오꼬님의 아름다운 크오작품"
          width={1200}
          height={1200}
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 92vw, (max-width: 1440px) 88vw, 88vw"
        />
      </div>
    </article>
  );
};

export default Malang_face;
