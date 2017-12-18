<style lang="stylus" src="css/components/header.mainNav.styl" scoped></style>

<template lang="pug">
  .header-main-nav.cf
    .logos.fl
      ul.listn.fl
        li.item.fl(v-for='log in logos')
          a.linkn(:href='log.href')
            img(:src='log.img', :alt='log.alt')
    nav.fr
      ul.listn.fl
        li.item.fl(v-for='item in items')
          a.linkn(:href='item.href') {{ item.name }}

</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        logos: [{
          alt: '香港航空',
          img: this.$root.assetsUrl('images/3x/general/img_hka_logo.png'),
          href: 'javascript:;'
        }, {
          alt: '香港航空',
          img: this.$root.assetsUrl('images/3x/general/logo_hongkong.png'),
          href: 'javascript:;'
        }, {
          alt: '香港航空',
          img: this.$root.assetsUrl('images/3x/general/logo_skytrax.png'),
          href: 'javascript:;'
        }],
        items: [{
          name: 'Plan & Book',
          href: 'javascript:;'
        }, {
          name: 'Promotion',
          href: 'javascript:;'
        }]
      };
    },
    computed: mapState({})
  }
  
</script>


