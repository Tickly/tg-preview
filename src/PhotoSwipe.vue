<template>
  <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <!-- Background of PhotoSwipe. 
    It's a separate element as animating opacity is faster than rgba().-->
    <div class="pswp__bg"></div>

    <!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">
      <!-- Container that holds slides. 
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
      Don't modify these 3 pswp__item elements, data is added later on.-->
      <div class="pswp__container">
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
      </div>

      <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
      <div class="pswp__ui pswp__ui--hidden">
        <div class="pswp__top-bar">
          <!--  Controls are self-explanatory. Order can be changed. -->

          <div class="pswp__counter"></div>

          <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

          <button class="pswp__button pswp__button--share" title="Share"></button>

          <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

          <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

          <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
          <!-- element will get class pswp__preloader--active when preloader is running -->
          <div class="pswp__preloader">
            <div class="pswp__preloader__icn">
              <div class="pswp__preloader__cut">
                <div class="pswp__preloader__donut"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
          <div class="pswp__share-tooltip"></div>
        </div>

        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>

        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>

        <div class="pswp__caption">
          <div class="pswp__caption__center"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import PhotoSwipe from 'photoswipe'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'

export default {
  name: 'TgPreview',
  methods: {
    /**
     * 传入一个图片地址组成的数组，以及要显示图片的index
     */
    preview(imgs, index) {
      let items = imgs.map(i => {
        let item = i
        if (typeof i == 'string') {
          item = {
            src: i
          }
        }
        return Object.assign({}, item, {
          w: 0,
          h: 0
        })
      })

      this.init(items, index)
    },

    init(items, index) {
      var pswpElement = this.$el

      // define options (if needed)
      var options = {
        // optionName: 'option value'
        // for example:
        index // start at first slide
      }

      // Initializes and opens PhotoSwipe
      var gallery = new PhotoSwipe(
        pswpElement,
        PhotoSwipeUI_Default,
        items,
        options
      )

      // gallery.listen('beforeChange', () => {
      //     this.currentIndex = gallery.getCurrentIndex()
      // });

      // 自动处理图片大小
      gallery.listen('imageLoadComplete', function(index, item) {
        if (item.w > 0) {
          return
        }

        var img = new Image()
        img.onload = function() {
          item.w = img.naturalWidth
          item.h = img.naturalHeight
          gallery.invalidateCurrItems()
          gallery.updateSize(true)
        }
        img.src = item.src
      })

      gallery.init()
    }
  }
}
</script>
