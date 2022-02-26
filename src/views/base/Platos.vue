<template>
  <CRow>
    <CCol col>
      <CCard>
        <CCardHeader class="center forma">
          <h2>
            <i class="cil-burger" />
          </h2>
          <h2>Platos</h2>
          <div class="card-header-actions"></div>
        </CCardHeader>
        <hr class="rounded" />
        <CCardBody class="container-fluid">
          <div>
            <CForm @submit.prevent="">
              <CInput
                class="barra"
                type="search"
                name=""
                value=""
                placeholder=""
                size="lg"
                v-model="barra"
                @keypress="busqueda"
              >
                <template #append-content>
                  <CButton
                    color="dark"
                    variant="outline"
                    type="submit"
                    @click.prevent="search"
                    style="
                      height: 25px !important ;
                      width: 10px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    "
                  >
                    <i class="fas fa-search fa-xs"></i>
                  </CButton>
                </template>
              </CInput>
            </CForm>
          </div>

          <template>
            <div class="card-group">
              <div v-for="(plato, index) in menu" :key="index" class="col-md-3">
                <CCard flex :aria-disabled="plato.Estado">
                  <CCardHeader class="center lato-titulo">
                    {{ plato.Nombre }}
                  </CCardHeader>
                  <CCardBody>
                    <img :src="plato.Url" alt="" class="img-fluid" />
                  </CCardBody>
                  <CCardFooter>
                    <div class="borde">
                      {{ plato.Descripcion }}
                    </div>
                    <hr />
                  </CCardFooter>
                  <div
                    class="col-auto d-flex justify-content-between pb-15 oculto"
                  >
                    <CButton
                      class="col-3 p-2"
                      variant="outline"
                      color="danger"
                      @click="erase(plato.Nombre)"
                      ><i class="fas fa-trash" />
                    </CButton>
                    <CButton
                      v-if="plato.Estado"
                      class="col-3 p-2"
                      variant="outline"
                      color="info"
                      @click="updatemode(plato.Nombre, plato.Estado)"
                      >On
                    </CButton>
                    <CButton
                      v-else
                      class="col-3 p-2"
                      variant="outline"
                      color="dark"
                      @click="updatemode(plato.Nombre, plato.Estado)"
                      >Off
                    </CButton>
                    <CButton
                      class="col-3 p-2"
                      variant="outline"
                      color="warning"
                      @click="modificar(index)"
                      ><i class="fas fa-edit"
                    /></CButton>
                  </div>
                </CCard>
              </div>
            </div>
          </template>

          <div>
            <CForm @submit.prevent="agregarIten">
              <CInput
                placeholder="Nombre del plato"
                autocomplete="Nombre deL plato"
                v-model="nombre"
              >
                <template #prepend-content><CIcon name="cil-fire" /></template>
              </CInput>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1"
                    ><i class="cil-dinner"></i
                  ></span>
                </div>
                <select class="form-select" v-model="Tipo">
                  <option value="Selecciona una opcion">
                    Selecciona una opcion
                  </option>
                  <option value="Snack">Snack</option>
                  <option value="Plato Fuerte">Plato Fuerte</option>
                  <option value="Especial del dia">Especial del dia</option>
                  <option value="Extra">Extra</option>
                </select>
              </div>
              <div class="input-group mb-3 texto">
                <input
                  type="file"
                  class="form-control"
                  id="inputGroupFile01"
                  accept="image/*"
                  @change="onfileselected"
                />
                <button
                  class="btn btn-secondary fas fa-image texto"
                  type="button"
                  id="button-addon2"
                  @click="upload"
                  :disabled="selectedFile == null"
                >
                  Subir
                </button>
              </div>
              <CInput
                placeholder="descripcion"
                autocomplete="descripcion"
                type="text"
                v-model="descripcion"
              >
                <template #prepend-content
                  ><CIcon name="cil-fastfood"
                /></template>
              </CInput>
              <CInput
                placeholder="Precio"
                type="number"
                autocomplete=""
                v-model="precio"
              >
                <template #prepend-content><CIcon name="cil-cash" /></template>
              </CInput>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1"
                    ><i class="cil-dinner"></i
                  ></span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ingredientes separados por coma"
                  aria-label="Ingredientes"
                  aria-describedby="basic-addon1"
                  v-model="ingredientes"
                  @keydown.prevent=""
                  @click="modal()"
                />
              </div>

              <div class="d-flex justify-content-center container-fluid">
                <CButton
                  type="submit"
                  variant="outline"
                  color="dark"
                  flex
                  class="col-md-"
                  style="margin-right: 1%"
                  @click.prevent="Limpiar"
                  >Limpiar Campos
                </CButton>
                <CButton
                  class="col-md-"
                  variant="outline"
                  color="success"
                  flex
                  style="margin-left: 1%"
                  @click.prevent="agregarIten"
                  >Editar
                </CButton>
              </div>
            </CForm>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
    <div class="center" style="z-index: 3">
      <CModal
        class="center"
        title="Ingredientes"
        color="success"
        style="text-align: center"
        size="lg"
        :show.sync="warningModal"
        :footer="!warningModal"
        :backdrop="!warningModal"
      >
        <template>
          <div class="table-responsive tabla-i">
            <table class="table table-striped">
              <thead>
                <tr class="center">
                  <th scope="col">Nombre</th>
                  <th scope="col">Existencia</th>
                  <th scope="col">Seleccionar</th>
                  <th scope="col">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(iten, index) in intens"
                  :key="index"
                  id="tabla"
                  class="center"
                >
                  <td>{{ iten.nombre }}</td>
                  <!--tabla de ingredientes -->
                  <td>{{ iten.existencia }}</td>
                  <td>
                    <input
                      class=""
                      type="checkbox"
                      v-model="seleccionado[index]"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      placeholder="0"
                      style="width: 3rem"
                      min="0"
                      :disabled="!seleccionado[index]"
                      v-model="cantidad[index]"
                    />
                  </td>
                  <!--- <td><i class="fas fa-check btn warnin"></i></td>-->
                </tr>
              </tbody>
            </table>
          </div>
        </template>

        <div slot="footer" class="d-flex justify-content-between">
          <CButton
            @click="llenar()"
            color="success "
            variant="outline"
            style="margin-right: 14vw"
            >Incluir Ingredientes</CButton
          >
        </div>
      </CModal>
    </div>
    <CAlert color="warning" v-if="error" style="margin-top: 1rem" @click='() => { error = "" ; console.log(error)}' closeButton >
      {{ error }}
    </CAlert>
  </CRow>
</template>

<script>
//impor;
import "regenerator-runtime/runtime";
import { db, storage } from "@/main.js";
var inventario = [];
var platos = [];
export default {
  name: "Platos",

  data() {
    return {
      Estado: false,
      mode: false,
      ref_ruta: "",
      cantidad: [], //aux que mide la cantidad de un ingrediente en el modal
      seleccionado: [], //aux de bolean que guarda la seleccion de un ingrediente
      ingredientes: "",
      urls: [], //aux de la url de las imagenes
      Tipo: "Selecciona una opcion", //tipo de plato
      error: "", //aux para errores
      precio: "", //precio de un plato
      menu: platos, //menu de platos
      seleccionar: false,
      intens: inventario, //aux para renderizar inventario
      warningModal: false, //aux que especifica el el estado de visivilidad de un modal
      nombre: "",
      barra: "",
      url: "",
      ruta: "",
      descripcion: "",
      UploadValue: 0,
      selectedFile: null,
      picture: null,
      /**plato: [ esto es para una posible refactorizacion usar este 
       * objeto como un plato dentro del menu `plato in menu`
       * {
       *   Estado: false,
       *   cantidad: [],
       *   seleccionado: [],
       *   ingredientes: "",
       *   Tipo: "Selecciona una opcion", //tipo de plato
       *   precio: "",
       *   nombre: "",
       *   url: "",
       *   descripcion: "",
       * },
      ],**/
    };
  },
  methods: {
    /**upload() {
      console.log("hola");
      let imgRef = this.selectedFile;
      const uploadImageFetch = async (imgRef) => {
        console.log("hola 2");
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function () {
            resolve(xhr.response);
          };
          xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError("Network request failed"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", imgRef, true);
          xhr.send(null);
        });
        const imageNameBefore = imgRef.split("/");
        const imageName = imageNameBefore[imageNameBefore.length - 1];

        const ref = storage.ref().child(`imagenes menu/${imageName}`);
        const snapshot = await ref.put(blob);
        blob.close();
        return await snapshot.ref.getDownloadURL();
      };
    },****/
    upload() {
      var metadata = {
        contentType: "image/jpeg",
      };
      const storageRef = storage
        .ref(`/imagenes menu/${this.selectedFile.name}`)
        .put(this.selectedFile, metadata);
      storageRef.on(
        "state_changed",
        (snapshot) => {
          let porcentaje =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.UploadValue = porcentaje;
          console.log("Upload is " + this.UploadValue + "% done");
        },
        (error) => {
          console.log("errores: ", error);
        },
        () => {
          console.log("hola", this.ruta);
          this.porcentaje = 100;
          // Upload completed successfully, now we can get the download URL
          storageRef.snapshot.ref.getDownloadURL().then((lincksito) => {
            this.ruta = lincksito;
            console.log("la ruta es", this.ruta);
          });
        }
      );
    },

    onfileselected(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile.name);
    },
    erase(index) {
      console.log("hola");
      db.collection("Platos")
        .doc(index)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          this.inventario = [];
          this.platos = [];
          this.Urls = [];
          this.intens = [];
          this.menu = [];
          this.cantidad = [];
          this.seleccionado = [];
          this.seleccionar = false;
          this.rerender();
          this.intens = inventario;
          this.menu = platos;
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    Limpiar() {
      this.cantidad = [];
      this.seleccionado = [];
      this.ingredientes = "";
      this.precio = "";
      this.nombre = "";
      this.barra = "";
      this.url = "";
      this.Tipo = "Selecciona una opcion";
      this.descripcion = "";
      this.ruta = "";
      this.seleccionar = false;
    },
    modificar(index) {
      //modifica un ingrediente en el array de platos del inventario luego guarda datos en firebase
      this.seleccionar = true;

      //llena los campos para ser modificados
      var i = 0;
      var j = 0;
      (this.nombre = platos[index].Nombre),
        (this.Tipo = platos[index].Tipo),
        (this.precio = platos[index].Precio);
      this.url = platos[index].Url;
      (this.descripcion = platos[index].Descripcion),
        (this.cantidad = []),
        (this.seleccionado = []);
      this.ingredientes = "";
      for (i = 0; i < platos[index].Ingredientes.length; i++) {
        //ciclo que se mueve en el objeto ingredientes
        console.log(platos[index].Nombre);

        var flag = false;
        for (j = 0; j < inventario.length; j++) {
          //ciclo quwe busca un ingrediente en el inventario
          if (inventario[j].nombre == platos[index].Ingredientes[i].nombre) {
            flag = true;
            break;
          } else {
            continue;
          }
        }
        if (flag) {
          //si existe lo guarda
          this.seleccionado.push(true);
          this.cantidad.push(platos[index].Ingredientes[i].cantidad);
          this.ingredientes =
            platos[index].Ingredientes[i].nombre + " , " + this.ingredientes;
        } else {
          //si no lo crea
          this.seleccionado.push(false);
          this.cantidad.push("0");
        }
      }
    },
   /* getImg(url) {
      var gsReference = storage.refFromURL(url);
      gsReference
        .getDownloadURL()
        .then((e) => this.urls.push(e))
        .catch((err) => alert(err));
    },*/
    arrayIngredientes() {
      //metodo que valida los ingredientes agregados,
      //porsteriormete devuelve el arreglo de ingredientes de un plato
      var aux = [];
      var i = 0;
      for (i = 0; i < this.seleccionado.length; i++) {
        if (
          this.seleccionado[i] == undefined ||
          this.cantidad[i] == undefined
        ) {
          //
        } else if (
          this.seleccionado[i] == true &&
          this.cantidad[i] != "" &&
          this.cantidad[i] != "0"
        ) {
          var aux2 = {
            nombre: this.intens[i].nombre,
            cantidad: this.cantidad[i],
          };
          aux.push(aux2);
        } else {
          //
        }
      }
      return aux;
    },
    updatemode(id, mode) {
      //cambio de modo si esta on o off, es decir si el acticulo esta disponible para el menu si o no
      console.log("cambio");
      mode = !mode;
      var palabra = "";
      var aux = db.collection("Platos").doc(id);
      aux
        .update({ Estado: mode })
        .then((e) => {
          if (mode) {
            palabra = "activado";
          } else {
            palabra = "desactivado";
          }
          console.log(" el estado del articulo " + id + " es " + palabra);
          console.log(e);
          inventario = [];
          platos = [];
          this.intens = [];
          this.menu = [];
          this.cantidad = [];
          this.seleccionado = [];
          this.ingredientes = "";
          this.precio = "";
          this.nombre = "";
          this.barra = "";
          this.url = "";
          this.Tipo = "Selecciona una opcion";
          this.descripcion = "";
          this.rerender();
          this.intens = inventario;
          this.menu = platos;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    llenar() {
      //metodo que se encarga de renderizar los ingredientes en la barra
      this.ingredientes = "";
      this.error = " ";
      /*if (this.seleccionado.indexOf(iten) > -1) {
        console.log("estoy aqui");
        this.seleccionado.splice(this.seleccionado.indexOf(iten), 1);
        this.cantidad.splice(this.seleccionado.indexOf(iten), 1);
      } else {
        this.seleccionado.push(iten);
      }*/
      var i = 0;
      this.seleccionado.length;
      for (i = 0; i < this.seleccionado.length; i++) {
        if (
          this.seleccionado[i] == undefined ||
          this.cantidad[i] == undefined
        ) {
          this.error = "las cantidades no pueden estar vacias";
        } else if (
          this.seleccionado[i] == true &&
          this.cantidad[i] != "" &&
          this.cantidad[i] != "0"
        ) {
          this.ingredientes = this.intens[i].nombre + " , " + this.ingredientes;
        } else {
          this.error = "las cantidades no pueden ser igual a cero";
        }
      }
      this.warningModal = false;
    },
    agregarIten() {
      //metodo que agrega un plato al menu
      this.error = "";
      if (this.seleccionar){
        if (this.ruta==""){
          this.ruta=this.url
        }
      }
      console.log("hola");
      if (
        this.ingredientes &&
        this.precio &&
        this.nombre &&
        (this.ruta||this.url) &&
        this.descripcion &&
        this.Tipo != "Selecciona una opcion"
      ) {
        db.collection("Platos")
          .doc(this.nombre)
          .set({
            Nombre: this.nombre,
            Ingredientes: this.arrayIngredientes(),
            Estado: this.mode,
            Precio: this.precio,
            Url: this.ruta,
            Descripcion: this.descripcion,
            Tipo: this.Tipo,
          })
          .then(() => {
            inventario = [];
            platos = [];
            this.intens = [];
            this.menu = [];
            this.cantidad = [];
            this.seleccionado = [];
            this.ingredientes = "";
            this.precio = "";
            this.nombre = "";
            this.barra = "";
            this.url = "";
            this.Tipo = "Selecciona una opcion";
            this.descripcion = "";

            this.rerender();
            this.intens = inventario;
            this.menu = platos;
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      } else {
        let tipo_error="";
        if (this.ingredientes.length==0){
         
          tipo_error=" faltan ingredientes, "
        }
        if (this.precio==0){
          tipo_error=tipo_error+"falta el precio, "
         
        }
        if (this.nombre==""){
          tipo_error=tipo_error+"falta el nombre, "

        }
        if (this.ruta==""){
          tipo_error=tipo_error+"la imagen no ha sido subida, "
        }
        if (this.descripcion==""){
          tipo_error=tipo_error+"falta una descripcion, "
        }
         if (this.Tipo=="Selecciona una opcion"){
          tipo_error=tipo_error+"seleccione el tipo de plato, "
        }
        this.error = "todos los campos son requeridos: "+ tipo_error;
      }
      this.seleccionar = false;
    },
    rerender() {
      //carga  y renderiza el arreglo de inventario

      db.collection("Inventario").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var iten = {
            nombre: doc.data().Nombre,
            itenID: doc.data().itenID,
            existencia: doc.data().Existencia,
            fecha: doc.data().Fecha,
          };
          inventario.push(iten);
        });
      });
      //carga el y renderiza arreglo de platos y urls
      db.collection("Platos").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var iten = {
            Ingredientes: doc.data().Ingredientes,
            Estado: doc.data().Estado,
            Precio: doc.data().Precio,
            Nombre: doc.data().Nombre,
            Url: doc.data().Url,
            Descripcion: doc.data().Descripcion,
            Tipo: doc.data().Tipo,
          };
          platos.push(iten);
        });
      });
    },

    modal() {
      this.warningModal = true;
    },
    busqueda() {},
  },
  mounted() {
    this.rerender();
  },
  beforeDestroy() {
    inventario = [];
    platos = [];
    var unsubscribe = db.collection("Inventario").onSnapshot(() => {
      // Respond to data
      // ...
    });
    var unsubscribe2 = db.collection("Platos").onSnapshot(() => {
      // Respond to data
      // ...
    });
    unsubscribe();
    unsubscribe2();
  },
  computeds: {},
};
</script>

<style>
.barra {
  padding: 1%;
}
.tabla-i {
  height: 250px !important;
  margin-bottom: 25px;
}
</style>
