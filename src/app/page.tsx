"use client";

import Image from "next/image";
import Link from "next/link";
import Calendar from "@/components/common/Calendar";
import CalenderContent from "@/components/common/CalenderContent";
import Modal from "@/components/common/Modal";
import BScityhouse1 from "@/components/Work/buriedStars/BScityhouse1";
import What_fxx from "@/components/Work/panicRoom/what_fxx";
import BScityhouse2 from "@/components/Work/buriedStars/BScityhouse2";
import Bs_extinct from "@/components/Work/buriedStars/bs_extinct";
import BScityhouse3 from "@/components/Work/buriedStars/BScityhouse3";
import HA_RUT_ from "@/components/Work/cityOfMist/HA_RUT_";
import N1GHT_AND_D4WN from "@/components/Work/panicRoom/N1GHT_AND_D4WN";
import ID174x140 from "@/components/Work/buriedStars/178x140";
import BS_dica from "@/components/Work/crossover/BS_dica";
import PNICK_ORPG from "@/components/Work/cityOfMist/PNICK_ORPG";
import NeNggeul1 from "@/components/Work/panicRoom/ne__nggeul1";
import NeNggeul2 from "@/components/Work/cityOfMist/ne__nggeul2";

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
          <CalenderContent work={<N1GHT_AND_D4WN />}>새벽님</CalenderContent>
          <CalenderContent work={<NeNggeul1 />}>
            넹글님-수혁수연
          </CalenderContent>
        </Calendar>
        <Calendar genreName="회색도시">
          <CalenderContent work={<NeNggeul2 />}>
            넹글님-누아재인
          </CalenderContent>
          <CalenderContent work={<PNICK_ORPG />}>피닉스님</CalenderContent>
          <CalenderContent work={<HA_RUT_ />}>하룻님</CalenderContent>
        </Calendar>
        <Calendar genreName="베스타">
          <CalenderContent className="bg-[#7adccaf]" work={<BScityhouse1 />}>
            옥님-민주영 가족
          </CalenderContent>
          <CalenderContent work={<BScityhouse2 />}>
            옥님-주영연하
          </CalenderContent>
          <CalenderContent work={<Bs_extinct />}>멸종님</CalenderContent>
          <CalenderContent work={<BScityhouse3 />}>
            옥님-주영인하
          </CalenderContent>
          <CalenderContent work={<ID174x140 />}>치르노님</CalenderContent>
        </Calendar>
        <Calendar genreName="크오">
          <CalenderContent>크오</CalenderContent>
          <CalenderContent work={<BS_dica />}>디카님</CalenderContent>
        </Calendar>
      </div>
      <Link href="/postscript">후기 페이지</Link>
    </div>
  );
};

export default Home;
