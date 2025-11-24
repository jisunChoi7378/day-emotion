import Image from "next/image";
import Link from "next/link";
import Calendar from "@/components/common/Calendar";
import Header from "@/components/common/Header";

const BuriedStars = () => {
  return (
    <div className="flex flex-col items-center gap-8 pt-8">
      <Image
        src="/christmasLogo.png"
        alt="Christmas Logo"
        width={110}
        height={110}
      />
      <Header>
        <Link href="/">Home</Link>
        <Link href="/panic-room">검은방</Link>
        <Link href="/city-of-mist">회색도시</Link>
        <div className="text-[#b7d3cf] text-outline-mint">베스타</div>
      </Header>
      <Calendar />
    </div>
  );
};

export default BuriedStars;
