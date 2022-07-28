import create from 'zustand';

export const useStore = create((set) => ({
  value: {},
  length: 0,
  add: (student) =>
    set((state) => ({
      value: { ...state.value, [student]: student },
      length: state.length + 1,
    })),
  clear: () => set(() => ({ value: {}, length: 0 })),
}));
