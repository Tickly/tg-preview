import TgPreview from './PhotoSwipe.vue'

export default {
  TgPreview,
  install (Vue) {
    Vue.component(TgPreview.name, TgPreview)
  }
}