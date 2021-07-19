<template >
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink style="">
         
        <div class="c-avatar"><!-- el que no tiene img define el tamano-->
          <img
            src="img/avatars/6.jpg"
            class="c-avatar-img " 
          />
        </div>
         <a style="margin-left:10px; padding-right: 8px"> {{UserName}}</a>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light" >
      <strong>Eventos</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-bell"/> Notificaciones
      <CBadge color="info" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <!-- <CDropdownItem> no lo veo necesario pero puede servir
      <CIcon name="cil-envelope-open" /> Messages
      <CBadge color="success" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>-->
    <CDropdownItem >
      <CIcon name="cil-task" />  <a >Ords. Pendientes</a>
      <CBadge color="danger" class="mfs-auto">{{ itemsCount }}</CBadge>
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
      <CIcon name="cil-dollar" /> Pagos
      <CBadge color="secondary" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-file" /> Reservaciones
      <CBadge color="primary" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownDivider/>
    <!--<CDropdownItem>
      <CIcon name="cil-shield-alt" /> Lock Account
    </CDropdownItem>-->
    <CDropdownItem>
      <CIcon name="cil-lock-locked" /> Cerrar sesion
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42,
       UserName: 'Alexandra Medina'
    }
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
  a {
     font-size: 12.4px
  }
</style>