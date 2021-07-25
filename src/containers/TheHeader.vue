<template>
  <div>
    <div > 
      <CHeader  with-subheader light fixed >
      <CToggler
        in-header
        class="mr-3 d-lg-none justify-content-between"
        @click="$store.commit('toggleSidebarMobile')"
      />
      <CToggler v
        in-header
        class="ml-5 d-lg-down-none justify-content-between  "
        @click="$store.commit('toggleSidebarDesktop')"
      />
      
      <CHeaderNav class="d-md-down-none mr-auto">
        
        <!--<CHeaderNavItem class="px-3">
          <CHeaderNavLink>
            Ajustes
          </CHeaderNavLink>-->
      </CHeaderNav>
      <CHeaderNav class="align-self-md-end pl-4">
      <!-- <CHeaderNavItem class="d-md-down-none mx-2">
          <CHeaderNavLink>
            <CIcon name="cil-bell"/>
          </CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem class="d-md-down-none mx-2">
          <CHeaderNavLink>
            <CIcon name="cil-list"/>
          </CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem class="d-md-down-none mx-2">
          <CHeaderNavLink>
            <CIcon name="cil-envelope-open"/>
          </CHeaderNavLink>
        </CHeaderNavItem>-->
        <div  class="listaCuenta ">
          <TheHeaderDropdownAccnt/>
        </div>
        
      </CHeaderNav>
    <!-- <CSubheader class="px-3">
        <CBreadcrumbRouter class="border-0 mb-0"/>
      </CSubheader>-->
    </CHeader>
  </div>
</div>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  data() {
    return {
      text1: 'no cargo',
      iconosirenita: 'https://i.imgur.com/as1ZB1e.png'
    }
  },
  components: {
    TheHeaderDropdownAccnt
  },
  methods: {

  },
}
</script>
<style scoped>
.c-header{
  position: fixed!important;;
}
.pl-4{
  padding-left: 11rem!important;
}
</style>