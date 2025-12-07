import { create } from "zustand";

export interface OpenProfileModalStore {
  isOpen: boolean;
  setWork: React.ReactNode | null;
  open: (work?: React.ReactNode) => void;
  close: () => void;
}

export const useOpenProfileModalStore = create<OpenProfileModalStore>(
  (set) => ({
    isOpen: false,
    setWork: null,
    open: (work) => set({ isOpen: true, setWork: work }),
    close: () => set({ isOpen: false }),
  }),
);
