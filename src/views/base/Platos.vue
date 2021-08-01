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
          <div class="card-group">
            <template  >
              <div class="card" v-for=" n in 5" :key="n">
                <img class="card-img-top" src="..." alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    {{n}}
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </template>
          </div>
          <div>
            <CForm>
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
              <CInput
                placeholder="Link de Firebase"
                autocomplete="Link de Firebase"
                prepend="url"
                v-model="url"
              />
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

              <div class="d-flex justify-content-between container-fluid">
                <CButton variant="outline" disabled color="warning" flex
                  >Deshabilitar Plato</CButton
                >
                <CButton variant="outline" disabled color="danger" flex
                  >Eliminar Plato</CButton
                >
                <CButton
                  variant="outline"
                  color="success"
                  flex
                  @click="agregarIten"
                  >Crear/Modificar
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
        title="Pago"
        color="success"
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
    <CAlert color="warning" v-if="error" style="margin-top: 1rem" closeButton>
      {{ error }}
    </CAlert>
  </CRow>
</template>

<script>
import { db, storage } from "@/main.js";
var inventario = [];
var platos = [];
var Urls = [];
export default {
  name: "Platos",
  data() {
    return {
      cantidad: [],
      seleccionado: [],
      ingredientes: "",
      urls: [],
      Tipo: "Selecciona una opcion",
      error: "",
      precio: "",
      menu: platos,
      intens: inventario,
      warningModal: false,
      nombre: "",
      barra: "",
      url: "",
      descripcion: "",
    };
  },
  methods: {
    getImg(url) {
      var gsReference = storage.refFromURL(url);
      gsReference
        .getDownloadURL()
        .then((e) => this.urls.push(e))
        .catch((err) => alert(err));
    },
    arrayIngredientes() {
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

    llenar() {
      this.ingredientes = "";
      this.error = "";
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
      this.error = "";
      if (
        this.ingredientes &&
        this.precio &&
        this.nombre &&
        this.url &&
        this.descripcion &&
        this.Tipo != "Selecciona una opcion"
      ) {
        db.collection("Platos")
          .add({
            Ingredientes: this.arrayIngredientes(),
            Precio: this.precio,
            Nombre: this.nombre,
            Url: this.url,
            Descripcion: this.descripcion,
            Tipo: this.Tipo,
          })
          .then(() => {
            inventario = [];
            this.intens = [];
            this.menu = [];
            this.rerender();
            (this.cantidad = []),
              (this.seleccionado = []),
              (this.ingredientes = ""),
              (this.precio = ""),
              (this.nombre = ""),
              (this.barra = ""),
              (this.url = ""),
              (this.descripcion = ""),
              (this.intens = inventario);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      } else {
        this.error = "todos los campos son requeridos";
      }
    },
    rerender() {
      //carga el arreglo de inventario
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
      //carga el arreglo de platos
      db.collection("Platos").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var iten = {
            Ingredientes: doc.data().Ingredientes,
            Precio: doc.data().Precio,
            Nombre: doc.data().Nombre,
            Url: doc.data().Url,
            Descripcion: doc.data().Descripcion,
            Tipo: doc.data().Tipo,
          };
          platos.push(iten);
          Urls.push(this.getImg(iten.Url));
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
