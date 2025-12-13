import { useOpenProfileModalStore } from "@/store/modal";

interface CalenderContentProps {
  children?: React.ReactNode;
  className?: string;
  work?: React.ReactNode;
}

const CalenderContent = ({
  children,
  className,
  work,
}: CalenderContentProps) => {
  const { open } = useOpenProfileModalStore();
  const openCalendarContent = (e: React.MouseEvent<HTMLDivElement>) => {
    open(work);
    e.stopPropagation();
  };
  return (
    <div
      className={`p-5 rounded-sm cursor-pointer w-fit ${className}`}
      onClick={openCalendarContent}
    >
      {children}
    </div>
  );
};

export default CalenderContent;
