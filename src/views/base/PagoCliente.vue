<template>
  <div>
    <div
      class="d-flex justify-content-center row espacios"
      style="margin: 1%, padding:1%"
    >
      <div class="card body center">
        <h3><i class="fas fa-dollar-sign"> </i></h3>
        <h4 class="h7">Total</h4>
        <CForm @submit.prevent="">
          <hr />
          <CInput
            type="text"
            placeholder="Cedula del cliente"
            :disabled="true"
            :value="Cedula"
          >
            <template #prepend-content> ID</template>
          </CInput>

          <CInput
            type="text"
            placeholder="Nombre del cliente"
            :value="NombreCliente"
            :disabled="true"
          >
            <template #prepend-content> <i class="fas fa-user"></i></template>
          </CInput>
          <CInput
            type="text"
            placeholder="Correo"
            :value="Correo"
            :disabled="true"
          >
            <template #prepend-content> <i class="cil-mail"></i></template>
          </CInput>
          <div class="input-group">
            <input
              type="file"
              class="form-control"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
              accept="image/*"
              @change="onfileselected"
            />
            <button
              class="btn btn-secondary fas fa-upload"
              type="button"
              id="inputGroupFileAddon04"
              @click="upload"
              :disabled="selectedFile == null"
            >
              Subir
            </button>
          </div>
          <div  v-if="carga" class="d-flex justify-content-center mt-3">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <br />
          <CInput
            disabled
            type="number"
            name=""
            id=""
            :value="total"
            style="text-align: center"
          >
            <template #append-content>
              <i class="fas fa-dollar-sign h7"></i>
            </template>
          </CInput>

          <hr />
          <br />

          <!--<h3><i class="fa fa-box"> </i></h3>
          <h4 class="h7">Entrega y Regogida</h4>
          <hr />
          <div class="d-flex justify-content-center">
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadio1"
                >Recogida en tienda</label
              >
            </div>
            <div class="custom-control custom-radio border">
              <input
                type="radio"
                id="customRadio2"
                name="customRadio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadio2"
                >Delivery</label
              >
            </div>
          </div>-->
          <div class="center">
            <button
              @click="Pagar()"
              class="col-sm-4 btn btn-primary container-fluid"
            >
              Enviar datos
            </button>
          </div>
        </CForm>
      </div>
    </div>
  </div>
</template>


<script>
import { db, storage, uuid } from "@/main.js";
export default {
  name: "PagoCliente",
  data: function () {
    return {
      carga: false,
      text1: "no cargo",
      AuxCuenta: this.$store.state.Pedido,
      total: this.$store.state.cuenta,
      Cedula: this.$store.state.usuario.Cedula,
      NombreCliente: this.$store.state.usuario.Nombre,
      Correo: this.$store.state.usuario.Correo,
      selectedFile: null,
      ruta: "",
      UploadValue: 0,

      imgFacebook:
        "https://brandemia.org/sites/default/files/inline/images/facebook_logo_portada.jpg",
      imgInstagram:
        "https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg",
    };
  },
  methods: {
    Pagar() {
      if (this.ruta != "" || this.Monto > 0) {
        var fecha = new Date();
        var FechaActual =
          String(fecha.getDay()).padStart(2, "0") +
          "/" +
          String(fecha.getMonth() + 1).padStart(2, "0") +
          "/" +
          String(fecha.getFullYear());
        // console.log(FechaActual);
        db.collection("Pagos")
          .add({
            Cliente: this.NombreCliente,
            Cedula: this.Cedula,
            Monto: this.total,
            Estado: "Pendiente", //o realizado cuando se verifique
            Comprobante: this.ruta,
            Fecha: String(FechaActual),
            OrdenID: uuid(this.ruta, uuid.url),
          })
          .then((docRef) => {
            var auxID = docRef.id;
            console.log(docRef.id);
            var aux = db.collection("Pagos").doc(docRef.id);
            aux.get().then((doc) => {
              if (doc.exists) {
                //si existe el documento
                var i = 0;
                var pedido = [];
                for (i in this.AuxCuenta) {
                  //carga el pedido en un arreglo
                  pedido.push({
                    IntenID: this.AuxCuenta[i].Plato.PlatoId,
                    Cantidad: this.AuxCuenta[i].Cantidad,
                  });
                }
                var hora= new Date()
                var tiempo=String(hora.getHours()).padStart(0,2)+":"+String(hora.getMinutes()).padStart(0,2)
                db.collection("Ordenes") //se crea la solicitud
                  .doc(doc.data().OrdenID)
                  .set({
                    Pedido: pedido,
                    Cedula: this.Cedula,
                    Cliente :this.NombreCliente,
                    OrdenID: doc.data().OrdenID,
                    Hora: tiempo,
                    PagoID: auxID,
                    Estado: "Pendiente de pago", //Estados pendiente de pago/Completada/Rechazada/En Proceso
                  })
                  .then()
                  .catch((error) => {
                    console.log(error);
                    this.total = 0;
                  });
                  this.$router.push("/base/Comprar");
              } else {
                console.log("hay chamo");
              }
            });
          })
          .catch((error) => {
            alert("ha ocurrido un problema: " + error);
          });
      } else {
        if (this.ruta == "") {
          document.getElementById("inputGroupFile04").focus();
          alert("Es necesario subir la imagem");
        } else {
          alert("La Cuenta Esta vacia");
        }
      }
    },
    onfileselected(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile.name);
    },
    upload() {
      var metadata = {
        contentType: "image/jpeg",
      };
      const storageRef = storage
        .ref(`/Pagos/${this.selectedFile.name}`)
        .put(this.selectedFile, metadata);
      storageRef.on(
        "state_changed",
        (snapshot) => {
          this.carga=true
          let porcentaje =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.UploadValue = porcentaje;
          console.log("Upload is " + this.UploadValue + "% done");
        },
        (error) => {
          console.log("errores: ", error);
        },
        () => {
          // console.log("hola", this.ruta);
          this.porcentaje = 100;
           this.carga=false
          // Upload completed successfully, now we can get the download URL
          storageRef.snapshot.ref.getDownloadURL().then((lincksito) => {
            this.ruta = lincksito;
            console.log("la ruta es", this.ruta);
          });
        }
      );
    },
  },
  beforeDestroy() {

    var unsubscribe = db.collection("Pagos").onSnapshot(() => {
      // Respond to data
      // ...
    });
    var unsubscribe2 = db.collection("Ordenes").onSnapshot(() => {
      // Respond to data
      // ...
    });
    unsubscribe();
    unsubscribe2();
  },
};
</script>
<style >
.espacios {
  margin: 1vw !important;
}
.custom-radio {
  margin: 1%;
  height: 4vh;
  text-align: center;
  vertical-align: middle;
  width: 30vw;
  border-radius: 15px;
  background: linear-gradient(gold);
}
.custom-radio label {
  justify-content: center;
  vertical-align: middle !important;
  text-align: center;
}
.todalinea {
  display: flex;
  flex-direction: column;
  padding: auto;
}
.body {
  padding: 5%;
  border-radius: 15px;
  vertical-align: middle;
}
.link {
  text-align: center;
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-family: "Georgia", serif;
}
.facebook {
  width: 100px;
  height: 70px;
}
.instagram {
  width: 55px;
  height: 55px;
}
</style>