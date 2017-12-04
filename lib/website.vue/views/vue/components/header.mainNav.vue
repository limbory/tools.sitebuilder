<style lang="stylus" src="css/components/header.mainNav.styl" scoped></style>

<template lang="pug">
  .header-main-nav
    a.logo(href='javascript:;')
      img(:src='this.$root.assetsUrl("images/favicon.png")', alt='香港航空')
    nav

</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {};
    },
    computed: mapState({})
  }
  
</script>


