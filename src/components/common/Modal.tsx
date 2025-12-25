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

    const handleClose = () => {
      close();
    };

    // 모달이 열릴 때마다 스크롤을 맨 위로 초기화
    useEffect(() => {
      if (isOpen) {
        // ref prop으로 전달된 ref 처리
        if (ref && typeof ref === "object" && ref.current) {
          ref.current.scrollTop = 0;
        }
        // 내부 ref 처리
        if (modalContentRef.current) {
          modalContentRef.current.scrollTop = 0;
        }
      }
    }, [isOpen, ref]);

    return (
      <div
        className={`fixed z-50 inset-0 flex items-center justify-center bg-[#00000051] ${isOpen ? "" : "hidden"}`}
        onClick={backgroundClick ? backgroundClick : handleClose}
      >
        <div
          ref={(node) => {
            // forwardRef와 내부 ref 모두 처리
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
          <div className="md:hidden" onClick={handleClose}>
            X
          </div>
          {setWork ?? children ?? null}
        </div>
      </div>
    );
  },
);

Modal.displayName = "Modal";

export default Modal;
