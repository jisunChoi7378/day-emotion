import Image from "next/image";

const SR_D_BS3 = () => {
  return (
    <article className="work-content work-novel">
      <header className="work-header">
        <h2 className="work-character center">베스타</h2>
        <div className="work-author">written by. 꿈맛시루떡</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/buriedStars/크리스마스합작_분야_꿈맛시루떡_베리드스타즈ALL_크리스마스의 기적.png"
          alt="꿈맛시루떡님의 아름다운 베스타"
          width={400}
          height={400}
        />
      </div>
    </article>
  );
};

export default SR_D_BS3;
