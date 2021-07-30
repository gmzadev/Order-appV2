<template>
  <div>
  <div id="Home" style="margin: 0">
    <div class="titulos d-flex justify-content-center" style="padding: 1%">
      <h1 class="h7" style="font-size: 55px">Destacados</h1>
    </div>
    <div class="d-flex justify-content-center">
  <CCarousel
   class="col"
    arrows
    indicators
    animate
    interval:8000
  >
    <CCarouselItem
    class="CCarouselItem titulosnavitenG"
      captionHeader="Primera disapositiva"
      :image="img1"
      captionText=""
      
    />
    <CCarouselItem
      captionHeader="Segunda  disapositiva"
    class="CCarouselItem titulosnavitenG"
      :image="img2"
      captionText=""
    />
    <CCarouselItem
    class="CCarouselItem titulosnavitenG"
     captionHeader="Tercera  disapositiva"
      :image="img3"
      captionText=""
    />
  </CCarousel>
    </div>
    <div class="titulos d-flex justify-content-center" style="padding: 1%">
      <h1 class="h7" style="font-size: 50px">Menu</h1>
    </div>
    <div class=" d-flex justify-content-center card-group card-columns" style="padding: 3%">
      <div class="col">
        <div class="card center">
          <router-link to="/Ordenar">
            <img class="img-fluid" :src="menuinfantil" alt="text1" style="" />
            <h6>Snacks</h6>
          </router-link>
        </div>
      </div>
      <div class="col ">
        <div class="card center">
          <img class="img-fluid" :src="Especiales" alt="text1" style="" />
          <h6>Especiales</h6>
        </div>
      </div>
      <div class="col">
        <div class="card center">
          <img class="img-fluid" :src="platofuerte" alt="text1" style="" />
          <h6>Gourtmest</h6>
        </div>
      </div>
      <div class="col ">
        <div class="card center">
          <img class="img-fluid" :src="menucombo" alt="text1" style="" />
          <h6>Combos</h6>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      img1: "https://p4.wallpaperbetter.com/wallpaper/181/702/449/superb-italian-food-wallpaper-preview.jpg",
      text1: "no cargo",
      img2: "https://p4.wallpaperbetter.com/wallpaper/593/709/124/food-seafood-dish-lobster-wallpaper-preview.jpg",
      img3: "https://p4.wallpaperbetter.com/wallpaper/104/598/389/pizza-vegetables-food-wallpaper-preview.jpg",
      menuinfantil:
        "https://st2.depositphotos.com/3369547/8129/v/600/depositphotos_81297406-stock-illustration-kids-menu-design.jpg",
      platofuerte:
        "https://i.pinimg.com/originals/d4/05/75/d405756155aeb93459c276a56c8d9f8a.jpg",
      menucombo:
        "https://static8.depositphotos.com/1077687/1062/v/600/depositphotos_10623006-stock-illustration-hamburger-combo-with-french-fries.jpg",
      Especiales:
        "https://media.istockphoto.com/vectors/grunge-blue-special-menu-word-with-dish-spoon-and-fork-icon-rubber-vector-id1318479435?b=1&k=6&m=1318479435&s=170667a&h=BzRfjwQV7m4iTipuUr690ir_oagsOOf2YD0y6gYEP-4=",
    };
  },
};
</script>
<style  >
.CCarouselItem{
  max-height:28rem!important;
  max-width: 100vw;
  transform: scale(0.9);


  
}

.carousel-caption{
  text-shadow: black ;
  color: black;
  background-color: rgba(222,222,222, 0.43)!important;
 
}
</style>>
 
  
