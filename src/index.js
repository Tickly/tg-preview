import TgPreview from './PhotoSwipe.vue'

export { TgPreview }

export default {
  TgPreview,
  install (Vue) {
    Vue.component(TgPreview.name, TgPreview)
  }
}