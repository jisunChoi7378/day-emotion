"use client";

import Image from "next/image";

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
  const handleDoorClick = () => {
    window.location.href = "/main";
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 py-10">
      <Modal />
      <Calendar genreName="검은방">
        <CalenderContent
          id="What_fxx"
          work={<What_fxx />}
          title="백설과 붉은 심장"
        >
          이수님
        </CalenderContent>
        <CalenderContent id="N1GHT_AND_D4WN" work={<N1GHT_AND_D4WN />}>
          새벽님
        </CalenderContent>
        <CalenderContent id="NeNggeul1" work={<NeNggeul1 />}>
          넹글님-수혁수연
        </CalenderContent>
        <CalenderContent id="Chocobread_city2" work={<Chocobread_city2 />}>
          깁미깁미님-수혁수연
        </CalenderContent>
        <CalenderContent id="Chocobread_city1" work={<Chocobread_city1 />}>
          깁미깁미님-승범지은
        </CalenderContent>
        <CalenderContent id="Wksek_cm" work={<Wksek_cm />}>
          잔다님
        </CalenderContent>
      </Calendar>
      <Image
        src="/love_is_an_open_door.png"
        alt="돌아가는 문"
        width={150}
        height={150}
        onClick={handleDoorClick}
      />
    </div>
  );
};

export default BlackRoomPage;
