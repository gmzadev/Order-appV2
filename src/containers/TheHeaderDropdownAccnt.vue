<template>
  <!--  crear una copia a base de este como carrito  --->
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink style="">
        <div class="c-avatar">
          <!-- el que no tiene img define el tamano-->
          <img
            src="/img/avatars/6.jpg"
            class="c-avatar-img d-flex justify-content-center"
          />
        </div>
        <a style="margin-left: 10px; padding-right: 15px"> {{ UserName }}</a>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Eventos</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-bell" /> <span>Notificaciones</span>
    </CDropdownItem>
    <!-- <CDropdownItem> no lo veo necesario pero puede servir
      <CIcon name="cil-envelope-open" /> Messages
      <CBadge color="success" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>-->
    <CDropdownItem>
      <CIcon name="cil-task" /> <span>Ords. Pendientes</span>
    </CDropdownItem>
    <!-- <CDropdownItem>
      <CIcon name="cil-comment-square" /> Comments
      <CBadge color="warning" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>-->
    <div
      v-if="
        this.$store.state.usuario.nivelUsuario == 'Root' ||
        this.$store.state.usuario.nivelUsuario == 'Administrador'
      "
    >
      <CDropdownHeader tag="div" class="text-center" color="light">
        <strong>Administrativo</strong>
      </CDropdownHeader>
      <!--<CDropdownItem>
      <CIcon name="cil-user" /> Profile
    </CDropdownItem>-->
      <!--<CDropdownItem>
      <CIcon name="cil-settings" /> Configuraciones
    </CDropdownItem>-->
      <CDropdownItem>
        <a @click="Descarga()">
          <i class="fa fa-database mr-1"></i>
          <span>Respaldo de la base de datos</span>
        </a>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon name="cil-dollar" />
        <span>Pagos</span>
      </CDropdownItem>

      <!--<CDropdownItem>
      <CIcon name="cil-shield-alt" /> Lock Account
    </CDropdownItem>-->
    </div>
    <CDropdownDivider />
    <CDropdownItem class="cerrado">
      <CButton @click.prevent="logout">
        Cerrar Sesión
        <template #prepend-content>
          <CIcon name="cil-lock-locked" /> Cerrar sesion
        </template>
      </CButton>
    </CDropdownItem>
  </CDropdown>
</template>

<script>
var Inventario = [];
function destroyClickedElement(event) {
  // remove the link from the DOM
  document.body.removeChild(event.target);
}
import { db, auth } from "@/main.js";
export default {
  name: "TheHeaderDropdownAccnt",
  data() {
    return {
      itemsCount: 42,
      UserName: this.$store.state.user,
      link: "",
    };
  },
  methods: {
    saveTextAsFile(texto, Nombre) {
      // grab the content of the form field and place it into a variable
      var textToWrite = texto;
      //  create a new Blob (html5 magic) that conatins the data from your form feild
      var textFileAsBlob = new Blob([textToWrite], { type: "text/plain" });
      // Specify the name of the file to be saved
      var fileNameToSaveAs = Nombre;

      // Optionally allow the user to choose a file name by providing
      // an imput field in the HTML and using the collected data here
      // var fileNameToSaveAs = txtFileName.text;

      // create a link for our script to 'click'
      var downloadLink = document.createElement("a");
      //  supply the name of the file (from the var above).
      // you could create the name here but using a var
      // allows more flexability later.
      downloadLink.download = fileNameToSaveAs;
      // provide text for the link. This will be hidden so you
      // can actually use anything you want.
      downloadLink.innerHTML = "My Hidden Link";

      // allow our code to work in webkit & Gecko based browsers
      // without the need for a if / else block.
      window.URL = window.URL || window.webkitURL;

      // Create the link Object.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      // when link is clicked call a function to remove it from
      // the DOM in case user wants to save a second file.
      downloadLink.onclick = destroyClickedElement;
      // make sure the link is hidden.
      downloadLink.style.display = "none";
      // add the link to the DOM
      document.body.appendChild(downloadLink);

      // click the new link
      downloadLink.click();
    },
    Descarga() {
      db.collection("Inventario").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var iten = {
            nombre: doc.data().Nombre,
            itenID: doc.data().itenID,
            existencia: doc.data().Existencia,
            fecha: doc.data().Fecha,
          };
          Inventario.push(JSON.stringify(iten));
        });
        console.log(Inventario);
        this.saveTextAsFile(Inventario, "Inventario");
        Inventario=[]
      });

      db.collection("Ordenes").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var iten = {
            Cedula: doc.data().Cedula,
            Cliente: doc.data().Cliente,
            Estado: doc.data().Estado,
            Hora: doc.data().Hora,
            OrdenID: doc.data().OrdenID,
            PagoID: doc.data().PagoID,
            Pedido: doc.data().Pedido,
          };
          Inventario.push(JSON.stringify(iten));
        });
        this.saveTextAsFile(Inventario, "Ordenes");
        Inventario=[]
      });
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
          Inventario.push(JSON.stringify(iten));
        });
        this.saveTextAsFile(Inventario, "Pagos");
        Inventario=[]
      });
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
          Inventario.push(JSON.stringify(iten));
        });
        this.saveTextAsFile(Inventario, "Platos");
        Inventario=[]
      });
      db.collection("Usuarios").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var iten = {
            Cedula: doc.data().Cedula,
            Correo: doc.data().Correo,
            Nombre: doc.data().Nombre,
            Telefono: doc.data().Telefono,
            nivelUsuario: doc.data().nivelUsuario,
          };
          Inventario.push(JSON.stringify(iten));
        });
        this.saveTextAsFile(Inventario, "Usuarios");
        Inventario=[]
      });
    },
    logout() {
      auth.signOut().then(() => {
        this.$store.commit("set", ["user", this.user]);
        this.$router
          .push({ path: "/" })
          .then()
          .catch((err) => {
            this.error = err.message;
          });
      });
    },
  },
};
</script>

<style scoped>
.fa-database {
  color: grey;
}
.CDropdown {
  display: flex;
  justify-content: right !important;
}
.cerrado {
  display: flex;
  justify-content: center;
}
strong {
  font-size: 1.1rem;
}
.isquierda {
  display: flex;
  justify-content: right;
}
span {
  font-size: 0.9rem;
  margin-right: 0.5rem;
}
.c-icon {
  margin-right: 0.5rem;
}
</style>