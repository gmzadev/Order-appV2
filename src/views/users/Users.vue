<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader class="center forma">
          <h2>
            <i class="cil-cash xl" />
          </h2>
          <h2>Pagos Pendientes</h2>
        </CCardHeader>
        <hr class="rounded" />
        <CCardBody>
          <div class="table-responsive tabla-p">
            <table class="table table-striped">
              <thead>
                <tr class="center">
                  <th>#</th>
                  <th>Cliente</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                  <th>Monto</th>
                  <th># Orden </th>
                  <th scope="col">Aceptar</th>
                  <th scope="col">Rechazar</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(iten, index) in ListaPagos"
                  :key="index"
                  id="tabla"
                  class="center"
                >
                  <th scope="row">
                    <a @click="modal(index)">{{ iten.Cedula }}</a>
                  </th>
                  <td>
                    <a @click="modal(index)">{{ iten.Cliente }}</a>
                  </td>
                  <td>
                    <a @click="modal(index)">{{ iten.Fecha }}</a>
                  </td>
                  <td>
                    <a @click="modal(index)">{{ iten.Estado }}</a>
                  </td>
                  <td>
                    <a @click="modal(index)">{{ iten.Monto }}</a>
                  </td>
                  <td>
                    <a @click="modal(index)">{{ iten.OrdenID }}</a>
                  </td>
                  <td>
                    <CButton  @click="erase(iten.OrdenID)" variant="outline" color="success" flex 
                      ><i class="fas fa-check"></i
                    ></CButton>
                  </td>
                  <td>
                    <CButton variant="outline" color="danger" flex
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
    <div style="z-index: -0 !important">
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
          <CRow>
            <CCol>
              <CCard>
                <CCardHeader class="center">
                  <p>A nombre de: {{}}</p>
                  Cedula del Cliente: {{}}
                </CCardHeader>
                <CCardBody> </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </template>

        <div slot="footer" class="d-flex justify-content-between">
         
        </div>
      </CModal>
    </div>
  </CRow>
</template>

<script>
var Pagos = [];

import { db } from "@/main.js";
export default {
  name: "Users",
  data() {
    return {
      ListaPagos: Pagos,
      idSujeto: 0,
      visibleData: {},
      warningModal: false,
      activePage: 1,
    };
  },

  methods: {
    erase(index) {
      db.collection("Platos")
        .doc(index)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
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
            OrdenID: doc.data().OrdenID
          };
          Pagos.push(iten);
        });
      });
      //carga el y renderiza arreglo de platos y urls
    },
    modal(index) {
      (this.warningModal = true), (this.idSujeto = index);
      this.visibleData = this.items[index];
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
    Pagos = [];
    var unsubscribe = db.collection("Pagos").onSnapshot(() => {
      // Respond to data
      // ...
    });
    unsubscribe();
  },
};
</script>
<style scoped>
.tabla-p {
  height: 330px;
}
</style>
