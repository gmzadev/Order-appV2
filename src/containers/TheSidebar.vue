<template>
  <CSidebar 
    v-if="this.$store.state.user"
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
   

    <CRenderFunction flat :content-to-render="$options.nav2"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
      
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'
import nav2 from './_nav2'
export default {
  name: 'TheSidebar',
  nav,nav2,
  computed: {
    show () {
      return this.$store.state.sidebarShow 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    }
  }
}
</script>
<style lang="scss">
/*$nav-color: rgb(245, 160, 24);
.c-sidebar-brand{
  background-color: rgba($color: $nav-color, $alpha:0.6)!important;
}
.c-sidebar-nav-link{
  background-color: rgba($color: $nav-color, $alpha:0.7)!important;
}
.c-sidebar-nav{
  background-color: rgba($color: $nav-color, $alpha:0.6)!important;
}
.c-sidebar-minimizer{
  background-color: rgba($color: $nav-color, $alpha:0.6)!important;
}*/
</style>
