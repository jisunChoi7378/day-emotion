import { useOpenProfileModalStore } from "@/store/modal";

interface ProfileData {
  children: React.ReactNode;
  className?: string;
  backgroundClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Modal = ({ children, className, backgroundClick }: ProfileData) => {
  const { isOpen, close } = useOpenProfileModalStore();

  const handleClose = () => {
    close();
  };

  return (
    <div
      className={`absolute z-50 flex h-full w-screen items-start justify-center overflow-scroll bg-[#00000051] ${isOpen ? "" : "hidden"}`}
      onClick={backgroundClick ? backgroundClick : handleClose}
    >
      <div
        className={`bg-white ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
