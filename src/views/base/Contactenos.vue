<template id="Contactenos">
  <div>
    <div class="d-flex border-dark justify-content-center row " style="margin:1%">
      <div class="card body ">
        <div class="card-header"><h3 class="h7">Contactenos</h3></div>
        <div class="card-body text-dark">
          <h5 class="h7"><i class="fa fa-phone"> Telefonos </i></h5>
           <hr>
           <div>
             <a class="link" href="tel:+584123543841" title="">Digitel</a>
           </div>
           <div>
             <a class="link" href="tel:+582952395218" title=""> Cantv </a>
           </div>
        </div>
        <div class="card-body text-dark">
          <h5 class="h7"><i class="fa fa-envelope"> Correo </i></h5>
           <hr>
           <div>
             <a class="link" href="mailto:gaboalejito@gmail.com" title=""> Escribenos un correo con tus dudas! </a>
           </div>
         </div>
               <div class="card-body text-dark">
          <h5 class="h7"><i class="fab fa-facebook"> Redes Sociales </i></h5>
           <hr>
           <div class="d-flex justify-content-center">
             <a class="link" href="https://www.facebook.com/La-Sirenita-Deli-Express-100749434765077" title=""> 
              <img class="facebook" :src="imgFacebook" :alt="text1" > 
            </a>
             <a class="link" href="https://www.instagram.com/lasirenitadeliexpress/" title=""> 
              <img class="instagram" :src="imgInstagram" :alt="text1" style="margin-top:15%" > 
            </a>
           </div>
         </div>
      </div>
    </div>
    <GFooter/>
  </div>
</template>
<script>

import GFooter from '@/components/GFooter.vue'
export default {
  components: {
    GFooter
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
</style>
