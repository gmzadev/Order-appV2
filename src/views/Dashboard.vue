<template >
  <div >
    <WidgetsDropdown/>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="5">
            <h4 id="traffic" class="card-title mb-0">Ventas</h4>
            <div class="small text-muted">Julio 2021</div>
          </CCol>
          <CCol sm="7" class="d-none d-md-block">
            <CButton color="primary" class="float-right">
              <CIcon name="cil-cloud-download"/>
            </CButton>
            <CButtonGroup class="float-right mr-3">
              <CButton
                color="outline-secondary"
                v-for="(value, key) in ['Día', 'Mes', 'Año']"
                :key="key"
                class="mx-0"
                :pressed="value === selected ? true : false"
                @click="selected = value"
              >
                {{value}}
              </CButton>
            </CButtonGroup>
          </CCol>
        </CRow>
        <MainChartExample style="height:300px;margin-top:40px;"/>
      </CCardBody>

    </CCard> 
  
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader>
            Ventas recientes
          </CCardHeader>
          <CCardBody>
            <div class="container-fluid d-flex justify-content-center" 
              style="border-style: none;width: auto">
              <CForm  class="container-fluid" action="Dashboard_submit" method="get" accept-charset="utf-8">
                <CInput type="search" name="" value="" placeholder="Cedula" >
                 <template #append-content>
                    <button type="submit" style="border:none"><i class="cil-search" ></i></button>
                 </template>
                </CInput>
              </CForm>
            </div>
            <CDataTable
              class="mb-0 table-outline"
              hover
              :items="tableItems"
              :fields="tableFields"
              head-color="light"
              no-sorting
            >
              <td slot="avatar" class="text-center" slot-scope="{item}">
                <div class="c-avatar">
                  <img :src="item.avatar.url" class="c-avatar-img" alt="">
                  <span
                    class="c-avatar-status"
                    :class="`bg-${item.avatar.status || 'secondary'}`"
                  ></span>
                </div>
              </td>
              <td slot="Usuario" slot-scope="{item}">
                <div>{{item.Usuario.name}}</div>
                <div class="small text-muted">
                  <span>
                    <template v-if="item.Usuario.new">New</template>
                    <template v-else>Recurring</template>
                  </span> | Registered: {{item.Usuario.registered}}
                </div>
              </td>
              <td 
                slot="Moneda"
                slot-scope="{item}"
                class="text-center"
              >
                <CIcon
                  :name="item.country.flag"
                  height="25"
                />
              </td>
              <!--<td slot="usage" slot-scope="{item}">
                <div class="clearfix">
                  <div class="float-left">
                    <strong>{{item.usage.value}}%</strong>
                  </div>
                  <div class="float-right">
                    <small class="text-muted">{{item.usage.period}}</small>
                  </div>
                </div>
                <CProgress
                  class="progress-xs"
                  v-model="item.usage.value"
                  :color="color(item.usage.value)"
                />
              </td>-->
              <td
                slot="payment"
                slot-scope="{item}"
                class="text-center"
              >
                <CIcon
                  :name="item.payment.icon"
                  height="25"
                />
              </td>
              <td slot="activity" slot-scope="{item}">
                <div class="small text-muted">Ultimo pago</div>
                <strong>{{item.activity}}</strong>
              </td>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import MainChartExample from './charts/MainChartExample'
import WidgetsDropdown from './widgets/WidgetsDropdown'
//import WidgetsBrand from './widgets/WidgetsBrand'

export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    WidgetsDropdown,
    //WidgetsBrand
  },
  data () {
    return {
      selected: 'index',
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          Usuario: { name: 'Melisa Barrios', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Venezuela', flag: 'cif-ve' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
          activity: 'hace 5 segundos'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          Usuario: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'cif-us' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'cil-cash' },
          activity: 'hace 5 minutos'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          Usuario: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'cif-us' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'cib-cc-amex' },
          activity: 'Hace una hora'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          Usuario: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'cif-us' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'cib-paypal' },
          activity: 'el mes pasado'
        },

        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          Usuario: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Venezuela', flag: 'cif-ve' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'cib-cc-amex' },
          activity: 'hace 5 semanas'
        }
      ],
      tableFields: [
        { key: 'avatar', label: '', _classes: 'text-center' },
        { key: 'Usuario' },
        { key: 'Moneda', _classes: ['Moneda' ,'text-center']},
        // { key: 'usage' },
        { key: 'payment', label: 'Método de Pago', _classes: 'text-center' },
        { key: 'activity', label:'Último pago' },
      ]
    }
  },
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  }
}
</script>
<style>
   
</style>
