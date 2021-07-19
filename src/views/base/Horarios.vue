<template>
  <div id="#Horarios" >
    <div class="d-flex justify-content-center row" style="padding:3%">
      <div class="titulos card row text-center danger " >
        <h3 style="padding-top:3% ;card-title">Jueves</h3>
        <p>2:00 Pm a 9:00Pm</p>
      </div>
      <div class="titulos card row text-center danger bg-warning" >
        <h3 style="padding-top:3% ;card-title">Viernes</h3>
        <p>2:00 Pm a 9:00Pm</p>
      </div>
      <div class="titulos card row text-center danger " >
        <h3 style="padding-top:3% ;card-title">Sabado</h3>
        <p>4:00 Pm a 12:00 AM</p>
      </div>
      <div class="titulos card row text-center danger bg-warning" >
        <h3 style="padding-top:3% ;card-title">Domingo</h3>
        <p>4:00 Pm a 12:00 AM</p>
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
      name: 'Horarios'
    }
  }
}
</script>
<style>
  .card-body,.card{
  width: 100%;
  padding: 3%;
  border-radius: 10px;
}
</style>
