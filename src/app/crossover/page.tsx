"use client";

import Link from "next/link";
import Calendar from "@/components/common/Calendar";
import CalenderContent from "@/components/common/CalenderContent";
import Modal from "@/components/common/Modal";
import BS_dica from "@/components/Work/crossover/BS_dica";

const CrossoverPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 py-10">
      <Modal />
      <Calendar genreName="크오">
        <CalenderContent>크오</CalenderContent>
        <CalenderContent work={<BS_dica />}>디카님</CalenderContent>
      </Calendar>
      <Link href="/main" className="text-blue-600 hover:underline">
        메인으로 돌아가기
      </Link>
    </div>
  );
};

export default CrossoverPage;
