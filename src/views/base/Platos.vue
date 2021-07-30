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
              <select class="form-select"  v-model="Tipo">
                <option value="Selecciona una opcion">Selecciona una opcion</option>
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
                <CButton variant="outline" color="success" flex
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
        color="warning"
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
                  <th scope="col">Selecionar</th>
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
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                  <td>
                    <input type="number" value="" style="width: 3rem" />
                  </td>
                  <!--- <td><i class="fas fa-check btn warnin"></i></td>-->
                </tr>
              </tbody>
            </table>
          </div>
        </template>

        <div slot="footer" class="d-flex justify-content-between">
          <CButton color="danger" variant="outline" style="margin-right: 26vw"
            >Rechazar</CButton
          >
          <CButton color="success " variant="outline" style="margin-right: 0vh"
            >Aceptar</CButton
          >
        </div>
      </CModal>
    </div>
    <CAlert color="warning" v-if="error" style="margin-top: 1rem">
      {{ error }}
    </CAlert>
  </CRow>
</template>

<script>
import { db } from "@/main.js";
var inventario = [];
var platos = [];
export default {
  name: "Platos",
  data() {
    return {
      Tipo:"Selecciona una opcion",
      error: "",
      precio: "",
      menu: platos,
      intens: inventario,
      warningModal: false,
      nombre: "",
      barra: "",
      url: "",
      Descripcion: "",
    };
  },
  methods: {
    agregarIten() {
      this.error = "";
      if (this.precio && this.nombre && this.url && this.Descripcion) {
        db.collection("Inventario")
          .doc(this.itenID.valueOf())
          .set({
            itenID: this.itenID,
            Nombre: this.nombre,
            Existencia: this.existencia,
            Fecha: this.fecha,
          })
          .then(() => {
            inventario = [];
            this.intens = [];
            this.rerender();
            this.intens = inventario;
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
            nombre: doc.data().Nombre,
            url: doc.data().Url,
            descripcion: doc.data().Descripcion,
            precio: doc.data().Precio,
            ingredientes: doc.data().Ingredientes,
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
