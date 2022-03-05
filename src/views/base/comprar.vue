<template>
  <div id="Comprar">
    <CRow>
      <CCol col>
        <CCard>
          <CCardHeader>
            <strong style="text-align: center">
              <h2>
                <div class="d-flex justify-content-center row" style="">
                  <i class="cil-fastfood"></i>{{ this.titulo() }}
                </div>
              </h2>
            </strong>
            <div class="card-header-actions"></div>
          </CCardHeader>
          <div class="justify-content-center d-flex col">
            <select
              class="custom-select justify-content-center texto center col-sm-3"
              v-model="Tipo"
              style="font-size: 1.1rem !important"
              @change="filtrar()"
            >
              <option selected :value="Tipo">
                {{ Tipo }}
              </option>
              <option v-if="Tipo != 'Snack'" value="Snack">Snack</option>
              <option v-if="Tipo != 'Plato Fuerte'" value="Plato Fuerte">
                Plato Fuerte
              </option>
              <option
                v-if="Tipo != 'Especial del dia'"
                value="Especial del dia"
              >
                Especial del dia
              </option>
              <option v-if="Tipo != 'Combo'" value="Combo">Combo</option>
              <option v-if="Tipo != 'Extra'" value="Extra">Extra</option>
            </select>
          </div>
          <CCardBody class="justify-content-center">
            <template>
              <div class="card-group overflow-auto" :key="Reiniciar">
                <div
                  v-for="(plato, index) in menu"
                  :key="index"
                  class="col-sm-4"
                >
                  <CCard flex :aria-disabled="plato.Estado">
                    <CCardHeader
                      class="center lato-titulo justify-content-center"
                    >
                      {{ plato.Nombre }}
                    </CCardHeader>
                    <CCardBody
                      class="center lato-titulo justify-content-center"
                    >
                      <img :src="plato.Url" alt="" class="img-fluid" />
                    </CCardBody>
                    <CCardFooter class="texto center">
                      <div class="borde">
                        {{ plato.Descripcion }}
                      </div>
                      <hr />
                      {{ plato.Precio }} Ref
                    </CCardFooter>
                    <div class="col d-flex justify-content-center pb-15">
                      <CInput
                        class="col-sm abs-center texto"
                        variant="outline"
                        color="secondary"
                        type="number"
                        value="0"
                        min="0"
                        step="1"
                        :key="plato.PlatoId"
                        :id="plato.PlatoId"
                      ></CInput>
                      <CButton
                        class="col-md-3 texto center mt-2"
                        variant="outline"
                        color="success"
                        style="height: 5vh"
                        @click="agregarPlato(plato)"
                        ><i class="fas fa-edit iconos" />
                      </CButton>
                    </div>
                  </CCard>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <CButton
                  type="submit"
                  variant="outline"
                  color="dark"
                  class="col-md-3 fas fa-money-bill"
                  @click="MotrarCuenta()"
                >
                  <a class="texto center" style="font-size: 1rem !important">
                    Mostrar Cuenta</a
                  >
                </CButton>
              </div>
            </template>
          </CCardBody>
        </CCard>
      </CCol>
      <div class="center" style="z-index: 5">
        <CModal
          class=""
          title="Cuenta"
          color="success"
          size="xl"
          :show.sync="Modal"
          :footer="!Modal"
          :backdrop="!Modal"
          :scrollable="false"
        >
          <CForm
            onkeydown="return (event.keyCode!=13);"
            class=""
            :key="this.ReiniciarModal"
          >
            <div class="cuenta" style="overflow-y: scroll">
              <CCardGroup class="justify-content-center row col">
                <ul style="list-style-type: none">
                  <div class="card">
                    <div class="card-body row center">
                      <li
                        v-for="(iten, index) in AuxCuenta"
                        :key="index"
                        class=""
                        style="width: 55vw"
                      >
                        <div class="borde-isquierda col">
                          <div class="borde-abajo row justify-content-center">
                            <h3 class="">{{ iten.Plato.Nombre }}</h3>
                          </div>
                          <div class="row center d-flex">
                            <div class="col mt-3">
                              <button
                                type="button"
                                class="btn btn-outline-dark"
                                @click="menos(iten)"
                              >
                                <i class="fas fa-minus"></i>
                              </button>
                            </div>
                            <div class="col mt-3 mb-3 texto">
                              {{ iten.Cantidad }}
                              <hr />
                            </div>
                            <div class="col mt-3">
                              <button
                                type="button"
                                class="btn btn-outline-dark"
                                @click="
                                  () => (iten.Cantidad = iten.Cantidad + 1)
                                "
                              >
                                <i class="fas fa-plus"></i>
                              </button>
                            </div>
                          </div>
                          <div style="text-align: right">
                            <h5 class="letra-calculador">
                              Subtotal:
                              <b>{{ iten.Cantidad * iten.Plato.Precio }}</b>
                            </h5>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                </ul>
                <h3>Total: {{ calculo() }}</h3> 
              </CCardGroup>
            </div>
          </CForm>
          <div slot="body"></div>
          <div slot="footer" class="center pl-1">
            <CButton
              click=""
              class="fas fa-dollar center"
              color="success "
              variant="outline"
              @click="Pagar()"
            >
              <i class=".letra-calculador">
                Pagar
              </i></CButton
            >
          </div>
        </CModal>
      </div>
    </CRow>
  </div>
</template>
<script>
import "regenerator-runtime/runtime"; //... lo pidio asi que lo puse
import { db /*storage */ } from "@/main.js"; //exportacion de firebase
var platos = []; //variable que almacena los platos en el servidor
export default {
  data: function () {
    return {
      Reiniciar: 1,
      ReiniciarModal: 1,
      Modal: false,
      AuxCuenta: [],
      menu: [], //menu de platos auxiliar para trabajar del lado del cliente
      Tipo: this.$store.state.nombre, //tipo traido por el enlace home
    };
  },
  methods: {
    menos(iten) {
      if (iten.Cantidad == 1) {
        var i = 0;
        for (i in this.AuxCuenta) {
          if (this.AuxCuenta[i].Plato.PlatoId == iten.Plato.PlatoId) {
            this.AuxCuenta.splice(i, 1);
            this.ReiniciarModal = Math.floor(
              Math.random() * 999999999999999999999
            );
            if (this.AuxCuenta.length == 0) {
              alert("la cuenta ha sido vaciada");
              this.Modal = false;
            }
            break;
          }
        }
      } else {
        iten.Cantidad = iten.Cantidad - 1;
      }
    },
    MotrarCuenta() {
      if (this.AuxCuenta.length == 0) {
        alert("la cuenta esta vacia");
      } else {
        this.Modal = true;
      }
    },
    /*Eliminar(plato) {
      let i = 0;
      let auxcantidad
      let flag = false;
      let mensaje=""
      for (i in this.AuxCuenta) {
        if (this.AuxCuenta[i].ID == plato.PlatoId) {
            flag=true
            mensaje=
            this.AuxCuenta[i].cantidad = this.AuxCuenta - auxcantidad;
            if (this.AuxCuenta[i].cantidad<=0){
              this.AuxCuenta.splice(i,1)
              mensaje="plato eliminado" //hacer carrito con un modal
            }
            break;
          }
      }
      if (!mensaje==""){
        alert(mensaje)
      }else if
    },*/
    Pagar() {
      this.$store.commit("set", ["cuenta", this.calculo()]);
      this.$store.commit("set", ["Pedido",this.AuxCuenta]);
      this.$router.push("/base/PagoCliente");
    },

    Limpiar() {},
    titulo() {
      let aux = "";
      if (this.Tipo == "Snack") {
        aux = "Snack`s";
      } else if (this.Tipo == "Combo") {
        aux = "Combos";
      } else if (this.Tipo == "Plato Fuerte") {
        aux = "Platos Fuertes";
      } else if (this.Tipo == "Extra") {
        aux = "Extras";
      } else {
        aux = "Especiales del dia";
      }
      return aux;
    },
    rerender() {
      platos.length = 0;
      db.collection("Platos").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var iten = {
            PlatoId: doc.data().PlatoId,
            Ingredientes: doc.data().Ingredientes,
            Estado: doc.data().Estado,
            Precio: doc.data().Precio,
            Nombre: doc.data().Nombre,
            Url: doc.data().Url,
            Descripcion: doc.data().Descripcion,
            Tipo: doc.data().Tipo,
          };
          if (iten.Tipo == this.Tipo) {
            this.menu.push(iten);
          }
          platos.push(iten);
        });
      });
    },
    filtrar() {
      var aux = []; //arreglo auxiliar para menu
      let i = 0;
      for (i in platos) {
        if (platos[i].Tipo == this.Tipo) {
          aux.push(platos[i]);
        }
      }
      return (this.menu = aux);
    },
    agregarPlato(plato) {
      //agrega un plato a la cuenta es decir ordena
      let auxID = plato;
      let auxcantidad = parseInt(
        document.getElementById(plato.PlatoId).value,
        10
      );
      if (auxcantidad > 0) {
        let auxOrden = {
          Plato: auxID,
          Cantidad: auxcantidad,
        };
        let i = 0;
        let flag = false;
        if (this.AuxCuenta.length > 0) {
          for (i in this.AuxCuenta) {
            if (this.AuxCuenta[i].Plato.PlatoId == plato.PlatoId) {
              flag = true;
              // eslint-disable-next-line vue/no-side-effects-in-computed-properties
              this.AuxCuenta[i].Cantidad =
                this.AuxCuenta[i].Cantidad + auxcantidad;
              break;
            }
          }
        }
        if (!flag) {
          this.AuxCuenta.push(auxOrden);
        }
        /* plato.PlatoId=""
        this.menu=[]
        console.log(this.menu.length)
        this.menu=this.filtrar();*/
        this.Reiniciar = Math.floor(Math.random() * 999999999999999999999);
      } else {
        alert("la cantidad deve ser mayor a 0");
      }
      //console.log(this.AuxCuenta, plato.PlatoId);
    },
    calculo() {
      var i = 0;
      var c = 0;
      for (i in this.AuxCuenta) {
        c = c + this.AuxCuenta[i].Plato.Precio * this.AuxCuenta[i].Cantidad;
      }
      return c;
    },
  },
  computed: {},

  mounted() {
    this.rerender();
  },
  beforeDestroy() {
    platos = [];
    var unsubscribe = db.collection("Platos").onSnapshot(() => {
      // Respond to data
      // ...
    });
    unsubscribe();
  },
};
</script>
<style >
.modal-dialog-scrollable {
  height: 300px !important;
}
</style>