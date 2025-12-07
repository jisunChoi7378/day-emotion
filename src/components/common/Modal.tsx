import { useOpenProfileModalStore } from "@/store/modal";

interface ProfileData {
  children: React.ReactNode;
  className?: string;
  backgroundClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Modal = ({ className, backgroundClick }: ProfileData) => {
  const { isOpen, close, setWork } = useOpenProfileModalStore();

  const handleClose = () => {
    close();
  };

  return (
    <div
      className={`fixed z-50 inset-0 flex items-center justify-center bg-[#00000051] ${isOpen ? "" : "hidden"}`}
      onClick={backgroundClick ? backgroundClick : handleClose}
    >
      <div
        className={`bg-[#979797] ${className} cursor-default overflow-auto h-full md:max-h-[90vh] w-full md:max-w-[70%]`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:hidden" onClick={handleClose}>
          X
        </div>
        {setWork}
      </div>
    </div>
  );
};

export default Modal;
