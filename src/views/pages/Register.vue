<template>
  <div class="d-flex align-items-center min-vh-100 body">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm>
                <h1>Registrate</h1>
                <p class="text-muted">Create tu cuenta</p>
                <CInput
                  placeholder="Nombre de Usuario"
                  autocomplete="Nombre de Usuario"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="Cedula"
                  autocomplete="Cedula"
                >
                <template #prepend-content> 
                  <select name="telefono" style="outline: none !importan">
                    <option value="1">V-</option>
                    <option value="2">J-</option>
                    <option value="3">E-</option>
                </select> </template>
                </CInput>
                <CInput
                  placeholder="Correo Electrónico"
                  autocomplete="Correo Electrónico"
                  prepend="@"
                />
                <CInput 
                  placeholder="Telefono"
                  autocomplete="Telefono"
                  type="number"
                  >
                  <template #prepend-content><CIcon name="cil-phone"/></template>
                </CInput>
                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="new-password"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CInput
                  placeholder="Repeat password"
                  type="password"
                  autocomplete="new-password"
                  class="mb-4"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CButton color="success" block>Crear Cuenta</CButton>


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
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>
<style >
    .body{
      margin: 0;
      background: rgb(117,230,212);
      background: linear-gradient(180deg, rgba(117,230,212,1) 11%, rgba(117,169,230,1) 84%);
  }
</style>