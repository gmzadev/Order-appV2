<template>
  <CRow id="Reservaciones">
    <CCol col>
      <CCard>
        <CCardHeader>
          <strong style="text-align: center">
            <h2>
              <div class=" d-flex justify-content-center" style="">
                <a class="cil-burger"/> Reservaciones</div> 
            </h2>
          </strong>
          <div class="card-header-actions">
          </div>
        </CCardHeader>
        <CCardBody class="container-fluid " >
             <div >
              <CForm >
                <CInput class="barra" type="search" name="" value="" 
                  placeholder="Nombre" >
                  <template #append-content>
                    <CButton flex color="dark" variant="outline" type="submit" style="padding: 3%">
                      <i  class="cil-search" style=""/>
                    </CButton>
                  </template>
                </CInput>
              </CForm>
            </div>
            <CListGroup style="padding: 1%;margin-bottom: 2%">
              <CListGroupItem href="#">
                   es una fecha + id cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="primary">
                   es una fecha + id cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="secondary">
                     es una fecha + id cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="success">
                   es una fecha + id cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="danger">
                  es una fecha + id cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="warning">
                   es una fecha + id cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="info">
                es una fecha + id cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="light">
                 es una fecha + id cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="dark">
                es una fecha + id cualquiera
              </CListGroupItem>
           </CListGroup>
          <div>
            <CForm>
              <CInput
                placeholder="A nombre de"
                autocomplete="A nombre de">
                <template #prepend-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                placeholder="ID"
                autocomplete="ID">
              <template #prepend-content> <CIcon name="cil-fingerprint"/> </template>
              </CInput>
              <CInput
                placeholder="Link de google drive"
                autocomplete="Link de google drive"
                prepend="url"
              />
              <CInput 
                placeholder="fecha"
                autocomplete="fecha"
                type="datetime-local"
                >
                <template #prepend-content><CIcon name="cil-calendar"/></template>
              </CInput>
              <div class="d-flex justify-content-between container-fluid">
                <CButton variant="outline" disabled color="warning" flex >Lista de espera</CButton>
                <CButton variant="outline" disabled color="danger" flex>Rechasar reservacion</CButton>
                <CButton variant="outline" color="success" flex>Aceptar reservacion</CButton>
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
  name: 'Reservaciones',
  data () {
    return {
      

    }
  }
}
</script>

<style>
  .barra{
  padding: 1%


  }
</style>
