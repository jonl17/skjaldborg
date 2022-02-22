import create from 'zustand'

export const useMenu = create((set) => ({
  open: false,
  toggleMenu: (b) =>
    set({
      open: b,
    }),
}))
