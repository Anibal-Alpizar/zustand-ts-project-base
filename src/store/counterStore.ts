import create from "zustand";

interface CounterState {
  count: number;
  title: string;
  increment: (value: number) => void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  count: 20,
  title: "Some title",
  increment: (value: number) =>
    set((state) => ({
      count: state.count + value,
    })),
}));
