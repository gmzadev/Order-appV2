<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Cedula del Cliente:  {{ this.idSujeto }}
        </CCardHeader>
        <CCardBody>
          <CDataTable
            striped
            small
            fixed
            :items="visibleData"
            :fields="fields"
          />
        </CCardBody>
        <CCardFooter>
          <div class="d-flex justify-content-between">
          <CButton color="primary" @click="goBack">Volver</CButton>
          <CButton color="danger"  variant="outline" @click="goBack">Rechazar</CButton>
          <CButton color="success " variant="outline" @click="goBack">Aceptar</CButton>
        </div>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import usersData from './UsersData'
export default {
  name: 'User',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.usersOpened = from.fullPath.includes('users')
    })
  },
  data () {
    return {
      usersOpened: null
    }
  },
  computed: {
    fields () {
      return [
        { key: 'key', label: this.Nombre, _style: 'width:150px'},
        { key: 'value', label: '', _style: 'width:150px;' }
      ]
    },
    userData () {
      const id = this.$route.params.id
      const user = usersData.find((user, index) => index + 1 == id)
      const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
      return userDetails.map(([key, value]) => { return { key, value } })
    },
    visibleData () {
      return this.userData.filter(param => param.key !== 'username')
    },
    username () {
      return this.userData.filter(param => param.key === 'username')[0].value
    }
  },
  methods: {
    goBack() {
      this.usersOpened ? this.$router.go(-1) : this.$router.push({path: '/users'})
    }
  }
}
</script>
