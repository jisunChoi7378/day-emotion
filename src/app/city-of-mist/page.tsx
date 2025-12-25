"use client";

import Image from "next/image";

import Calendar from "@/components/common/Calendar";
import CalenderContent from "@/components/common/CalenderContent";
import Modal from "@/components/common/Modal";
import NeNggeul2 from "@/components/Work/cityOfMist/ne__nggeul2";
import PNICK_ORPG from "@/components/Work/cityOfMist/PNICK_ORPG";
import HA_RUT_ from "@/components/Work/cityOfMist/HA_RUT_";
import Juwi_nww from "@/components/Work/cityOfMist/juwi_nww";
import Tangerine_gray from "@/components/Work/cityOfMist/tangerine_gray";
import SR_D_BS1 from "@/components/Work/cityOfMist/SR_D_BS1";
import SR_D_BS2 from "@/components/Work/cityOfMist/SR_D_BS2";
import City_of_mist_q from "@/components/Work/cityOfMist/city_of_mist_q";
import Sion_mist from "@/components/Work/cityOfMist/sion_mist";

const CityOfMistPage = () => {
  const handleDoorClick = () => {
    window.location.href = "/main";
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 py-10">
      <Modal />
      <Calendar genreName="CITY OF MIST">
        <CalenderContent
          work={<NeNggeul2 />}
          id="NeNggeul2"
          title="크리스마스에 선물은 오는가"
        >
          넹글님 / 누아재인
        </CalenderContent>
        <CalenderContent
          work={<PNICK_ORPG />}
          id="PNICK_ORPG"
          title="설희를 위한 크리스마스 대작전"
        >
          피닉스님 / 생존조
        </CalenderContent>
        <CalenderContent work={<HA_RUT_ />} id="HA_RUT_" title="구멍">
          하룻님 / 생존조
        </CalenderContent>
        <CalenderContent work={<Juwi_nww />} id="Juwi_nww" title="기념 사진">
          주위님 / 양지조
        </CalenderContent>
        <CalenderContent
          work={<SR_D_BS1 />}
          id="SR_D_BS1"
          title="크리스마스의 기적"
        >
          꿈맛시루떡님 / 회도1 ALL
        </CalenderContent>
        <CalenderContent
          work={<SR_D_BS2 />}
          id="SR_D_BS2"
          title="크리스마스의 기적 2"
        >
          꿈맛시루떡님 / 회도2 ALL
        </CalenderContent>
        <CalenderContent
          work={<Tangerine_gray />}
          id="Tangerine_gray"
          title="돌아갈 곳"
        >
          져린님 / 양시백, 홍설희
        </CalenderContent>
        <CalenderContent
          work={<City_of_mist_q />}
          id="City_of_mist_q"
          title="크리스마스의 12가지 괴로움"
        >
          큘님 / ALL
        </CalenderContent>
        <CalenderContent
          work={<Sion_mist />}
          id="Sion_mist"
          title="어떤 화이트 크리스마스에는"
        >
          시온님 / 재호미정
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

export default CityOfMistPage;
