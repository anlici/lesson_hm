import { createI18n } from 'vue-i18n'
import en from './locals/en.js'
import zh from './locals/zh.js'
import ja from './locals/ja.js'

const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: localStorage.getItem('lang')?? 'en', // lang from localStorage
    messages: {
        en,
        zh,
        ja
    }
    
})
export default i18n;