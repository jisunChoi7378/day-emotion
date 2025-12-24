import { useOpenProfileModalStore } from "@/store/modal";

interface ProfileData {
  className?: string;
  backgroundClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  children?: React.ReactNode;
}

const Modal = ({ className, backgroundClick, children }: ProfileData) => {
  const { isOpen, close, setWork, modalClass } = useOpenProfileModalStore();

  const handleClose = () => {
    close();
  };

  return (
    <div
      className={`fixed z-50 inset-0 flex items-center justify-center bg-[#00000051] ${isOpen ? "" : "hidden"}`}
      onClick={backgroundClick ? backgroundClick : handleClose}
    >
      <div
        className={`${modalClass && modalClass.includes("no-modal-bg") ? "" : "bg-[#979797]"} ${modalClass ?? className ?? ""} cursor-default overflow-auto h-full md:max-h-[90vh] w-full md:max-w-[70%]`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:hidden" onClick={handleClose}>
          X
        </div>
        {setWork ?? children ?? null}
      </div>
    </div>
  );
};

export default Modal;
