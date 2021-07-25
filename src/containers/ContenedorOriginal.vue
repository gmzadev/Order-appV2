<template>
  <div class="ContenedorOriginal">
    <CWrapper>
          <Barra/>
          <transition name="fade" mode="out-in">
            <router-view ><Home/></router-view>
          </transition>
          <TheFooter/>
    </CWrapper>
  </div>
</template>

<script>
import Home from "@/views/inicio/Home";
import Barra from "@/views/inicio/Barra";
import TheFooter from "./TheFooter";
export default {
  data() {
    return {
      name: "ContenedorOriginal",
    };
  },
  components:{
      Home,
      Barra,
      TheFooter
  }
};
</script>