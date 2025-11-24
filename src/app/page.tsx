import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="grid place-items-center min-h-screen">
      <div>
        <Image
          src="/christmasLogo.png"
          alt="Christmas Logo"
          width={500}
          height={500}
        />
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-10 text-2xl text-outline font-semibold justify-center mb-8">
          <Link href="/panic-room">검은방</Link>
          <Link href="/city-of-mist">회색도시</Link>
          <Link href="/buried-stars">베스타</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
