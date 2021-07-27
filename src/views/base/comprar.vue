<template>
    <div id="Comprar">
        <CRow >
    <CCol col>
      <CCard>
        <CCardHeader>
          <strong style="text-align: center">
            <h2>
              <div class=" d-flex justify-content-center row" style="">
                <i class="cil-fastfood"></i> Menu infantil</div> 
            </h2>
          </strong>
          <div class="card-header-actions">
          </div>
        </CCardHeader>
      <CCardBody class="container-fluid " >
             <div >
              <CForm >
                <h4>Bread Basket</h4><br>
                <CRow class=" container-fluid">  
                  <CContainer class="w3-text-grey  justify-content-between">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, incidunt a?  </p>
                        <CButton   variant="outline"  color="dark" @click.prevent="incrementar" flex > + {{precio}}$</CButton>
                        <CButton   variant="outline"  color="dark" @click.prevent="decrementar" flex > - {{precio}}$</CButton>
                        <img src="https://images.freejpg.com.ar/400/0105/hamburger-dinner-meal-food-beef-bottle-bread-F100023594.jpg" alt="">   
                  </CContainer>
                  
                </CRow> <br>
                <h4>Bread Basket</h4><br>
                <CRow class=" container-fluid">  
                  <CContainer class="w3-text-grey  justify-content-between">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, incidunt a?  </p>
                         <img src="https://images.freejpg.com.ar/400/0105/hamburger-dinner-meal-food-beef-bottle-bread-F100023594.jpg" alt="">  
                        <CButton  class="btn" variant="outline"  color="dark" @click.prevent="incrementar" flex > + {{precio}}$</CButton>
                        <CButton   variant="outline"  color="dark" @click.prevent="decrementar" flex > - {{precio}}$</CButton>
                  </CContainer>
                </CRow> <br>
                <h4>Bread Basket</h4><br>
                <CRow class=" container-fluid">  
                  <CContainer class="w3-text-grey  justify-content-between">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, incidunt a?  </p>
                        <CButton   variant="outline"  color="dark" @click.prevent="incrementar" flex > + {{precio}}$</CButton>
                        <CButton   variant="outline"  color="dark" @click.prevent="decrementar" flex > - {{precio}}$</CButton>
                        <img src="https://images.freejpg.com.ar/400/0105/hamburger-dinner-meal-food-beef-bottle-bread-F100023594.jpg" alt="">   
                  </CContainer>
                  
                </CRow> <br>
                <h4>Bread Basket</h4><br>
                <CRow class=" container-fluid">  
                  <CContainer class="w3-text-grey  justify-content-between">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, incidunt a?  </p>
                         <img src="https://images.freejpg.com.ar/400/0105/hamburger-dinner-meal-food-beef-bottle-bread-F100023594.jpg" alt="">  
                        <CButton  class="btn" variant="outline"  color="dark" @click.prevent="incrementar" flex > + {{precio}}$</CButton>
                        <CButton   variant="outline"  color="dark" @click.prevent="decrementar" flex > - {{precio}}$</CButton>
                  </CContainer>
                </CRow> <br>
                
           
              
                <div class="todalinea">
                  <CInput disabled type="number" name="" id="" :value="contador" class="">
                  <template #append-content>
                      <i class="fas fa-dollar-sign"></i>
                  </template> 
                  </CInput>

                </div>
                <div class="d-flex justify-content-between container-fluid">
                <CButton variant="outline" disabled color="primary" flex >Volver al inicio</CButton>
                <CButton variant="outline" disabled color="warning" flex>Cancelar</CButton>
                <CButton variant="outline" color="success" flex>Proceder al pago</CButton>
              </div>
               
            </CForm>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      precio: 12,
      contador: 0
    }
  },
  methods: {
     incrementar: function (){
       this.contador+=this.precio;
    } ,
    decrementar: function (){
      if (!this.precio-this.contador<0) 
       this.contador-=this.precio;
    } 
  }
  }
</script>
<style>
.btn{
  margin: 2px!important;
  
}
.todalinea{
  display: flex;
  flex-direction: column;
  padding: auto;
}
img{
  width:  100px!important;
  margin-left: 5px;
  border-radius: 5px;
}
</style>