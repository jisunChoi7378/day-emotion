import { create } from "zustand";

interface BoxState {
  [id: string]: boolean;
}

interface BoxOpenStore {
  boxes: BoxState;
  openBox: (id: string) => void;
  isBoxOpen: (id: string) => boolean;
}

export const useBoxOpenStore = create<BoxOpenStore>((set, get) => ({
  boxes: {},

  openBox: (id: string) =>
    set((state) => ({
      boxes: { ...state.boxes, [id]: true },
    })),

  isBoxOpen: (id: string) => get().boxes[id] ?? false,
}));
