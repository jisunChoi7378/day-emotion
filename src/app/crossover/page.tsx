"use client";

import Image from "next/image";

import Calendar from "@/components/common/Calendar";
import CalenderContent from "@/components/common/CalenderContent";
import Modal from "@/components/common/Modal";
import BS_dica from "@/components/Work/crossover/BS_dica";
import City_of_mist_q from "@/components/Work/crossover/city_of_mist_q";
import Doansae from "@/components/Work/crossover/doansae";
import Malang_face from "@/components/Work/crossover/malang_face";
import Stellaofastra from "@/components/Work/crossover/stellaofastra";

const CrossoverPage = () => {
  const handleDoorClick = () => {
    window.location.href = "/main";
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 py-10">
      <Modal />
      <Calendar genreName="크오">
        <CalenderContent work={<BS_dica />} id="BS_dica">
          디카님
        </CalenderContent>
        <CalenderContent work={<City_of_mist_q />} id="City_of_mist_q">
          큘님
        </CalenderContent>
        <CalenderContent work={<Doansae />} id="Doansae">
          한안세님
        </CalenderContent>
        <CalenderContent work={<Malang_face />} id="Malang_face">
          오꼬님
        </CalenderContent>
        <CalenderContent work={<Stellaofastra />} id="Stellaofastra">
          이즈라크님
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

export default CrossoverPage;
