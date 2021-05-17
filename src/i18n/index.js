import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {locale as en} from '@/i18n/en.js'
import {locale as zh} from '@/i18n/zh.js'




Vue.use(VueI18n)


let messages = {zh,en}

const i18n = new VueI18n({
    /** 默认值 */
    locale: localStorage.getItem('language') || 'zh',
    messages
})

export default i18n