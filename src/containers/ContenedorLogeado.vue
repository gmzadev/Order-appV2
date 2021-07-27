<template>
  <div class="ContenedorLogeado">
    <TheSidebar />
    <CWrapper>
      <TheHeader />
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
      <TheFooter />
    </CWrapper>
  </div>
</template>

<script>
import TheSidebar from "./TheSidebar";
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";
//import Dashboard from "@/views/Dashboard";
export default {
  data() {
    return {
      name: "ContenedorLogeado",
    };
  },
  components:{
      TheHeader,
      TheSidebar,
      TheFooter,
      
  }
};
</script>