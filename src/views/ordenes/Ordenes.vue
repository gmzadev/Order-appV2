<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader class="center forma">
          <h2>
            <i class="cil-cash xl" />
          </h2>
          <h2>Ordenes Pendientes</h2>
          <div class="justify-content-center d-flex col">
            <select
              class="custom-select justify-content-center texto center col-sm-3"
              id="filtro"
              v-model="Filtro"
              style="font-size: 1.1rem !important"
              @change="filtrar"
            >
              <option selected value="Pendiente de pago">Pendientes de Pago</option>
              <option value="Rechazada">Rechazadas</option>
              <option value="En Proceso">En Proceso</option>
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
                  <option value="Hora">Hora</option>
                  <option value="Codigo">ID</option>
                  
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
                  <th># Orden</th>
                  <th>Cliente</th>
                  <th>Hora</th>
                  <th>Estado</th>
                  <th>Cedula</th>
                  <th scope="col">Culminar</th>
                  <th scope="col">Rechazar</th>
                </tr>
              </thead>
              <tbody :key="Reiniciar">
                <tr
                  v-for="(iten, index) in ListaOrdenes"
                  :key="index"
                  id="tabla"
                  class="center"
                >
                  <th scope="row">
                    <a @click="modal(iten)">{{iten.OrdenID }}</a>
                  </th>
                  <td>
                    <a @click="modal(iten)">{{ iten.Cliente }}</a>
                  </td>
                  <td>
                    <a @click="modal(iten)">{{ iten.Hora }}</a>
                  </td>
                  <td>
                    <a @click="modal(iten)">{{ iten.Estado }}</a>
                  </td>
                  <td>
                    <a @click="modal(iten)">{{iten.Cedula}}</a>
                  </td>
                  <td>
                    <CButton
                      @click="updateEstate(iten.OrdenID, 'Culminada')"
                      variant="outline"
                      color="success"
                      flex
                      ><i class="fas fa-check"></i
                    ></CButton>
                  </td>
                  <td>
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
                  :value="visibleData.Cedula"
                >
                  <template #prepend-content>ID </template>
                </CInput>
                <CInput
                  type="Text"
                  :disabled="true"
                  class="texto col"
                  :value="visibleData.Cliente"
                >
                  <template #prepend-content>
                    <i class="fas fa-user"></i>
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
              <CCardBody> </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </template>

      <div slot="footer" class="d-flex justify-content-around">
        <div class="col-sm-3">
          <!-- cambiar aqui si se desea facturar-->
          <CButton
            @click="Culminar(this.visibleData.OrdenID)"
            variant="outline"
            color="success"
            size="lg"
            flex
            ><i class="fas fa-check"></i
          ></CButton>
        </div>

        <div class="col-sm-3">
          <CButton
            @click="updateEstate(this.visibleData.OrdenID, 'Rechazada')"
            size="lg"
            variant="outline"
            color="danger"
            flex
            ><i class="fas fa-trash"></i
          ></CButton>
        </div>
      </div>
    </CModal>
  </CRow>
</template>

<script>
var Ordenes = [];

import { db } from "@/main.js";
export default {
  name: "Users",
  data() {
    return {
      Barrita: "",
      Reiniciar:1,
      Filtro: "Pendiente de pago",
      seleccionado: "Cedula",
      ListaOrdenes: [],
      idSujeto: 0,
      visibleData: {},
      warningModal: false,
      activePage: 1,
    };
  },

  methods: {
    buscar() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.ListaOrdenes=Ordenes
      var aux = [];
      var i = 0;
      if (this.seleccionado == "Codigo") {
        for (i in Ordenes) {
          if ( String(Ordenes[i].OrdenID).includes(this.Barrita)&&this.Filtro==Ordenes[i].Estado) {
            //console.log("entro: ",c)
            aux.push(Ordenes[i]);
          }
        }
      } else if (this.seleccionado == "Cliente") {
        for (i = 0; i < Ordenes.length; i++) {
          if (
            String(Ordenes[i].Cliente).toUpperCase().includes(this.Barrita.toUpperCase()) &&
            Ordenes[i].Estado == this.Filtro
          ) {
            console.log(this.Barra);
            aux.push(Ordenes[i]);
          }
        }
      } else if (this.seleccionado == "Cedula"){
        for (i in Ordenes) {
          if ( String(Ordenes[i].Cedula).includes(this.Barrita)&&this.Filtro==Ordenes[i].Estado) {
            //console.log("entro: ",c)
            aux.push(Ordenes[i]);
          }
        }
      }else {
        for (i = 0; i < Ordenes.length; i++) {
          if (
            String(Ordenes[i].Hora).includes(this.Barrita) &&
            Ordenes[i].Estado == this.Filtro
          ) {
            aux.push(Ordenes[i]);
          }
        }
      }
      
      this.ListaOrdenes = aux;
    },
    filtrar() {
      //this.ListaOrdenes = Ordenes;
      var aux = []; //arreglo auxiliar para la lista de Ordenes
      var i = 0;
      for (i = 0; i < Ordenes.length; i++) {
        if (Ordenes[i].Estado == this.Filtro) {
          aux.push(Ordenes[i]);
        }
      }
      //delete $data.ListaOrdenes
      
      this.ListaOrdenes=aux
      console.log(this.ListaOrdenes.length) 

    },
    updateEstate(index, mode) {
      
            Ordenes=[]
            var AuxOrden = db.collection("Ordenes").doc(index); //REFERENCIA AL AL ELEMENTO  DE PAGO CON ID AUXPAGOID
            AuxOrden.update({ Estado: mode });
             this.filtrar()
    },
    rerender() {
      //carga  y renderiza el arreglo de inventario
      db.collection("Ordenes").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var iten = {
            Cedula: doc.data().Cedula,
            Cliente: doc.data().Cliente,
            Estado: doc.data().Estado,
            Hora: doc.data().Hora,
            OrdenID: doc.data().OrdenID,
            Pedido: doc.data().Pedido
          };
          if (iten.Estado == this.Filtro) {
            this.ListaOrdenes.push(iten);
          }
          Ordenes.push(iten);
        });
      });
      //carga el y renderiza arreglo de platos y urls
    },
    modal(index) {
      (this.warningModal = true), (this.visibleData = index);
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
  
    var unsubscribe2 = db.collection("Ordenes").onSnapshot(() => {
      // Respond to data
      // ...
    });
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
