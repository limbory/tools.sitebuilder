<style lang="stylus" src="css/components/header.topbar.styl" scoped></style>

<template lang="pug">
  .header-topbar.cf
    nav.fr
      ul.listn.cf
        li.item.fl(v-for='item in items')
          a(href="javascript:;")
            i.icon(v-if='item.icon' :class='item.icon') {{ /glyph/.test(item.icon) ? '' : '&nbsp;' }}
            span {{ item.name }}
            i.icon.glyphicon.glyphicon-chevron-down(v-if='item.dropList')

</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        items: [{
          name: 'Login'
        }, {
          name: 'Register'
        }, {
          name: 'Language',
          dropList: true
        }, {
          name: 'Search',
          icon: 'glyphicon glyphicon-search'
        }, {
          name: 'Live Chat',
          icon: 'chat'
        }]
      };
    },
    computed: mapState({})
  }
  
</script>


