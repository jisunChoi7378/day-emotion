"use client";

import Calendar from "@/components/common/Calendar";
import CalenderContent from "@/components/common/CalenderContent";
import Modal from "@/components/common/Modal";
import BScityhouse from "@/components/Work/buriedStars/BScityhouse";
import What_fxx from "@/components/Work/panicRoom/what_fxx";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-4">
      <Modal>
        <div>
          앗! 아직 아무것도 준비되지 않았는데 어떻게 이 화면을 보고있는거죠?
        </div>
      </Modal>
      <Image
        src="/christmasLogo.png"
        alt="Description"
        width={150}
        height={150}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <Calendar genreName="검은방">
          <CalenderContent className="bg-gray-700" work={<What_fxx />}>
            이수님
          </CalenderContent>
        </Calendar>
        <Calendar genreName="회색도시">
          <CalenderContent>회색도시</CalenderContent>
        </Calendar>
        <Calendar genreName="베스타">
          <CalenderContent className="bg-[#7adccaf]" work={<BScityhouse />}>
            옥님
          </CalenderContent>
        </Calendar>
        <Calendar genreName="크오">
          <CalenderContent>크오</CalenderContent>
        </Calendar>
      </div>
      <Link href="/postscript">후기 페이지</Link>
    </div>
  );
};

export default Home;
