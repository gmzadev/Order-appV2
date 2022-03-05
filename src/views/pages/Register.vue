/* eslint-disable vue/require-v-for-key */
/* eslint-disable vue/require-v-for-key */
<template>
  <div id="body-r">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm @submit.prevent="Register">
                <h1>Registrate</h1>
                <p class="text-muted forma">Create tu cuenta</p>
                <CInput
                  placeholder="Nombre de Usuario"
                  autocomplete="Nombre de Usuario"
                  v-model="name"
                  class="forma"
                >
                  <template #prepend-content
                    ><CIcon name="cil-user"
                  /></template>
                </CInput>
                <CInput
                  class="forma"
                  placeholder="Cedula"
                  autocomplete="Cedula"
                  v-model="cedula"
                  type="number"
                >
                  <template #prepend-content class="texto">
                    <select v-model="seleccionado" >
                      <option value="V-" selected>V-</option>
                      <option value="E-">E-</option>
                      <option value="J-">J-</option>
                    </select>
                  </template>
                </CInput>
                <CInput
                  class="forma"
                  placeholder="Correo Electrónico"
                  autocomplete="Correo Electrónico"
                  prepend="@"
                  v-model="email"
                />
                <CInput
                  class="forma"
                  placeholder="Telefono"
                  autocomplete="Telefono"
                  type="number"
                  v-model="telefono"
                >
                  <template #prepend-content
                    ><CIcon name="cil-phone"
                  /></template>
                </CInput>
                <CInput
                  class="forma"
                  placeholder="Password"
                  type="password"
                  autocomplete="new-password"
                  v-model="password"
                >
                  <template #prepend-content
                    ><CIcon name="cil-lock-locked"
                  /></template>
                </CInput>
                <CInput
                  placeholder="Repeat password"
                  type="password"
                  autocomplete="new-password"
                  class="mb-4 forma"
                  v-model="password2"
                >
                  <template #prepend-content
                    ><CIcon name="cil-lock-locked"
                  /></template>
                </CInput>
                <CButton class="forma" color="success" block type="submit"
                  >Crear Cuenta</CButton
                >
              </CForm>
            </CCardBody>
            <!-- <CCardFooter class="p-4">
              <CRow>
                <CCol col="6">
                  <CButton block color="facebook">
                    Facebook
                  </CButton>
                </CCol>
                <CCol col="6">
                  <CButton block color="twitter">
                    Twitter
                  </CButton>
                </CCol>
              </CRow>
            </CCardFooter>-->
          </CCard>
        </CCol>
      </CRow>
      <CAlert color="warning" v-if="error" style="margin-top: 1rem">
        {{ error }}
      </CAlert>
    </CContainer>
  </div>
</template>

<script>
//import { onBeforeMount } from "vue";
import firebase from "firebase";

import { db } from "@/main.js";
export default {
  name: "Register",
  methods: {
    Register() {
      var join = "";
      join = this.seleccionado + this.cedula;
      var auxCedula = join;
      this.error = "";
      join = "";
      if (
        this.email &&
        this.password &&
        this.password2 &&
        this.name &&
        this.telefono &&
        this.cedula
      ) {
        if (this.password != this.password2) {
          this.error = "las contraseñas no coinciden";
        } else {
          if (this.password.length <= 6) {
            this.error = "la contraseña deve ser mayor a 6 carapteres";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(() => {
                db.collection("Usuarios")
                  .doc()
                  .set({
                    Nombre: this.name,
                    Correo: this.email,
                    Cedula: auxCedula,
                    Telefono: this.telefono,
                    nivelUsuario: "Cliente",
                  })
                  .then((docRef) => {
                    console.log("Document written with ID: ", docRef.ID);
                    this.$router.push({path: '/'})
                  })
                  .catch((error) => {
                    console.error("Error adding document: ", error);
                  });
                this.name = "";
                this.email = "";
                this.password = "";
                this.password2 = "";
                this.telefono = "";
                this.cedula = "";
              })
              .catch((err) => {
                this.error = err.messag3e;
              });
          }
        }
      } else {
        this.error = "todos los campos son requeridos";
      }
    },
  },
  data() {
    return {
      seleccionado: "V-",
      name: "",
      email: "",
      password: "",
      password2: "",
      cedula: "",
      telefono: "",
      error: "",
    };
  },
  /*created (){
    console.log(usuarios) //leyendo usuarios
    console.log(this.$store.state.user)//optener el email del usuario
  }*/
};
</script>
<style >
#body-r {
  margin: 1rem !important;
}

</style>