import { create } from "zustand";

export interface OpenProfileModalStore {
  isOpen: boolean;
  setWork: React.ReactNode | null;
  modalClass?: string | null;
  open: (work?: React.ReactNode, modalClass?: string | null) => void;
  close: () => void;
}

export const useOpenProfileModalStore = create<OpenProfileModalStore>(
  (set) => ({
    isOpen: false,
    setWork: null,
    modalClass: null,
    open: (work, modalClass) => set({ isOpen: true, setWork: work, modalClass }),
    close: () => set({ isOpen: false, setWork: null, modalClass: null }),
  }),
);
