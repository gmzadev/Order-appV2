<template >
  <div  id="Home" style="margin:0">
    <div class="titulos d-flex justify-content-center" style="padding:1%">
      <h1 class="h7" style="font-size:55px">Destacados</h1>
    </div>
  <div class=" d-flex justify-content-center" style="padding-top:25px">
         <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel"  >
           <div class="carousel-indicators">
             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
           </div>
           <div class="carousel-inner">
             <div class="carousel-item active  " data-bs-interval="10000">
               <img :src="img1" class="imagen-centrada d-md-block  img-fluid" :alt="text1" style="" >
               <div class="carousel-caption d-flex flex-column  justify-content-center">
                 <h5 class="titulo-imagen-caruser"  style="">First slide label</h5>
                 <p class="titulo-imagen-caruser">Some representative placeholder content for the first slide.</p>
               </div>
             </div>
             <div class="carousel-item " data-bs-interval="2000">
               <img :src="img2" class="imagen-centrada d-md-block  img-fluid" :alt="text1" >
               <div class="carousel-caption d-flex flex-column  justify-content-center">
                 <h5 class="titulo-imagen-caruser">Second slide label</h5>
                 <p class="titulo-imagen-caruser">Some representative placeholder content for the second slide.</p>
               </div>
             </div>
             <div class="carousel-item">
               <img :src="img3" class="imagen-centrada d-block img-fluid" :alt="text1" >
               <div class="carousel-caption d-flex flex-column  justify-content-center">
                 <h5 class="titulo-imagen-caruser">Third slide label</h5>
                 <p class="titulo-imagen-caruser">Some representative placeholder content for the third slide.</p>
               </div>
             </div>
           </div>
           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Previous</span>
           </button>
           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
             <span class="carousel-control-next-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Next</span>
           </button>
     </div>
 </div>
 <div class="titulos d-flex justify-content-center" style="padding:1%">
   <h1 class="h7" style="font-size:50px">Menu</h1>
 </div>
 <div class="d-flex justify-content-center" style="padding:3%">
      <div class="col">
        <div class="card">
            <img class="img-fluid" :src="menuinfantil" alt="text1" style="">
            <h6>Infantiles</h6>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img class="img-fluid" :src="Especiales" alt="text1" style="">
          <h6 >Especiales</h6>
        </div>
      </div>
      <div class="col">
        <div class="card">
            <img class="img-fluid" :src="platofuerte" alt="text1" style="">
            <h6>Gourtmest</h6>
        </div>
      </div>
      <div class="col">
          <div class="card">
            <img class="img-fluid" :src="menucombo" alt="text1" style="">
            <h6>Combos</h6>
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
  data  () {
    return {
      name: 'Home',
      img1: 'https://p4.wallpaperbetter.com/wallpaper/181/702/449/superb-italian-food-wallpaper-preview.jpg',
      text1: 'no cargo',
      img2: 'https://p4.wallpaperbetter.com/wallpaper/593/709/124/food-seafood-dish-lobster-wallpaper-preview.jpg',
      img3: 'https://p4.wallpaperbetter.com/wallpaper/104/598/389/pizza-vegetables-food-wallpaper-preview.jpg',
      menuinfantil: 'https://st2.depositphotos.com/3369547/8129/v/600/depositphotos_81297406-stock-illustration-kids-menu-design.jpg',
      platofuerte: 'https://i.pinimg.com/originals/d4/05/75/d405756155aeb93459c276a56c8d9f8a.jpg',
      menucombo: 'https://static8.depositphotos.com/1077687/1062/v/600/depositphotos_10623006-stock-illustration-hamburger-combo-with-french-fries.jpg',
      Especiales: 'https://media.istockphoto.com/vectors/grunge-blue-special-menu-word-with-dish-spoon-and-fork-icon-rubber-vector-id1318479435?b=1&k=6&m=1318479435&s=170667a&h=BzRfjwQV7m4iTipuUr690ir_oagsOOf2YD0y6gYEP-4='
    }
  }
}
</script>
