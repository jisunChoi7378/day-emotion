"use client";

import Link from "next/link";
import Calendar from "@/components/common/Calendar";
import CalenderContent from "@/components/common/CalenderContent";
import Modal from "@/components/common/Modal";
import BS_dica from "@/components/Work/crossover/BS_dica";
import City_of_mist_q from "@/components/Work/crossover/city_of_mist_q";
import Doansae from "@/components/Work/crossover/doansae";
import Malang_face from "@/components/Work/crossover/malang_face";
import Stellaofastra from "@/components/Work/crossover/stellaofastra";

const CrossoverPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 py-10">
      <Modal />
      <Calendar genreName="크오">
        <CalenderContent work={<BS_dica />}>디카님</CalenderContent>
        <CalenderContent work={<City_of_mist_q />}>큘님</CalenderContent>
        <CalenderContent work={<Doansae />}>한안세님</CalenderContent>
        <CalenderContent work={<Malang_face />}>오꼬님</CalenderContent>
        <CalenderContent work={<Stellaofastra />}>이즈라크님</CalenderContent>
      </Calendar>
      <Link href="/" className="text-blue-600 hover:underline">
        메인으로 돌아가기
      </Link>
    </div>
  );
};

export default CrossoverPage;
