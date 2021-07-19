<template>
  <CRow>
    <CCol col="12" xl="8">
      <CCard>
        <CCardHeader>
          Users
        </CCardHeader>
        <CCardBody>
          <CDataTable
            hover
            striped
            :items="items"
            :fields="fields"
            :items-per-page="5"
            clickable-rows
            clickable-coluns
            :active-page="activePage"
            @row-clicked="rowClicked"
            :pagination="{ doubleArrows: false, align: 'center'}"
            @page-change="pageChange"
          >
            <template #status="data">
              <td>
                <CBadge :color="getBadge(data.item.status)">
                  {{data.item.status}}
                </CBadge>
              </td>
            </template>
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import OrdenData from './OrdenData'
export default {
  name: 'Ordenes',
  data () {
    return {
      items: OrdenData,
      fields: [
        { key: 'Nombre', label: 'Nombre', _classes: 'font-weight-bold' },
        { key: 'Fecha', label:'Fecha de pago' },
        { key: 'Referencia' },
        {key: 'Tipo',label:'Tipo'}
      ],
      activePage: 1
      
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page)
        }
      }
    }
  },
  methods: {
    getBadge (status) {
      switch (status) {
        case 'Rechazado': return 'danger'
        case 'Pediente': return 'warning'
        default: 'Perdiente'
      }
    },
    rowClicked (item, index) {
      this.$router.push({path: `Ordenes/${index + 1}`})
    },
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    }
  }
}
</script>
