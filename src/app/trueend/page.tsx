import Image from "next/image";
import Link from "next/link";

const TrueEndPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-10 text-white"
      style={{
        backgroundImage: "url('/christmasbg-TrueEndSkyBlue.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative h-[320px] w-[92%] max-w-3xl flex items-center justify-center">
        <Image
          src="/fin.png"
          alt="FIN"
          width={260}
          height={320}
          priority
          className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
        />
      </div>

      <div className="relative -mt-24 w-[92%] max-w-3xl text-center space-y-6 rounded-xl border border-[rgba(217,79,79,0.3)] bg-[#13212b] px-6 py-8 shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
        <p className="text-base leading-relaxed text-white/90">
          TRUE END :{" "}
          <span className="font-semibold text-white">Merry Christmas!</span>
        </p>
        <p className="text-sm leading-relaxed text-white/85">
          합작에 참여해주시고 감상해주신 모든 분들에게
          <br />
          진심으로 감사드립니다.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <Link
          href="/main"
          className="flex flex-col items-center gap-1 transition-transform hover:scale-105"
        >
          <Image
            src="/main_door.png"
            alt="메인으로 돌아가기"
            width={80}
            height={95}
            className="drop-shadow-lg"
          />
          <span className="sr-only">메인으로 돌아가기</span>
        </Link>
      </div>
    </div>
  );
};

export default TrueEndPage;
