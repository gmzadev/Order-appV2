<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader class="center forma"> 
          <h2>
              <i class="cil-cash xl" />
            </h2>
          <h2> Pagos Pendientes</h2>
           </CCardHeader>
        <CCardBody>
          <div class="table-responsive tabla-p">
            <table class="table table-striped">
              <thead>
                <tr class="center">
                  <th>#</th>
                  <th>{{ fields[0].key }}</th>
                  <th>{{ fields[1].key }}</th>
                  <th>{{ fields[2].key }}</th>
                  <th>{{ fields[3].key }}</th>
                  <th>{{ fields[4].key }}</th>
                  <th scope="col">Aceptar</th>
                  <th scope="col">Rechazar</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(iten, index) in items"
                  :key="index"
                  id="tabla"
                  class="center"
                >
                  <th scope="row">{{ index }}</th>
                  <td>
                    <a @click="modal(index)">{{ iten.Nombre }}</a>
                  </td>
                  <td>
                    <a @click="modal(index)">{{ iten.Fecha }}</a>
                  </td>
                  <td>
                    <a @click="modal(index)">{{ iten.Referencia }}</a>
                  </td>
                  <td>
                    <a @click="modal(index)">{{ iten.status }}</a>
                  </td>
                  <td>
                    <a @click="modal(index)">{{ iten.Metodo }}</a>
                  </td>
                  <td>
                    <CButton variant="outline" color="success" flex
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
                  <p> A nombre de: {{this.nombre}}</p>
                  Cedula del Cliente: {{ this.idSujeto }}
                </CCardHeader>
                <CCardBody>
                  
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </template>
        
          <div    slot="footer" class="d-flex justify-content-between">
            <CButton color="danger" variant="outline" @click="goBack" style="margin-right:26vw"
              >Rechazar</CButton
            >
            <CButton color="success " variant="outline" @click="goBack" style="margin-right:0vh"
              >Aceptar</CButton
            >
          </div>
        
      </CModal>
    </div></CRow
  >
</template>
  

<script>
import usersData from "./UsersData";
export default {
  name: "Users",
  data() {
    return {
      idSujeto: 0,
      visibleData:{},
      warningModal: false,
      items: usersData,
      fields: [
        { key: "Nombre", label: "Nombre", _classes: "font-weight-bold" },
        { key: "Fecha", label: "Fecha de pago" },
        { key: "Referencia" },
        { key: "status", label: "Estatus" },
        { key: "Metodo", label: "Meto de pago" },
      ],
      activePage: 1,
    };
  },

  methods: {
    modal(index) {
      (this.warningModal = true), 
      (this.idSujeto = index);
      this.visibleData=this.items[index]
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
  computed: {

  },
};
</script>
<style scoped>
.tabla-p {
  height: 500px;
}
</style>
