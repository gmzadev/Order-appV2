<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader class="center forma">
          <h2>
            <i class="cil-cash xl" />
          </h2>
          <h2>Pagos Pendientes</h2>
          <div class="justify-content-center d-flex col">
            <select
              class="custom-select justify-content-center texto center col-sm-3"
              id="filtro"
              v-model="Filtro"
              style="font-size: 1.1rem !important"
              @change="filtrar"
            >
              <option selected value="Pendiente">Pendientes</option>
              <option value="Aceptado">Aprobados</option>
              <option value="Rechazado">Rechazados</option>
            </select>
          </div>
        </CCardHeader>
        <hr class="rounded" />
        <div class="col">
          <CForm onkeydown="return (event.keyCode!=13);">
            <CInput
              class="barra"
              type="search"
              value=" "
              name=""
              placeholder=""
              size="lg"
              v-model="Barrita"
              @input="buscar"
            >
              <template #append-content>
                <CButton
                  color="dark"
                  @click="buscar"
                  variant="outline"
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
                  <option selected value="Cedula">Cedula</option>
                  <option value="Cliente">Cliente</option>
                  <option value="Fecha">Fecha</option>
                </select>
              </template>
            </CInput>
          </CForm>
        </div>
        <CCardBody>
          <div class="table-responsive tabla-p table-hover">
            <table class="table table-striped">
              <thead>
                <tr class="center">
                  <th>#</th>
                  <th>Cliente</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                  <th>Monto</th>
                  <th># Orden</th>
                  <th scope="col">Aceptar</th>
                  <th scope="col">Rechazar</th>
                </tr>
              </thead>
              <tbody :key="Reiniciar">
                <tr
                  v-for="(iten, index) in ListaPagos"
                  :key="index"
                  id="tabla"
                  class="center"
                >
                  <th scope="row">
                    <a @click="modal(iten)">{{ iten.Cedula }}</a>
                  </th>
                  <td>
                    <a @click="modal(iten)">{{ iten.Cliente }}</a>
                  </td>
                  <td>
                    <a @click="modal(iten)">{{ iten.Fecha }}</a>
                  </td>
                  <td>
                    <a @click="modal(iten)">{{ iten.Estado }}</a>
                  </td>
                  <td>
                    <a @click="modal(iten)">{{ iten.Monto }}</a>
                  </td>
                  <td>
                    <a @click="modal(iten)">{{ iten.OrdenID }}</a>
                  </td>
                  <td v-if="iten.Estado=='Pendiente'">
                    <CButton
                      @click="updateEstate(iten.OrdenID, 'Aceptada')"
                      variant="outline"
                      color="success"
                      flex
                      ><i class="fas fa-check"></i
                    ></CButton>
                  </td>
                  <td v-if="iten.Estado=='Pendiente'">
                    <CButton
                      @click="updateEstate(iten.OrdenID, 'Rechazada')"
                      variant="outline"
                      color="danger"
                      flex
                      ><i class="fas fa-trash"></i
                    ></CButton>
                  </td>

                  <!--- <td><i class="fas fa-check btn warnin"></i></td>-->
                </tr>
              </tbody>
            </table>
          </div>
        </CCardBody>
      </CCard>
    </CCol>

    <CModal
      class="center"
      title="Pago"
      color="warning"
      id="modal"
      fade
      size="lg"
      :show.sync="warningModal"
      :footer="warningModal"
      :backdrop="!warningModal"
    >
      <template>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader class="center">
                <CInput
                  type="Text"
                  :disabled="true"
                  class="texto col"
                  :value="this.visibleData.Cedula"
                >
                  <template #prepend-content>ID </template>
                </CInput>
                <CInput
                  type="Text"
                  :disabled="true"
                  class="texto col"
                  :value="this.visibleData.Cliente"
                >
                  <template #prepend-content>
                    <i class="fas fa-user"></i>
                  </template>
                </CInput>
                <CInput
                  type="Text"
                  :disabled="true"
                  class="texto col"
                  :value="visibleData.Monto"
                >
                  <template #prepend-content
                    ><i class="cil-cash"></i>
                  </template>
                </CInput>
                <h3>Comprobante</h3>
                <div>
                  <img
                    class="img-fluid"
                    :src="this.visibleData.Comprobante"
                    alt=""
                  />
                </div>
                
              </CCardHeader>
              <div v-if="this.visibleData.Estado=='Pendiente'" class="d-flex justify-content-around">
                  <div class="col-sm-3">
                    <button
                      @click="
                        updateEstate(this.visibleData.OrdenID, 'Rechazada')
                      "
                      id="BOTON"
                      class="btn btn-outline-success"
                      color="success"
                    >
                      <i class="fas fa-check"></i>
                    </button>
                  </div>

                  <div class="col-sm-3">
                    <button
                      @click="
                        updateEstate(this.visibleData.OrdenID, 'Rechazada')
                      "
                      class="btn btn-outline-danger"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              <CCardBody> </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </template>

      <div slot="footer"></div>
    </CModal>
  </CRow>
</template>

<script>
var Pagos = [];

import { db } from "@/main.js";
export default {
  name: "Users",
  data() {
    return {
      Barrita: "",
      Reiniciar: 1,
      Filtro: "Pendiente",
      seleccionado: "Cedula",
      ListaPagos: [],
      idSujeto: 0,
      visibleData: [],
      warningModal: false,
      activePage: 1,
    };
  },

  methods: {
    buscar() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.ListaPagos = Pagos;
      var aux = [];
      var i = 0;
      if (this.seleccionado == "Cedula") {
        for (i in Pagos) {
          if (
            Pagos[i].Cedula.includes(this.Barrita) &&
            this.Filtro == Pagos[i].Estado
          ) {
            //console.log("entro: ",c)
            aux.push(Pagos[i]);
          }
        }
      } else if (this.seleccionado == "Cliente") {
        for (i = 0; i < Pagos.length; i++) {
          if (
            Pagos[i].Cliente.toUpperCase().includes(
              this.Barrita.toUpperCase()
            ) &&
            Pagos[i].Estado == this.Filtro
          ) {
            console.log(this.Barra);
            aux.push(Pagos[i]);
          }
        }
      } else {
        for (i = 0; i < Pagos.length; i++) {
          if (
            Pagos[i].Fecha.includes(this.Barrita) &&
            Pagos[i].Estado == this.Filtro
          ) {
            aux.push(Pagos[i]);
          }
        }
      }
      this.ListaPagos = aux;
    },
    filtrar() {
      //this.ListaPagos = Pagos;
      var aux = []; //arreglo auxiliar para la lista de pagos
      var i = 0;
      for (i = 0; i < Pagos.length; i++) {
        if (Pagos[i].Estado == this.Filtro) {
          aux.push(Pagos[i]);
        }
      }
      //delete $data.ListaPagos

      this.ListaPagos = aux;
      console.log(this.ListaPagos.length);
    },
    updateEstate(ind, mode) {
      console.log();
      var index = String(ind);
      var auxOrden = db.collection("Ordenes").doc(index); //REFERENCIA AL AL ELMENTO  DE ORDEN CON ID INDEX
      var AuxPagoID = "";
      auxOrden
        .get()
        .then((doc) => {
          if (doc.exists) {
            Pagos = [];
            AuxPagoID = doc.data().PagoID; //ASICNACION DE UN ID PARA IM ELEMENTO
            var AuxPago = db.collection("Pagos").doc(AuxPagoID); //REFERENCIA AL AL ELEMENTO  DE PAGO CON ID AUXPAGOID

            if (mode == "Rechazada") {
              mode = "Rechazado";
            } else {
              mode = "Aceptado";
            }
            AuxPago.update({ Estado: mode });
            if (mode == "Rechazado") {
              mode = "Rechazada";
            } else {
              mode = "En Proceso";
            }
            auxOrden.update({ Estado: mode });
            this.warningModal = false;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
          this.filtrar();
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
    rerender() {
      //carga  y renderiza el arreglo de inventario
      db.collection("Pagos").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var iten = {
            Cedula: doc.data().Cedula,
            Cliente: doc.data().Cliente,
            Comprobante: doc.data().Comprobante,
            Estado: doc.data().Estado,
            Fecha: doc.data().Fecha,
            Monto: doc.data().Monto,
            OrdenID: doc.data().OrdenID,
          };
          if (iten.Estado == this.Filtro) {
            this.ListaPagos.push(iten);
          }
          Pagos.push(iten);
        });
      });
      //carga el y renderiza arreglo de platos y urls
    },
    modal(index) {
      this.warningModal = true;
      this.visibleData = index;
      this.$store.commit("set", ["auxid", index.OrdenID]);
    },
    getBadge(status) {
      switch (status) {
        case "Rechazado":
          return "danger";
        case "Pediente":
          return "warning";
        default:
          "Perdiente";
      }
    },
  },
  computed: {},

  mounted() {
    this.rerender();
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
<style scoped>
.img-fluid:hover {
  transform: scale(2.2);
  transition: 1.1s;

  margin-top: 15vh;
}

.tabla-p {
  height: 330px;
}
.modal {
  transition: 1.5s !important;
}
</style>
