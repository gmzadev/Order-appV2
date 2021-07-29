<template>
  <div>
    <div>
      <CHeader light fixed class="navbar navbar-expand-md">
        <CToggler
          v-if="$store.state.user"
          in-header
          class=" d-lg-none justify-content-between"
          @click="$store.commit('toggleSidebarMobile')"
        />
        <CToggler
          v-if="$store.state.user"
          in-header
          class="d-lg-down-none justify-content-between"
          @click="$store.commit('toggleSidebarDesktop')"
        />

        <CHeaderNav class=" col-sm-auto  collapse navbar-collapse ">
          <CHeaderNavItem style="margin-left: 15px">
            <router-link class="navbar-brand" to="/home">
              <img class="img-fluid iconos" :src="iconosirenita" :alt="text1" />
            </router-link>
          </CHeaderNavItem>
        </CHeaderNav>
        <CHeaderNav class=" mr-auto col-sm-auto collapse navbar-collapse  ">
          <CHeaderNavItem style="margin-left:20vw">
            <h3 class="titulosnavitenG">La Sirenita Deli Expreess</h3>
          </CHeaderNavItem>
        </CHeaderNav>
        <!--<CHeaderNav class="d-md-down-none titulos">
          
        </CHeaderNav>-->
        <CHeaderNav class=" ml-auto">
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
          <div v-if="!$store.state.user">
            <CHeaderNavItem class="px-1">
              <CHeaderNavLink to="/pages/Register">
                <div class="titulosnaviten">Registrarse</div>
                <i class="fa fa-user-plus px-1" aria-hidden="true"></i>
              </CHeaderNavLink>
            </CHeaderNavItem>
          </div>
          <div v-if="!$store.state.user">
            <CHeaderNavItem class="px-1">
              <CHeaderNavLink to="/pages/Login">
                <div class="titulosnaviten">Iniciar Sesion</div>
                <i class="fa fa-sign-in px-1" aria-hidden="true" />
              </CHeaderNavLink>
            </CHeaderNavItem>
          </div>
          <div v-if="$store.state.user" class="col-sm-auto">
            <TheHeaderDropdownAccnt />
          </div>
        </CHeaderNav>
      </CHeader>
    </div>
  </div>
</template>

<script>

import TheHeaderDropdownAccnt from "./TheHeaderDropdownAccnt";
//import firebase from "firebase";

export default {
  name: "TheHeader",
  data() {
    return {
      text1: "no cargo",
      iconosirenita: "https://i.imgur.com/as1ZB1e.png",
    };
  },
  components: {
    TheHeaderDropdownAccnt,
  },
  methods: {},
};
</script>
<style scoped>

.c-header {
  position: fixed !important;
}
.listaCuenta {
  padding-left: 6rem !important;
}
</style>