import { defineStore } from 'pinia';

export const useLangStore = defineStore({
  id: 'lang',
  state: () => ({
    currentLang: localStorage.getItem('selectedLang') || 'en'
  }),
  actions: {
    setLang(lang: string) {
      this.currentLang = lang;
      localStorage.setItem('selectedLang', lang);
    },
    initializeLang() {
      const storedLang = localStorage.getItem('selectedLang');
      if (storedLang) {
        this.currentLang = storedLang;
      } else {
        this.currentLang = 'en';
        localStorage.setItem('selectedLang', this.currentLang);
      }
    }
  }
});
