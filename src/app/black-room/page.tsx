"use client";

import Link from "next/link";
import Calendar from "@/components/common/Calendar";
import CalenderContent from "@/components/common/CalenderContent";
import Modal from "@/components/common/Modal";
import What_fxx from "@/components/Work/panicRoom/what_fxx";
import N1GHT_AND_D4WN from "@/components/Work/panicRoom/N1GHT_AND_D4WN";
import NeNggeul1 from "@/components/Work/panicRoom/ne__nggeul1";
import Chocobread_city2 from "@/components/Work/panicRoom/chocobread_city2";
import Chocobread_city1 from "@/components/Work/panicRoom/chocobread_city1";
import Wksek_cm from "@/components/Work/panicRoom/wksek_cm";

const BlackRoomPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 py-10">
      <Modal />
      <Calendar genreName="검은방">
        <CalenderContent className="bg-gray-700" work={<What_fxx />}>
          이수님
        </CalenderContent>
        <CalenderContent work={<N1GHT_AND_D4WN />}>새벽님</CalenderContent>
        <CalenderContent work={<NeNggeul1 />}>넹글님-수혁수연</CalenderContent>
        <CalenderContent work={<Chocobread_city2 />}>
          깁미깁미님-수혁수연
        </CalenderContent>
        <CalenderContent work={<Chocobread_city1 />}>
          깁미깁미님-승범지은
        </CalenderContent>
        <CalenderContent work={<Wksek_cm />}>잔다님</CalenderContent>
      </Calendar>
      <Link href="/main" className="text-blue-600 hover:underline">
        메인으로 돌아가기
      </Link>
    </div>
  );
};

export default BlackRoomPage;
