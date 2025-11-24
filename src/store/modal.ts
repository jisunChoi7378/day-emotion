import {create} from "zustand";

export interface OpenProfileModalStore {
  isOpen: boolean;
  selectedId: number;
  prevId: number;
  open: (id: number) => void;
  close: (id?: number) => void;
}

export const useOpenProfileModalStore = create<OpenProfileModalStore>(
  (set) => ({
    isOpen: false,
    selectedId: 0,
    prevId: 0,
    open: (id) => set({isOpen: true, selectedId: id, prevId: 0}),
    close: (id?) => set({isOpen: false, selectedId: 0, prevId: id}),
  })
);
