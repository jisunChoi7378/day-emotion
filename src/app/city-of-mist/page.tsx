"use client";

import Link from "next/link";
import Calendar from "@/components/common/Calendar";
import CalenderContent from "@/components/common/CalenderContent";
import Modal from "@/components/common/Modal";
import NeNggeul2 from "@/components/Work/cityOfMist/ne__nggeul2";
import PNICK_ORPG from "@/components/Work/cityOfMist/PNICK_ORPG";
import HA_RUT_ from "@/components/Work/cityOfMist/HA_RUT_";

const CityOfMistPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 py-10">
      <Modal />
      <Calendar genreName="회색도시">
        <CalenderContent work={<NeNggeul2 />}>넹글님-누아재인</CalenderContent>
        <CalenderContent work={<PNICK_ORPG />}>피닉스님</CalenderContent>
        <CalenderContent work={<HA_RUT_ />}>하룻님</CalenderContent>
      </Calendar>
      <Link href="/" className="text-blue-600 hover:underline">
        메인으로 돌아가기
      </Link>
    </div>
  );
};

export default CityOfMistPage;
