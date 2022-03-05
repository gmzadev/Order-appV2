import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    sidebarShow: 'responsive', //variables responsives del sidebar
    sidebarMinimize: false, //variables responsives del sidebar
    login: false, //verifica el estado
    user: null, //guarda el correo del usuario
    usuario: {}, //objeto que guarda al usuario
    //renderopt: null,
    nombre: 'Plato Fuerte',
    cuenta: 0,
    Pedido: {},
    auxid: "",


}
const getters = {
    getUser() {
        return state.user
    }
}
const mutations = {

    toggleSidebarDesktop(state) {
        const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
        state.sidebarShow = sidebarOpened ? false : 'responsive'
    },
    toggleSidebarMobile(state) {
        const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
        state.sidebarShow = sidebarClosed ? true : 'responsive'
    },
    set(state, [variable, value]) {
        state[variable] = value
    },

}
export default new Vuex.Store({
        state,
        mutations,
        getters


    }

)