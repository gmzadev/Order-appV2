<template>
  <div>

    <CHeader fixed with-subheader light>
      <CToggler
        in-header
        class="ml-3 d-lg-none"
        @click="$store.commit('toggleSidebarMobile')"
      />
      <CToggler v
        in-header
        class="ml-3 d-md-down-none"
        @click="$store.commit('toggleSidebarDesktop')"
      />
      
      <CHeaderNav class="d-md-down-none mr-auto">
        <CHeaderNavItem class="px-3">
          <CHeaderNavLink to="/dashboard">
            Dashboard
          </CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem class="px-3">
          <CHeaderNavLink to="/users" exact>
            Historico
          </CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem class="px-3">
          <CHeaderNavLink to="/users" exact>
            Inventario
          </CHeaderNavLink>
        </CHeaderNavItem>
        <!--<CHeaderNavItem class="px-3">
          <CHeaderNavLink>
            Ajustes
          </CHeaderNavLink>-->
      </CHeaderNav>
      <CHeaderNav class="ml-5 pl-4">
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
        <TheHeaderDropdownAccnt/>
      </CHeaderNav>
    <!-- <CSubheader class="px-3">
        <CBreadcrumbRouter class="border-0 mb-0"/>
      </CSubheader>-->
    </CHeader>
  </div>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'
import {Login} from './TheContainer.vue'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  },
  methods: {
    debug (){
      console.log(Login);
    }
  },
}
</script>
