<template id="About">
  <div >
    <div class="parrafo border" style="margin-top:2%">
      <h2 class="titulos">Acerca de Nosotros</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div class="d-flex justify-content-center">
        <div class="grid-galeria" style="" >
          <img class="img-fluid img-grid" :src="expoburguer" alt="text1">
          <img class="img-fluid img-grid" :src="sirenitarest" alt="text1">
          <img class="img-fluid img-grid" :src="menuimg" alt="text1">
        </div>
        <div class="grid-galeria" style="">
          <img class="img-fluid " :src="menuimg" alt="text1">
          <img class="img-fluid " :src="burguer1" alt="text1">
          <img class="img-fluid " :src="cliente" alt="text1">
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      name: 'About',
      menuimg: 'https://i.imgur.com/02zzPmG.jpg',
      parilla: 'https://i.imgur.com/xpDoDu3.jpg',
      sirenitarest: 'https://i.imgur.com/lfP0bhD.jpg',
      burguer1: 'https://i.imgur.com/X5SkqV2.jpg',
      expoburguer: 'https://i.imgur.com/jInp0xH.jpg',
      cliente: 'https://i.imgur.com/6Vg404o.jpg',
      clientes: 'https://i.imgur.com/R3sS52Z.jpg'
    }
  }
}
</script>
