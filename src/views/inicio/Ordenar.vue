<template>
 
<CRow id="Reservaciones">
    <CCol col>
      <CCard>
        <CCardHeader>
          <strong style="text-align: center">
            <h2>
              <div class=" d-flex justify-content-center" style="">
                <i class="fa fa-envelope"></i> Inventario</div> 
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
                   es un ingrediente cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="primary">
                   es un ingrediente cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="secondary">
                     es un ingrediente cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="success">
                   es un ingrediente cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="danger">
                  es un ingrediente cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="warning">
                   es un ingrediente cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="info">
                es un ingrediente cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="light">
                 es un ingrediente cualquiera
              </CListGroupItem>
              <CListGroupItem href="#" color="dark">
                es un ingrediente cualquiera
              </CListGroupItem>
           </CListGroup>
          <div>
            <CForm>
              <div class="CInput">
              <CInput
                placeholder="Nombre del ingrediente o consumible"
                autocomplete="Nombre del ingrediente o consumible">
                <template #prepend-content><i class="h7 fas fa-user"></i></template>
              </CInput>
              </div>
              <CInput
                placeholder="ID"
                autocomplete="ID"
                type="number">
              <template #prepend-content> <CIcon name="cil-fingerprint"/> </template>
              </CInput>
              <CInput
                placeholder="Link de google drive"
                autocomplete="Link de google drive"
                prepend="url"
                type="url"
              />
              <CInput 
                placeholder="Existencia"
                autocomplete="Existencia"
                type="number"
                >
                <template #prepend-content><CIcon name="cil-chart"/></template>
              </CInput>
              <div class="d-flex justify-content-between container-fluid">
                <CButton variant="outline" disabled color="warning" flex >Modificar</CButton>
                <CButton variant="outline" disabled color="danger" flex>Eliminar</CButton>
                <CButton variant="outline" color="success" flex>Crear</CButton>
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
  components: {
    
  },
  data () {
    return {
      name: 'contactenos',
      text1: 'no cargo',
      imgFacebook: 'https://brandemia.org/sites/default/files/inline/images/facebook_logo_portada.jpg',
      imgInstagram: 'https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg'

    }
  }
}
</script>
<style >
.Cinput{
  padding: 1%!important;
  margin: 2%!important
}
.custom-radio{
    margin: 1%;
    width: 50%;
    border-radius: 15px;
    background:linear-gradient(gold);  

}
.body{
  padding: 5%;
  border-radius: 15px
}
.link{
  text-align: center;
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-family: "Georgia", serif;
}
.facebook{
  width: 100px;
  height: 70px
}
.instagram{
  width: 55px;
  height: 55px;
}
 .barra{
  padding: 1%


  }
</style>
