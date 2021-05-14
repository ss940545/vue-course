import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/i18n/en.js'
import  zh from '@/i18n/zh.js'

import {mapState, mapActions} from 'vuex'


Vue.use(VueI18n)

const locale = 'zh'

const messages = {
    zh,en
}

const i18n = new VueI18n({
    /** 默认值 */
    locale,
    messages
})

export default i18n