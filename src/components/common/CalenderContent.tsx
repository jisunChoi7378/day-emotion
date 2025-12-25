import { useBoxOpenStore } from "@/store/boxOpen";
import { useOpenProfileModalStore } from "@/store/modal";
import Image from "next/image";

interface CalenderContentProps {
  id: string;
  className?: string;
  work?: React.ReactNode;
  children?: React.ReactNode;
  title?: string;
}

const CalenderContent = ({
  id,
  children,
  className,
  work,
  title,
}: CalenderContentProps) => {
  const { open } = useOpenProfileModalStore();
  const openBox = useBoxOpenStore((state) => state.openBox);
  const isBoxOpen = useBoxOpenStore((state) => state.isBoxOpen(id));

  const openCalendarContent = (e: React.MouseEvent<HTMLDivElement>) => {
    open(work);
    e.stopPropagation();
    if (!isBoxOpen) {
      openBox(id);
    }
  };

  return (
    <div className="relative">
      <Image
        src={isBoxOpen ? "/box_open.png" : "/box_closed.png"}
        alt="Calendar Content"
        width={300}
        height={300}
        className={`cursor-pointer ${className}`}
        onClick={openCalendarContent}
      />
      <p className="absolute md:top-26 md:left-15 top-25 left-15">{title}</p>
      <div className="absolute text-xs md:top-32 md:left-15 top-31 left-15">
        {children}
      </div>
    </div>
  );
};

export default CalenderContent;
