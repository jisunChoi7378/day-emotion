"use client";

import Link from "next/link";
import Calendar from "@/components/common/Calendar";
import CalenderContent from "@/components/common/CalenderContent";
import Modal from "@/components/common/Modal";
import NeNggeul2 from "@/components/Work/cityOfMist/ne__nggeul2";
import PNICK_ORPG from "@/components/Work/cityOfMist/PNICK_ORPG";
import HA_RUT_ from "@/components/Work/cityOfMist/HA_RUT_";
import Juwi_nww from "@/components/Work/cityOfMist/juwi_nww";
import SR_D_BS1 from "@/components/Work/cityOfMist/SR_D_BS1";
import SR_D_BS2 from "@/components/Work/cityOfMist/SR_D_BS2";

const CityOfMistPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 py-10">
      <Modal />
      <Calendar genreName="회색도시">
        <CalenderContent work={<NeNggeul2 />}>넹글님-누아재인</CalenderContent>
        <CalenderContent work={<PNICK_ORPG />}>피닉스님</CalenderContent>
        <CalenderContent work={<HA_RUT_ />}>하룻님</CalenderContent>
        <CalenderContent work={<Juwi_nww />}>주위님</CalenderContent>
        <CalenderContent work={<SR_D_BS1 />}>
          꿈맛 시루떡님-회색도시1
        </CalenderContent>
        <CalenderContent work={<SR_D_BS2 />}>
          꿈맛 시루떡님-회색도시2
        </CalenderContent>
      </Calendar>
      <Link href="/main" className="text-blue-600 hover:underline">
        메인으로 돌아가기
      </Link>
    </div>
  );
};

export default CityOfMistPage;
