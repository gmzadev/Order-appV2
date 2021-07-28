
<template>
  <div>
    <TheSidebar />
    <CWrapper>
      <TheHeader />
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <div class="main-container">
              <transition name="fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </div>
          </CContainer>
        </main>
      </div>
      <TheFooter />
    </CWrapper>
  </div>
</template>
<script>

import TheSidebar from "./TheSidebar";
//import Home from "@/views/inicio/Home";
//import Barra from "@/views/inicio/Barra";
import firebase from 'firebase'
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";
//import Dashboard from "@/views/Dashboard";
export default {
  name: "TheContainer",

  data() {
    return {
      value: true,
      user:null,
    };
  },
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
    //Barra,
    //Home,
  },
    created() {
    console.log("creado container");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.$store.commit("set", ["user", this.user.email]);
        console.log(this.$store.state.user)
      } else {
        this.user = null;
      }
    });
  },
  
};

</script>

<style scoped >
.main-container {
  margin-top: 5rem;
  justify-content: center;
  
}
.c-main{
  background-color: tomato;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
