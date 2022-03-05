
<template>
  <div>
    <TheSidebar v-if="this.$store.getters.getUser" />
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
import { db } from "@/main.js";
import TheSidebar from "./TheSidebar";
//import Home from "@/views/inicio/Home";
//import Barra from "@/views/inicio/Barra";
import firebase from "firebase";
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";

//import Dashboard from "@/views/Dashboard";
export default {
  name: "TheContainer",
  data() {
    return {
      value: true,
      user: null,
      usuario: {
        Cedula: "",
        Correo: "",
        Nombre: "",
        Telefono: "",
        nivelUsuario: "",
      },
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
    firebase.auth().onAuthStateChanged((user) => {
      //carga de la autenticacion si esta autenticado, se guarda el emay
      if (user) {
        this.user = user;
        this.$store.commit("set", ["user", this.user.email]);
      } else {
        this.user = null;
      }
    });
    db.collection("Usuarios").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        
        if (doc.data().Correo == this.user.email) {
          this.usuario.Cedula = doc.data().Cedula;
          this.usuario.Correo = doc.data().Correo;
          this.usuario.Nombre = doc.data().Nombre;
          this.usuario.Telefono = doc.data().Telefono;
          this.usuario.nivelUsuario = doc.data().nivelUsuario;
          this.$store.commit("set", ["usuario", this.usuario]);
        }
      });
    });
  },
};
</script>

<style scoped >
.main-container {
  margin-top: 5rem;
  justify-content: center;
}
.c-main {
  background-color: rgb(235, 179, 134);
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
