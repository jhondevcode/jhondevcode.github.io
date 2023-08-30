import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import { createI18n } from 'vue-i18n';
import { useLangStore } from '@stores/lang';
import messages from './i18n';

const app = createApp(App);

app.use(createPinia());

const langStore = useLangStore();
langStore.initializeLang();

const i18n = createI18n({
  locale: langStore.currentLang,
  messages,
});

app.use(i18n);

app.mount('body');
