
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
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";
//import Dashboard from "@/views/Dashboard";
export default {
  name: "TheContainer",

  data() {
    return {
      value: true,
    };
  },
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
    //Barra,
    //Home,
  },
};

</script>

<style scoped >
.main-container {
  margin-top: 5rem;
  height: auto;
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
