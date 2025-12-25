"use client";

import Image from "next/image";

import Calendar from "@/components/common/Calendar";
import CalenderContent from "@/components/common/CalenderContent";
import Modal from "@/components/common/Modal";
import BScityhouse1 from "@/components/Work/buriedStars/BScityhouse1";
import BScityhouse2 from "@/components/Work/buriedStars/BScityhouse2";
import Bs_extinct from "@/components/Work/buriedStars/bs_extinct";
import BScityhouse3 from "@/components/Work/buriedStars/BScityhouse3";
import ID174x140 from "@/components/Work/buriedStars/178x140";
import ID520graceyc from "@/components/Work/buriedStars/520graceyc";
import BS_0224 from "@/components/Work/buriedStars/BS_0224";
import Hello_9r_ from "@/components/Work/buriedStars/hello_9r_";
import NO_wawa__ from "@/components/Work/buriedStars/N0_wawa__";
import Rett0_0tter1 from "@/components/Work/buriedStars/rett0_0tter1";
import Rett0_0tter2 from "@/components/Work/buriedStars/rett0_0tter2";
import SR_D_BS3 from "@/components/Work/buriedStars/SR_D_BS3";

const BuriedStarsPage = () => {
  const handleDoorClick = () => {
    window.location.href = "/main";
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 py-10">
      <Modal />
      <Calendar genreName="BURIED STARS">
        <CalenderContent work={<BScityhouse1 />} id="BScityhouse1" title="선물">
          옥님 / 민주영 삼남매
        </CalenderContent>
        <CalenderContent
          work={<BScityhouse2 />}
          id="BScityhouse2"
          title="화이트 크리스마스"
        >
          옥님 / 주영연하
        </CalenderContent>
        <CalenderContent
          work={<Bs_extinct />}
          id="Bs_extinct"
          title="메리 화이트 크리스마스"
        >
          멸종님 / 마스커레이드
        </CalenderContent>
        <CalenderContent
          work={<BScityhouse3 />}
          id="BScityhouse3"
          title="완벽하지 않은"
        >
          옥님 / 주영인하
        </CalenderContent>
        <CalenderContent work={<ID174x140 />} id="ID174x140" title="출발">
          치르노님 / 한도윤+하수창
        </CalenderContent>
        <CalenderContent
          work={<ID520graceyc />}
          id="ID520graceyc"
          title="메리크리스마스!"
        >
          수봄님 / 한도윤
        </CalenderContent>
        <CalenderContent work={<BS_0224 />} id="BS_0224" title="선물">
          온점님 / 장세일
        </CalenderContent>
        <CalenderContent
          work={<Hello_9r_ />}
          id="Hello_9r_"
          title="다시 만난 무대"
        >
          로아님 / 세일인하
        </CalenderContent>
        <CalenderContent
          work={<NO_wawa__ />}
          id="NO_wawa__"
          title="네 행복한 성탄절을 원해"
        >
          안사님 / 장세일
        </CalenderContent>
        <CalenderContent work={<Rett0_0tter1 />} id="Rett0_0tter1" title="무제">
          수달박사님 / 도윤인하
        </CalenderContent>
        <CalenderContent
          work={<Rett0_0tter2 />}
          id="Rett0_0tter2"
          title="기쁜 날"
        >
          수달박사님 / 이규혁+한도윤
        </CalenderContent>
        <CalenderContent
          work={<SR_D_BS3 />}
          id="SR_D_BS3"
          title="크리스마스의 기적"
        >
          꿈맛시루떡님 / ALL
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

export default BuriedStarsPage;
