<template>
  <CRow id="inventario">
    <CCol>
      <CCard>
        <CCardHeader class="forma center forma">
          <h2>
            <i class="cil-inbox px-1" />
          </h2>
          <h2 class="">Inventario</h2>

          <div class="card-header-actions"></div>
        </CCardHeader>
        <hr class="rounded" />
        <CCardBody class="container-fluid">
          <div>
            <CForm onkeydown="return (event.keyCode!=13);">
              <CInput
                class="barra"
                type="search"
                name=""
                value=""
                placeholder=""
                size="lg"
                v-model="Barra"
                
              >
                <template #append-content>
                  <CButton
                    color="dark"
                    variant="outline"
                    type="submit"
                    @keypress="buscar"
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
                <template #prepend-content class="">
                  <select
                    v-model="seleccionado"
                    class="forma-div center custom-select texto"
                    style="height: 25px !important"
                  >
                    <option selected value="Codigo">Codigo</option>
                    <option value="Nombre">Nombre</option>
                    <option value="Fecha">Fecha</option>
                  </select>
                </template>
              </CInput>
            </CForm>
          </div>
          <div class="table-responsive tabla-i">
            <table class="table table-striped">
              <thead>
                <tr class="center">
                  <th scope="col">Codigo de barra</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Existencia</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Fecha de Vencimiento</th>
                  <th scope="col">Modificar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(iten, index) in intens"
                  :key="index"
                  id="tabla"
                  class="center"
                >
                  <th scope="row">{{ iten.itenID }}</th>
                  <td>{{ iten.nombre }}</td>
                  <td>{{ iten.existencia }}</td>
                  <td>{{ iten.Tipo }}</td>
                  <td>{{ iten.fecha }}</td>
                  <td>
                    <CButton
                      variant="outline"
                      color="warning"
                      flex
                      @click="modificar(index)"
                      ><i class="fas fa-edit"></i
                    ></CButton>
                  </td>
                  <td>
                    <CButton
                      class="btn"
                      variant="outline"
                      color="danger"
                      @click="eliminar(index)"
                      ><i class="fas fa-trash"></i
                    ></CButton>
                  </td>

                  <!--- <td><i class="fas fa-check btn warnin"></i></td>-->
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <CForm @submit.prevent="">
              <CInput
                placeholder="ID"
                autocomplete="ID"
                type="number"
                v-model="itenID"
                :disabled="flagProductoSelecionado"
              >
                <template #prepend-content>
                  <CIcon name="cil-fingerprint" />
                </template>
              </CInput>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1"
                    ><i class="cil-dinner"></i
                  ></span>
                </div>
                <select
                  class="custom-select"
                  v-model="Tipo"
                  @change="aplicafecha()"
                >
                  <option value="Selecciona un tipo">Selecciona un tipo</option>
                  <option value="Consumible">Consumible</option>
                  <option value="Ingrediente">Ingrediente</option>
                </select>
              </div>
              <CInput
                placeholder="Nombre del ingrediente o consumible"
                autocomplete="Nombre del ingrediente o consumible"
                v-model="nombre"
              >
                <template #prepend-content><CIcon name="cil-user" /></template>
              </CInput>
              <CInput
                placeholder="Existencia"
                autocomplete="Existencia"
                type="number"
                v-model="existencia"
              >
                <template #prepend-content><CIcon name="cil-chart" /></template>
              </CInput>
              <CInput
                placeholder="Fecha de vencimiento"
                autocomplete="Fecha de vencimiento"
                type="date"
                v-model="fecha"
                :disabled="this.Estado"
              >
                <template #prepend-content
                  ><CIcon name="cil-calendar"
                /></template>
              </CInput>
              <div class="d-flex justify-content-center container-fluid">
                <CButton
                  type="submit"
                  variant="outline"
                  color="dark"
                  flex
                  class="col-md-"
                  style="margin-right: 1%; "
                  @click="Limpiar()"
                  >Limpiar Campos
                </CButton>
                <CButton
                  type="submit"
                  variant="outline"
                  color="success"
                  flex
                  style="margin-left: 1%;  "
                  class="col-md-"
                  @click="agregarIten()"
                  >Editar
                </CButton>
              </div>
            </CForm>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CAlert color="warning" v-if="error" style="margin-top: 1rem" closeButton>
      {{ error }}
    </CAlert>
  </CRow>
</template>

<script>
import { db } from "@/main.js";
var inventario = [];
export default {
  name: "Inventario",
  data() {
    return {
      Estado: true,
      seleccionado: "Codigo",
      Tipo: "Selecciona un tipo",
      itenID: "",
      nombre: "",
      existencia: "",
      fecha: "",
      intens: inventario,
      error: "",
      Barra: "",
      flagProductoSelecionado:false,
    };
  },

  methods: {
    Limpiar() {
      this.flagProductoSelecionado=false;
      this.error=""
      this.itenID = "";
      this.Tipo = "Selecciona un tipo";
      this.nombre = "";
      this.existencia = "";
      this.fecha = "";
      this.Estado = true;
    },
    modificar(i) {
      this.flagProductoSelecionado=true;
      this.itenID = this.intens[i].itenID;
      this.nombre = this.intens[i].nombre;
      this.existencia = this.intens[i].existencia;
      this.fecha = this.intens[i].fecha;
      this.Tipo = this.intens[i].Tipo;
      if (this.intens[i].fecha) {
        this.Estado = false;
      } else {
        this.Estado = true;
      }
    },
    eliminar(index) {
          inventario = [];
      db.collection("Inventario")
        .doc(this.intens[index].itenID)
        .delete()
        .then((
          
        ) => {this.intens=inventario
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },

    rerender() {
      db.collection("Inventario").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var iten = {
            nombre: doc.data().Nombre,
            itenID: doc.data().itenID,
            existencia: doc.data().Existencia,
            Tipo: doc.data().Tipo,
            fecha: doc.data().Fecha,
          };
          inventario.push(iten);
        });
      });
    },
    agregarIten() {
      this.error = "";
      var auxfecha = "";
      this.flagProductoSelecionado=false;
      if (this.Tipo == "Ingrediente") {
        auxfecha = this.fecha;
      } else {
        auxfecha = "";
      }
      if (
        this.existencia &&
        this.nombre &&
        (auxfecha || this.Tipo == "Consumible") &&
        this.Tipo != "Selecciona un tipo"
      ) {
        inventario = [];
        db.collection("Inventario")
          .doc(this.itenID.valueOf())
          .set({
            itenID: this.itenID,
            Nombre: this.nombre,
            Tipo: this.Tipo,
            Existencia: this.existencia,
            Fecha: auxfecha,
          })
          .then(() => {
            this.itenID = "";
            this.Tipo = "Selecciona un tipo";
            this.nombre = "";
            this.existencia = "";
            this.fecha = "";
            this.Estado = true;
            this.intens = inventario;
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      } else {
        this.error = "todos los campos son requeridos";
      }
    },
    aplicafecha() {
      if (this.Tipo == "Ingrediente") {
        this.Estado = false;
        console.log("hola");
      } else {
        this.Estado = true;
      }
    },
  },
  computed: {
    buscar() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.intens = inventario;
      var aux = [];
      var i = 0;
      try {
        if (this.seleccionado == "Codigo") {
          for (i = 0; i < this.intens.length; i++) {
            if (this.intens[i].itenID.includes(this.Barra)) {
              aux.push(this.intens[i]);
            }
          }
        } else if (this.seleccionado == "Nombre") {
          for (i = 0; i < this.intens.length; i++) {
            if (this.intens[i].nombre.toUpperCase().includes(this.Barra.toUpperCase())) {
              aux.push(this.intens[i]);
            }
          }
        } else {
          for (i = 0; i < this.intens.length; i++) {
            if (this.intens[i].fecha.includes(this.Barra)) {
              aux.push(this.intens[i]);
            }
          }
        }
      } catch (error) {
        //console.log(error);
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return (this.intens = aux);
    },

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
    unsubscribe();
  },
  beforeMount() {},
};
</script>

<style scoped>
/*#inventario {
  margin-top: -1rem;
}*/
.tabla-i {
  height: 250px !important;
  margin-bottom: 25px;
}
.barra {
  padding: 1%;
}
</style>
