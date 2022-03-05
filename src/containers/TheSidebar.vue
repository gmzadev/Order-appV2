<template >
  
    <CSidebar
      v-if="
        (this.$store.state.usuario.nivelUsuario == 'Root' ||
        this.$store.state.usuario.nivelUsuario == 'Administrador')
      "
      fixed
      :minimize="minimize"
      :show="show"
      @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
    >
      <CRenderFunction flat :content-to-render="$options.nav" />

      <CSidebarMinimizer
        class="d-md-down-none"
        @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
      />
    </CSidebar>
    <CSidebar
      v-else
      fixed
      :minimize="minimize"
      :show="show"
      @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
    >
      <CRenderFunction flat :content-to-render="$options.nav2" />
      <CSidebarMinimizer
        class="d-md-down-none"
        @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
      />
    </CSidebar>
</template>

<script>
import nav from "./_nav";
import nav2 from "./_nav2";
export default {
  name: "TheSidebarLogin",
  nav,
  nav2,
  computed: {
    show() {
      return this.$store.state.sidebarShow;
    },
    minimize() {
      return this.$store.state.sidebarMinimize;
    },
  },
};
</script>
<style lang="scss">
.nav-side{
  position: fixed !important ;
  z-index: 1030;
  display: flex;
}
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
