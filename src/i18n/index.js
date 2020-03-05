import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './lang'
import ElementLocale from 'element-ui/lib/locale'

Vue.use(VueI18n)
const i18n = new VueI18n({
  messages: messages,
  silentTranslationWarn: true,
  locale: 'cn'
})

i18n.locale = 'cn'

ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
