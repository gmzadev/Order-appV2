<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Orden id:  {{ $route.params.id }}
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
          <CButton color="primary" @click="goBack">Back</CButton>
          <CButton color="danger " variant="outline" @click="goBack">Cancelar Orden</CButton>
          <CButton color="success " variant="outline" @click="goBack">Completar Orden</CButton>
        </div>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import ordenData from './OrdenData'
export default {
  name: 'Orden',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.ordenesOpened = from.fullPath.includes('Ordenes')
    })
  },
  data () {
    return {
      ordenesOpened: null
    }
  },
  computed: {
    fields () {
      return [
        { key: 'key', label: "Dato", _style: 'width:150px'},
        { key: 'value', label: 'Detalles', _style: 'width:150px;' }
      ]
    },
    OrdenData() {
      const id = this.$route.params.id
      const orden = ordenData.find((Orden, index) => index + 1 == id)
      const ordenDetails = orden ? Object.entries(orden) : [['id', 'Not found']]
      return ordenDetails.map(([key, value]) => { return { key, value } })
    },
    visibleData () {
      return this.OrdenData.filter(param => param.key !== 'username')
    },
    username () {
      return this.OrdenData.filter(param => param.key === 'username')[0].value
    }
  },
  methods: {
    goBack() {
      this.ordenessOpened ? this.$router.go(-1) : this.$router.push({path: '/Ordenes'})
    }
  }
}
</script>
