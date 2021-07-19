<template>
  <CRow>
    <CCol col>
      <CCard>
        <CCardHeader>
          <strong style="text-align: center">
            <h2>
              <div class=" d-flex justify-content-center" style="">
                <a class="cil-burger"/> Platos</div> 
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
                   este es un plato cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="primary">
                   este es un plato cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="secondary">
                     este es un plato cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="success">
                   este es un plato cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="danger">
                  este es un plato cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="warning">
                   este es un plato cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="info">
                este es un plato cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="light">
                 este es un plato cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="dark">
                este es un plato cualquiera
              </CListGroupItem>
           </CListGroup>
          <div>
            <CForm>
              <CInput
                placeholder="Nombre del plato"
                autocomplete="Nombre deL plato">
                <template #prepend-content><CIcon name="cil-fire"/></template>
              </CInput>
              <CInput
                placeholder="ID"
                autocomplete="ID">
              <template #prepend-content> <CIcon name="cil-cursor"/> </template>
              </CInput>
              <CInput
                placeholder="Link de google drive"
                autocomplete="Link de google drive"
                prepend="url"
              />
              <CInput 
                placeholder="descripcion"
                autocomplete="descripcion"
                type="text"
                >
                <template #prepend-content><CIcon name="cil-fastfood"/></template>
              </CInput>
              <CInput
                placeholder="precio"
                type="number"
                autocomplete=""
              >
                <template #prepend-content><CIcon name="cil-dinner"/></template>
              </CInput>
              <CInput
                placeholder="ingredientes, separado por coma"
                type="number"
                autocomplete=""
              >
                <template #prepend-content><CIcon name="cil-cash"/></template>
              </CInput>
              <div class="d-flex justify-content-between container-fluid">
                <CButton variant="outline" disabled color="warning" flex >Deshabilitar Plato</CButton>
                <CButton variant="outline" disabled color="danger" flex>Eliminar Plato</CButton>
                <CButton variant="outline" color="success" flex>Crear/Modificar </CButton>
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
  name: 'Platos',
  data () {
    return {
      /*esto itia en el template
      <CBreadcrumb :items="items"/>
          <CBreadcrumb :items="items2"/>
          <CBreadcrumb :items="items3"/>
      items: [

        {
          text: 'Admin',
          href: '#'
        }, 
        {
          text: 'Manage',
          href: '#'
        }, 
        {
          text: 'Library'
        }
      ],


      items2: [
        {
          text: 'Go to dashboard',
          to: '/dashboard'
        }, 
        {
          text: 'Go to widgets',
          to: '/Widgets'
        }, 
        {
          text: 'Go to Google',
          href: 'http://google.com'
        },
        {
          text: 'Current page'
        }
      ],


      items3: [
        {
          text: 'Added',
          to: '#2',
          addClasses: 'font-xl'
        }, 
        {
          text: 'Custom',
          to: '#3',
          addClasses: 'font-xl'
        },
        {
          text: 'Classes',
          to: '#4',
          addClasses: 'font-xl text-danger'
        }
      ]*/

    }
  }
}
</script>

<style>
  .barra{
  padding: 1%


  }
</style>
