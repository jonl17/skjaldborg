import create from 'zustand'

export const useMenu = create((set) => ({
  open: false,
  toggleMenu: (state) =>
    set({
      open: state,
    }),
}))
