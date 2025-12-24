import Image from "next/image";

const Rett0_0tter = () => {
  return (
    <article className="work-content work-novel">
      <header className="work-header">
        <h2 className="work-character center">규혁도윤</h2>
        <div className="work-author">written by. 수달박사</div>
      </header>
      <div className="flex justify-center">
        <Image
          src="/paintingWork/buriedStars/수달박사_규혁도윤/1.png"
          alt="수달박사님의 아름다운 규혁도윤"
          width={400}
          height={400}
        />
      </div>
    </article>
  );
};

export default Rett0_0tter;
