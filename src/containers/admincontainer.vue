<template> <!--login admin-->
      <div class="c-app">
        <TheSidebar />
        <CWrapper>
        <TheHeader/>
        <div class="c-body">
            <main class="c-main">
              <CContainer fluid>
                <transition name="fade" mode="out-in" time="0.3s">
                  <router-view > <Dashboard/> </router-view>
                </transition>
              </CContainer>
            </main>
        </div>
        <TheFooter/>
        </CWrapper>
      </div>
</template>
<script>
import TheSidebar from "./TheSidebar";
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";
import Dashboard from "@/views/Dashboard";
export default {
  name: "admincontainer",
  props: [],
  data() {
    return {
      login:true,
      admin: true,
      username: null,
      userid: null,
    };
  },
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
    Dashboard,
  },
  
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
