<template>
  <CDropdown
    inNav
    class="c-header-nav-items "
    placement="bottom"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink style="">
         
        <div class="c-avatar"><!-- el que no tiene img define el tamano-->
          <img
            src="img/avatars/6.jpg"
            class="c-avatar-img d-flex justify-content-center" 
          />
        </div>
         <a style="margin-left:10px; padding-right: 15px"> {{UserName}}</a>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light" >
      <strong>Eventos</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-bell"/> <span>Notificaciones</span> 
      <CBadge color="info" class="isquierda">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <!-- <CDropdownItem> no lo veo necesario pero puede servir
      <CIcon name="cil-envelope-open" /> Messages
      <CBadge color="success" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>-->
    <CDropdownItem >
      <CIcon name="cil-task" />  <span>Ords. Pendientes</span>
      <CBadge color="danger" class="isquierda">{{ itemsCount }}</CBadge>
    </CDropdownItem>
   <!-- <CDropdownItem>
      <CIcon name="cil-comment-square" /> Comments
      <CBadge color="warning" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>-->
    <CDropdownHeader
      tag="div"
      class="text-center"
      color="light"
    >
      <strong>Administrativo</strong>
    </CDropdownHeader>
    <!--<CDropdownItem>
      <CIcon name="cil-user" /> Profile
    </CDropdownItem>-->
    <!--<CDropdownItem>
      <CIcon name="cil-settings" /> Configuraciones
    </CDropdownItem>-->
    <CDropdownItem>
      <CIcon name="cil-dollar" /> 
        <span>Pagos</span>
      <CBadge color="secondary" class="isquierda">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-file" /> 
        <span> Reservaciones</span>
      <CBadge color="primary" class="isquierda">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownDivider/>
    <!--<CDropdownItem>
      <CIcon name="cil-shield-alt" /> Lock Account
    </CDropdownItem>-->
    <CDropdownItem  class="cerrado">
      <CButton @click.prevent="logout">
        Cerrar Sesión
        <template #prepend-content>
          <CIcon  name="cil-lock-locked" /> Cerrar sesion
        </template>
      </CButton>
    </CDropdownItem >
  </CDropdown>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42,
       UserName: 'Alexandra Medina'
    }
  },
  methods: {
    logout(){
      firebase.auth().signOut().then(()=>{
        this.$router.push({name:'Home'})
      })
    }
  },
}
</script>

<style scoped>
.CDropdown{
  display: flex;
  justify-content: right!important
}
.cerrado{
 display: flex;
  justify-content: center;
}
strong{
  font-size:1.1rem;
}
.isquierda{
  display: flex;
  justify-content: right;
}
span{
    font-size: 0.9rem;
    margin-right: 0.5rem;
}
.c-icon {
    margin-right: 0.5rem;
}
  
</style>