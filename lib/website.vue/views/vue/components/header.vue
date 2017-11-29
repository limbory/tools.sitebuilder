<style lang="stylus" src="css/components/header.styl" scoped></style>

<template lang="pug">
  div
    h1 {{ variable1 }}
    h2 {{ variable2 }}
    h3 {{ variable1 }}

</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        variable0: '12dewdsw'
      };
    },
    computed: mapState({
      variable1() {
        return this.variable0.slice(3);
      },
      variable2: state => state.home.variable1
    })
  }
  
</script>


