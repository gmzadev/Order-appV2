<template>
  <CRow>
    <CCol col>
      <CCard>
        <CCardHeader class="center forma">
          <h2>
            <i class="cil-burger" />
          </h2>
          <h2>Platos</h2>
          <div class="card-header-actions"></div>
        </CCardHeader>
        <CCardBody class="container-fluid">
          
          <div>
            <CForm @submit.prevent="">
              <CInput
                class="barra"
                type="search"
                name=""
                value=""
                placeholder=""
                size="lg"
                v-model="Barra"
                @keypress="busqueda"
              >
                <template #append-content>
                  <CButton
                    color="dark"
                    variant="outline"
                    type="submit"
                    @click.prevent="search"
                    style="
                      height: 25px !important ;
                      width: 10px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    "
                  >
                    <i class="fas fa-search fa-xs"></i>
                  </CButton>
                </template>
                
              </CInput>
            </CForm>
          </div>
          <div>
            <CForm>
              <CInput
                placeholder="Nombre del plato"
                autocomplete="Nombre deL plato"
                v-model="Nombre"
              >
                <template #prepend-content><CIcon name="cil-fire" /></template>
              </CInput>
              
              <CInput
                placeholder="Link de Firebase"
                autocomplete="Link de Firebase"
                prepend="url"
                v-model="url"
              />
              <CInput
                placeholder="descripcion"
                autocomplete="descripcion"
                type="text"
                v-model="Descripcion"
              >
                <template #prepend-content
                  ><CIcon name="cil-fastfood"
                /></template>
              </CInput>
              <CInput placeholder="precio" type="number" autocomplete="">
                <template #prepend-content
                  ><CIcon name="cil-dinner"
                /></template>
              </CInput>
              <CInput
                placeholder="ingredientes, separado por coma"
                type="select"
                autocomplete=""
              >
                <template #prepend-content><CIcon name="cil-cash" /></template>
              </CInput>
              <div class="d-flex justify-content-between container-fluid">
                <CButton variant="outline" disabled color="warning" flex
                  >Deshabilitar Plato</CButton
                >
                <CButton variant="outline" disabled color="danger" flex
                  >Eliminar Plato</CButton
                >
                <CButton variant="outline" color="success" flex
                  >Crear/Modificar
                </CButton>
              </div>
            </CForm>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Platos",
  data() {
    return {
      Nombre:""
    };
  },
};
</script>

<style>
.barra {
  padding: 1%;
}
</style>
