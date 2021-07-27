<template>
  <div id="Barra" >
      <div class="col sticky-top  barra" >
              <nav class="navbar navbar-expand-lg navbar-light" >
                <div class="container-fluid">
                  <router-link class="navbar-brand"  to="/home"> <img class="img-fluid iconos" :src="iconosirenita" :alt="text1"> 
                   <span class="h7"> La Sirenita Deli</span>
                  </router-link>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <router-link class=" nav-item nav-link active footer-text h7" to="/Horarios" aria-current="page"> Horarios </router-link>
                        <router-link class="nav-item nav-link footer-text h7" to="/About" > Nosotros </router-link>
                        <router-link class=" nav-item nav-link footer-text h7" to="/Contactenos"> Contactenos </router-link>
                        <router-link v-if="b" class="nav-item nav-link footer-text h7" to="/PagoCliente" > Pagar </router-link>
                        <router-link v-if="b" class="nav-item nav-link footer-text h7" to="/Ordenar" > Ordenar </router-link>
                  </div>
                   <div  v-if="a" class="nav-item  justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
                    <router-link class="nav-link h7 footer-text " to="/Registro"> Registrate </router-link>
                    <router-link class="nav-link  footer-text h7" to="/pages/Login"  role="button"  aria-expanded="false"> Iniciar sesión</router-link>
                  </div>
                </div>
              </nav>
          </div>
    </div>


</template>


<script>


export default {
    name:'Barra',
   data () {
    return {
      a: true,
      b: true,
      text1: 'no cargo',
      iconosirenita: 'https://i.imgur.com/as1ZB1e.png'
    }
  }
}
</script>


 

<style  >
nav {
    margin: 0.5% !important;
    background-color: rgba(99, 111, 131,0.8);
    margin-top: 2%;
   margin-left: -1%;
   margin-right:  -1%;
   border-radius: 10px;
    justify-content:center!important;
  display:flex;
  }
  
</style>