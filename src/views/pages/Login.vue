<template id="body-l">
  <div >
    <CContainer >
    <CRow class="justify-content-center ">
      <CCol md="8">
        <CCardGroup>
          <CCard class="p-4">
            <CCardBody>
              <form @submit.prevent="Login">
                <h1>Iniciar Sesión</h1>
                <p class="text-muted">Inicia sesion en tu cuenta</p>
                <CInput
                  placeholder="Nombre de usuario"
                  autocomplete="correo"
                  class="texto"
                  v-model="email"
                >
                  <template #prepend-content
                    ><CIcon name="cil-user"
                  /></template>
                </CInput>
                <CInput
                  placeholder="Contraseña"
                  type="password"
                  autocomplete="Contraseña"
                  v-model="password"
                  class="texto"
                >
                  <template #prepend-content
                    ><CIcon name="cil-lock-locked"
                  /></template>
                </CInput>
                <CRow>
                  <CCol col="6" class="text-left">
                    <CButton
                      variant="outline"
                      type="submit"
                      value="Iniciar Sesion"
                      class="btn-secondary"
                    >
                      Iniciar Sesion
                    </CButton>
                  </CCol>
                  <CCol col="6" class="text-right texto">
                    <CButton color="link" class="px-0"
                      >olvidaste tu contraseña?</CButton
                    >
                    <CButton color="link" class="d-lg-none texto"
                      >Registrate ahora!</CButton
                    >
                  </CCol>
                </CRow>
              </form>
            </CCardBody>
          </CCard>
          <CCard
            color="primary"
            text-color="white"
            class="text-center py-5 d-md-down-none fondo-registrate texto"
            body-wrapper
          >
            <CCardBody>
              <h2>Registrate</h2>
              <p>no tienes cuenta? que esperas, unetenos ya!</p>
              <CButton class="texto" color="light" variant="outline" size="lg">
                Crear cuenta!
              </CButton>
            </CCardBody>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
    <CAlert color="warning" v-if="error" style="margin-top: 1rem">
      {{ error }}
    </CAlert>
  </CContainer>
  </div>
</template>


<script>
//import { ref } from "@vue/composition-api";
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      name: "Login",
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    Login() {
      this.error = "";
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((data) => {
            console.log(data);
            this.$router
              .push({ path: "/dashboard" })
              .then((data) => console.log(data))
              .catch((err) => {
                this.error = err.message;
              });
          })
          .catch((err) => {
            this.error = err.message;
          });
      } else {
        this.error = "todos los campos son requeridos";
      }
    },
  },
  created() {
    console.log("creado login");
  },
};
</script>
<style>
.fondo-registrate {
  background-image: url(https://i.imgur.com/JyszCWs.jpg);
  background-size: 100%;
}

#body-l{
  margin-top: -11rem !important;
}
</style>