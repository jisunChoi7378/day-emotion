"use client";

import Link from "next/link";
import Calendar from "@/components/common/Calendar";
import CalenderContent from "@/components/common/CalenderContent";
import Modal from "@/components/common/Modal";
import BScityhouse1 from "@/components/Work/buriedStars/BScityhouse1";
import BScityhouse2 from "@/components/Work/buriedStars/BScityhouse2";
import Bs_extinct from "@/components/Work/buriedStars/bs_extinct";
import BScityhouse3 from "@/components/Work/buriedStars/BScityhouse3";
import ID174x140 from "@/components/Work/buriedStars/178x140";

const BuriedStarsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 py-10">
      <Modal />
      <Calendar genreName="베스타">
        <CalenderContent className="bg-[#7adccaf]" work={<BScityhouse1 />}>
          옥님-민주영 가족
        </CalenderContent>
        <CalenderContent work={<BScityhouse2 />}>옥님-주영연하</CalenderContent>
        <CalenderContent work={<Bs_extinct />}>멸종님</CalenderContent>
        <CalenderContent work={<BScityhouse3 />}>옥님-주영인하</CalenderContent>
        <CalenderContent work={<ID174x140 />}>치르노님</CalenderContent>
      </Calendar>
      <Link href="/" className="text-blue-600 hover:underline">
        메인으로 돌아가기
      </Link>
    </div>
  );
};

export default BuriedStarsPage;
