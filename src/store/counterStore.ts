import create from "zustand";

interface CounterState {
  count: number;
  title: string;
}

export const useCounterStore = create<CounterState>(() => ({
  count: 20,
  title: "Some title",
}));
