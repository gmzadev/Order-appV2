<template>
  <div class="c-app flex-row align-items-center body">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Iniciar Sesión</h1>
                  <p class="text-muted">Inicia sesion en tu cuenta</p>
                  <CInput
                    placeholder="Nombre de usuario"
                    autocomplete="correo nombre de usuario"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    placeholder="Contraseña"
                    type="password"
                    autocomplete="Contraseña"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" class="px-4" ><span v-c-emit-root-event:span-clicked="log"><CLink to="/Dashboard">Iniciar Sesion</CLink></span></CButton>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0">olvidaste tu contraseña?</CButton>
                      <CButton color="link" class="d-lg-none">Registrate ahora!</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Registrate</h2>
                <p> no tienes cuenta? que esperas, unetenos ya!</p>
                <CButton
                  color="light"
                  variant="outline"
                  size="lg"
                >
                  Crear cuenta!
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>


<script>
export default {
  name: 'Login',
   
   data() {
     return {
       login: false,
      admin: false,
     }
   },

  methods: {
    log (){
      console.log(this.login);
      this.login=!this.login;
      console.log(this.login);
      this.admin=!this.admin;
      let a= this.login;
      let b= this.admin;
      this.$emit('getLogin',{login: a,admin: b});
    }
  },
 
}
</script>
<style scoped>
  a{
    color: white;
  }
  .CButon{
    color: white  !important;
  }
  .CLink{
    
    color: white  !important;
  }
  .body{
      margin: 0;
      background: rgb(117,230,212);
      background: linear-gradient(180deg, rgba(117,230,212,1) 11%, rgba(117,169,230,1) 84%);
  }
</style>
