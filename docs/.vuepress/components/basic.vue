<template>
  <div>
    <tg-preview ref="preview" />
    <div class="row">
      <div id="demo-test-gallery" class="demo-gallery" data-pswp-uid="1">
        <a
          v-for="(img, i) in imgs"
          :key="i"
          :href="img.l.url"
          data-size="1600x1600"
          :data-med="img.m.url"
          data-med-size="1024x1024"
          :data-author="img.author"
          :class="[i === 0 ? 'demo-gallery__img--main' : '']"
          @click.prevent="preview(i)"
        >
          <img :src="img.s.url" alt />
          <figure>{{ img.figure }}</figure>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: [
        {
          s: {
            url:
              "https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
          },
          m: {
            url:
              "https://farm4.staticflickr.com/3894/15008518202_b016d7d289_b.jpg"
          },
          l: {
            url:
              "https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
          },
          author: "Folkert Gorter",
          figure: "This is dummy caption."
        },
        {
          s: {
            url:
              "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
          },
          m: {
            url:
              "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg"
          },
          l: {
            url:
              "https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg"
          },
          author: "Samuel Rohl",
          figure:
            "This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text."
        },
        {
          s: {
            url:
              "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
          },
          m: {
            url:
              "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"
          },
          l: {
            url:
              "https://farm4.staticflickr.com/3902/14985871946_24f47d4b53_h.jpg"
          },
          author: "Ales Krivec",
          figure: "This is dummy caption. It is not meant to be read."
        },
        {
          s: {
            url:
              "https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
          },
          m: {
            url:
              "https://farm6.staticflickr.com/5584/14985868676_4b802b932a_b.jpg"
          },
          l: {
            url:
              "https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg"
          },
          author: "Michael Hull",
          figure: `Dummy caption. It's Greek to you. Unless, of course, you're Greek, in which case, it really makes no sense.`
        },
        {
          s: {
            url:
              "https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
          },
          m: {
            url:
              "https://farm4.staticflickr.com/3920/15008465772_383e697089_b.jpg"
          },
          l: {
            url:
              "https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"
          },
          author: "Thomas Lefebvre",
          figure: `It's a dummy caption. He who searches for meaning here will be sorely disappointed.`
        }
      ]
    }
  },
  computed: {
    items () {
      return this.imgs.map(img => {
        return {
          ...img,
          src: img.m.url,
          title: `${img.figure}<br /><small>Photo:'${img.author}'</small>`
        };
      });
    }
  },
  methods: {
    preview (index) {
      this.$refs.preview.preview(this.items, index);
    }
  }
}
</script>
<style>
.row {
  max-width: 800px;
  margin: 24px auto;
  padding: 0 30px;
  position: relative;
}
img {
  width: auto;
  max-width: 100%;
  height: auto;
  border: 0;
}
.demo-gallery {
  width: 100%;
  height: auto;
  float: left;
}
.demo-gallery a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  display: block;
  float: left;
  margin: 0 12px 12px 0;
  width: 171px;
  line-height: 0;
}
a.demo-gallery__img--main {
  width: auto;
  height: auto;
}
.demo-gallery figure {
  display: none;
}
</style>