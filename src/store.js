import create from 'zustand'

export const useMenu = create((set) => ({
  open: false,
  toggleMenu: (b) =>
    set({
      open: b,
    }),
}))

export const useLang = create((set) => ({
  lang: 'is',
  toggleLang: (lang) =>
    set({
      lang,
    }),
}))
