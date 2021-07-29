<template>
  <CRow id="Reservaciones">
    <CCol col>
      <CCard>
        <CCardHeader>
          <strong style="text-align: center">
            <h2>
              <div class="d-flex justify-content-center" style="">
                <i class="cil-inbox px-1" /> Inventario
              </div>
            </h2>
          </strong>
          <div class="card-header-actions"></div>
        </CCardHeader>
        <CCardBody class="container-fluid">
          <div>
            <CForm>
              <CInput
                class="barra"
                type="search"
                name=""
                value=""
                placeholder="Nombre"
                size="lg"
              >
                <template #append-content>
                  <CButton
                    color="dark"
                    variant="outline"
                    type="submit"
                    style="height:25px !important ; width:10px; display: flex;align-items: center; justify-content:center"
                  >
                    <i class="fas fa-search fa-xs"></i>
                  </CButton>
                </template>
                <template #prepend-content class="forma-div">
                  <select v-model="seleccionado" class="forma center form-select">
                    <option selected value="Codigo"  style="height:25px !important ;">Codigo</option>
                    <option value="Nombre">Nombre</option>
                    <option value="Fecha">Fecha</option>
                  </select>
                </template>
              </CInput>
            </CForm>
          </div>
          <div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Existencia</th>
                  <th scope="col">Fecha de Vencimiento</th>
                  <!--<th scope="col">Modificar</th>-->
                </tr>
              </thead>
              <tbody>
                <tr v-for="(iten, index) in intens" :key="index" id="tabla">
                  <th scope="row">{{ iten.itenID }}</th>
                  <td>{{ iten.nombre }}</td>
                  <td>{{ iten.existencia }}</td>
                  <td>{{ iten.fecha }}</td>
                  <!--- <td><i class="fas fa-check btn warnin"></i></td>-->
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <CForm @submit.prevent="agregarIten">
              <CInput
                disabled
                placeholder="ID"
                autocomplete="ID"
                type="number"
                v-model="itenID"
              >
                <template #prepend-content>
                  <CIcon name="cil-fingerprint" />
                </template>
              </CInput>
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
              >
                <template #prepend-content
                  ><CIcon name="cil-calendar"
                /></template>
              </CInput>
              <div class="d-flex justify-content-between container-fluid">
                <CButton variant="outline" disabled color="warning" flex
                  >Modificar</CButton
                >
                <CButton variant="outline" disabled color="danger" flex
                  >Eliminar</CButton
                >
                <CButton type="submit" variant="outline" color="success" flex
                  >Crear
                </CButton>
              </div>
            </CForm>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CAlert color="warning" v-if="error" style="margin-top: 1rem">
      {{ error }}
    </CAlert>
  </CRow>
</template>

<script>
import { db, inventario } from "@/main.js";
export default {
  name: "Inventario",
  methods: {
    rerender() {
      location.reload();
    },
    agregarIten() {
      this.error = "";

      if (this.existencia && this.nombre && this.fecha) {
        db.collection("Inventario")
          .doc(this.itenID.toString())
          .set({
            itenID: this.itenID.toString(),
            Nombre: this.nombre,
            Existencia: this.existencia,
            Fecha: this.fecha,
          })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            this.intens = [];
            inventario = [];
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      } else {
        this.error = "todos los campos son requeridos";
      }
    },
  },
  data() {
    return {
      seleccionado:"Codigo",
      itenID: inventario.length + 1,
      nombre: "",
      existencia: "",
      fecha: "",
      intens: inventario,
      error: "",
    };
  },
  mounted() {
    console.log(inventario.length + 1);
  },
  destroyed() {
    this.intens = [];
  },
  
};
</script>

<style>
.barra {
  padding: 1%;
}
</style>
