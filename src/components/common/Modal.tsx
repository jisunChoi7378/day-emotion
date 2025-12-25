import { useOpenProfileModalStore } from "@/store/modal";
import { forwardRef, useEffect, useRef } from "react";

interface ProfileData {
  className?: string;
  backgroundClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  children?: React.ReactNode;
}

const Modal = forwardRef<HTMLDivElement, ProfileData>(
  ({ className, backgroundClick, children }, ref) => {
    const { isOpen, close, setWork, modalClass } = useOpenProfileModalStore();
    const modalContentRef = useRef<HTMLDivElement>(null);
    const topRef = useRef<HTMLDivElement>(null!);

    const handleClose = () => {
      close();
    };

    useEffect(() => {
      if (isOpen) {
        if (ref && typeof ref === "object" && ref.current) {
          ref.current.scrollTop = 0;
        }
        if (modalContentRef.current) {
          modalContentRef.current.scrollTop = 0;
        }
      }
    }, [isOpen, ref]);

    const goToTop = () => {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
      <div
        className={`fixed z-50 inset-0 flex items-center justify-center bg-[#00000051] ${isOpen ? "" : "hidden"}`}
        onClick={backgroundClick ? backgroundClick : handleClose}
      >
        <div
          ref={(node) => {
            modalContentRef.current = node;
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          className={`${modalClass && modalClass.includes("no-modal-bg") ? "" : "work-modal-bg"} ${modalClass ?? className ?? ""} cursor-default overflow-auto h-full md:max-h-[90vh] w-full md:max-w-[70%]`}
          onClick={(e) => e.stopPropagation()}
        >
          <div ref={topRef} />
          <div className="md:hidden mt-5 ml-5 text-4xl" onClick={handleClose}>
            X
          </div>
          {setWork ?? children ?? null}
          <div onClick={goToTop} className="text-center mb-10 text-xl">
            올라가기
          </div>
        </div>
      </div>
    );
  },
);

Modal.displayName = "Modal";

export default Modal;
