<style lang="stylus" src="css/components/header.styl" scoped></style>

<template lang="pug">
  header#main-header.header-outer
    .header-holder
    .header-content.fix.cover
      header-topbar
      header-main-nav

</template>

<script>
  import { mapState } from 'vuex';

  import headerTopbar from 'tpl/vue/components/header.topbar.vue'
  import headerMainNav from 'tpl/vue/components/header.mainNav.vue'

  export default {
    data() {
      return {};
    },
    computed: mapState({}),
    components: {
      headerTopbar,
      headerMainNav
    }
  }
  
</script>


