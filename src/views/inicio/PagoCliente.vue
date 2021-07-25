<template>
 
  <div>
    <div class="d-flex border-dark justify-content-center row " style="margin:1%">
      <div class="card body ">
          <h3><i class="fa fa-envelope"></i></h3>
        <div class="card-header"><h3 class="h7">Eviar Pago</h3></div>
          <br>

          <h3><i class="fas fa-dollar-sign">  </i></h3>
         <h4 class="h7">Total</h4>
              <div class="todalinea">
                  <CInput disabled type="number" name="" id="" :value="total" style="text-align: center;">
                     
                      <template #append-content>
                         <i  class="fas fa-dollar-sign h7"></i>
                      </template>
                  </CInput> 
               </div>
        <br>
        <div class="card-body text-dark">
                <form class="d-flex">
                <div class="col-md">
                    <input class="form-control"  style="" type="file" id="formFile">
                </div>    
                </form>
                <br>
                  <h3><i class="fa fa-box">  </i></h3>
                <h4 class="h7">Entrega y Regogida</h4>
                <hr>
                <div class="d-flex justify-content-center ">
                    <div class="custom-control custom-radio  ">
                        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                        <label class="custom-control-label" for="customRadio1">Recogida en tienda</label>
                    </div>
                    <div class="custom-control custom-radio border">
                        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                        <label class="custom-control-label" for="customRadio2">Delivery</label>
                    </div>
                </div>
              
        </div>
          <div class="col-auto ">
                    <button type="submit" class="btn btn-primary container-fluid ">Enviar datos</button>
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
      name: 'contactenos',
      text1: 'no cargo',
      total: 500,
      imgFacebook: 'https://brandemia.org/sites/default/files/inline/images/facebook_logo_portada.jpg',
      imgInstagram: 'https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg'

    }
  }
}
</script>
<style >
.custom-radio{
    margin: 1%;
    width: 50%;
    border-radius: 15px;
    background:linear-gradient(gold);  

}
.todalinea{
  display: flex;
  flex-direction: column;
  padding: auto;
  
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
</style>