<template>
  <div>
    <div id="Home" class="body">
      <div
        class="titulos d-flex justify-content-center card center"
        style="padding: 1%"
      >
        <h1 class="h7" style="font-size: 55px">Destacados</h1>
      </div>
      <div id="carusel" class="justify-content-center center">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="imagen-fluid d-block w-100"
                :src="img1"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="imagen-fluid d-block w-100"
                :src="img2"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="imagen-fluidd-block w-100"
                :src="img3"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              class="carousel-control-prev-icon black"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              class="carousel-control-next-icon black"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div
        class="card titulos d-flex justify-content-center mt-3 center"
        style="padding: 1%"
      >
        <h1 class="h7" style="font-size: 50px">Menu</h1>
      </div>
      <div class="contenedor-cartas center">
        <div class="rows">
          <div class="column">
            <div class="card carta-home">
              <a @click="seleccion('Snack')">
                <img
                  class="img-fluid mb-2 mt-3"
                  :src="menuinfantil"
                  alt="text1"
                  style=""
                />
                <h6>Snack's</h6>
              </a>
            </div>
          </div>
          <div class="column">
            <div class="card carta-home">
              <a @click="seleccion('Especial del dia')">
                <img
                  class="img-fluid mb-2 mt-3"
                  :src="Especiales"
                  alt="text1"
                  style=""
                />
                <h6>Especiales</h6>
              </a>
            </div>
          </div>
          <div class="column">
            <div class="card carta-home">
              <a @click="seleccion('Plato Fuerte')">
                <img
                  class="img-fluid mb-2 mt-3"
                  :src="platofuerte"
                  alt="text1"
                  style=""
                />
                <h6>Platos Fuertes</h6>
              </a>
            </div>
          </div>
          <div class="column">
            <div class="card carta-home">
              <a @click="seleccion('Combo')">
                <img
                  class="img-fluid mb-2 mt-3"
                  :src="menucombo"
                  alt="text1"
                  style=""
                />
                <h6>Combos</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Home",
  /* components: {
    Carousel,
    Slide,
  },*/
  data() {
    return {
      number: 2,
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
  methods: {
    seleccion(nombre) {
      this.$store.commit("set", ["nombre", nombre]);
      this.$router.push("/base/Comprar");
    },
  },
};
</script>
<style  >
a {
  cursor: pointer;
}
.body{
  padding-left: 4vw;
  padding-right: 4vw;

}
.black {
  background-color: black;
  border-radius: 60%;
}
.carousel-inner img {
  height: 50vh !important;
}
.carousel-item {
  position: relative !important;
  /*display: none !important;*/
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;

  transition: -webkit-transform 0.6s ease !important;
  transition: transform 0.6s ease !important;
  transition: transform 0.6s ease, -webkit-transform 0.6s ease !important;
  -webkit-backface-visibility: hidden !important;
  backface-visibility: hidden !important;
  -webkit-perspective: 1000px !important;
  perspective: 1000px !important;
}

.carousel-caption {
  text-shadow: black;
  color: black;
  background-color: rgba(222, 222, 222, 0.43) !important;
}
/* Float four columns side by side */
.column {
  justify-content: center !important;
  float: right;
  width: 18vw;
  padding-top: 0;
  padding-right: 0 ;
  padding-bottom: 0;
}

/* Remove extra left and right margins, due to padding in columns */
.rows {
  /*margin: 0 -5px;*/
}

/* Clear floats after the columns */
.rows:after {
  content: "";
  justify-content: center;
  display: table;
  clear: both;
}
.contenedor-cartas
/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 12px;
  text-align: center;
  background-color: #f1f1f1;
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 10px;
    padding-left: 20vw ;
  }
}
@media screen and (max-width: 700px) and (orientation: landscape) { /* dispositivos pequeños */
  .column {
    width: 22vw;
    margin-bottom: 10px;
   
  }
  .carta-home {
    width: 15vw !important ;
    height: 25vw !important;
}}
@media screen and (max-width: 900px) and (min-width: 700px)  and (orientation: landscape) {/* dispositivos medianos */
  .column {
    width: 22vw;
    margin-bottom: 10px;
   
  }
  .carta-home {
    width: 15vw !important ;
    height: 25vw !important;
}
}
</style>>
 
  
