<template >
 <!--<div id="Registro" class="container-fluid ">
   <div class=" container-fluid ">

     <form class="container-fluid d-flex justify-content-center" action="index.html" method="post" >

       <div class="container-fluid formulario justify-content-center border" style="width:auto">
         <div class="justify-content-center">
           <img class="img-fluid icono-form" :src="img" :alt="text1">
         </div>
         <div class="container-fluid formulario justify-content-center row " >
           <p>Nombre de Usuario</p>
           <div class="">
                 <input type="text" class="imput-tex" name="Nombre" value="">
           </div>
         </div>
         <div class="container-fluid formulario justify-content-center row ">
           <p>Correo</p>
           <div class="">
                 <input type="email" class="imput-tex" name="Correo" value="">
           </div>
         </div>
         <div class="container-fluid formulario justify-content-center row ">
           <p>Contraseña</p>
           <div class="">
                 <input type="password" class="imput-tex" name="Correo" value="">
           </div>
         </div>
         <div class="container-fluid formulario justify-content-center row">
           <p>Cedula</p>
           <div >
                <select style="height:100%">
                  <option value="V-">V-</option>
                  <option value="J-">j-</option>
                  <option value="E-">E-</option>
                </select>
                 <input type="number" class="imput-tex" name="Correo" value="">
           </div>
           <div class="container-fluid formulario justify-content-center row">
             <p>Telefono</p>
             <div>
                  <select style="height:100%; font-size:14px; ">
                    <option value="Digitel">0412</option>
                    <option value="Movistar">0414</option>
                    <option value="Movilnet">0416</option>
                  </select>
                   <input type="number" class="imput-tex" name="Correo" value="" style="width:188px">
             </div>
         </div>
         <div class="container-fluid formulario justify-content-center row imput-text">
           <button class="btn btn-outline-danger" style="width:270px">Enviar</button>
         </div>
         </div>
       </div>

     </form>

   </div>
 </div>-->
  <!--<div class="d-flex justify-content-center row "> aqui va el formulario
        <div class="card body">
        <h3>Enviar pago</h3>


          <form class=" d-flex justify-content-center row"enctype="multipart/form-data"
                action="http://example.org/wmqfte/file/agent/AGENT1@QM1/webuploads"
                method="POST">
           <input type="HIDDEN" name="dest-exists-action" value="overwrite"/>
           <input type="HIDDEN" name="type" value="text"/>
           <input type="HIDDEN" name="jobname" value="TEST"/>
           <input type="HIDDEN" name="priority" value="1"/>
           <input type="HIDDEN" name="checksum" value="NONE"/>
           <input type="HIDDEN" name="metadata" value="fred=awesome,bob=cool"/>
           <input type="HIDDEN" name="metadata" value="lewis=fast,niall=slow"/>
           <input type="HIDDEN" name="postdest" 
                  value="[command=D:\postdest.cmd,type=executable,successrc=0]"/>
           <input type="HIDDEN" name="postdest-args" value="[fred]"/>  
           <div>
            <input type="FILE" name="file"/>
           </div>
           <input type="submit" name="Upload" value="Subir" />
          </form>
        </div>

  </div>-->


    <div>
      
  
  <!-- Menu Section -->
  <div class="w3-row w3-padding-64 body" id="menu">
    <div class="w3-col l6 w3-padding-large">
      <h1 class="w3-center">Nuestro Menu</h1><br>
      <h4>Bread Basket</h4>
      <p class="w3-text-grey">Assortment of fresh baked fruit breads and muffins 5.50</p><br>
    
      <h4>Honey Almond Granola with Fruits</h4>
      <p class="w3-text-grey">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br>
    
      <h4>Belgian Waffle</h4>
      <p class="w3-text-grey">Vanilla flavored batter with malted flour 7.50</p><br>
    
      <h4>Scrambled eggs</h4>
      <p class="w3-text-grey">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br>
    
      <h4>Blueberry Pancakes</h4>
      <p class="w3-text-grey">With syrup, butter and lots of berries 8.50</p>    
    </div>
    <div class="w3-col l6 w3-padding-large">
      <img :src="imagenMenu" class="w3-round w3-image w3-opacity-min" alt="Menu" style="width:100%">
    </div>
  </div>
  <hr>
</div>




</template>

<script>
  export default {
    data () {
      return {
        name: 'Registro',
        text1: 'No Hay conexion con el servidor de imagenes',
        imagenMenu: 'https://www.w3schools.com/w3images/sandwich.jpg',
        img: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/78620099_100750434764977_3763166880655736832_n.png?_nc_cat=105&ccb=1-3&_nc_sid=973b4a&_nc_ohc=bC9qIdxjSUgAX8jLAtY&_nc_ht=scontent-mia3-2.xx&oh=e7f7b3d30f0757182440aea4153b016a&oe=60F3ECF1'
      }
    }
  }
</script>
<style >
  .body{
  margin-top:  5%;
  padding: 5%;
  border-radius: 15px
}
.w3-row{
  background-color: white
}
input{
  padding: 3%
}
</style>