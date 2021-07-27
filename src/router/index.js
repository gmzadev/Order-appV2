import Vue from 'vue'
import Router from 'vue-router'


// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
//const Colors = () => import('@/views/theme/Colors')
//const Typography = () => import('@/views/theme/Typography')
//const Charts = () => import('@/views/charts/Charts')
//const Widgets = () => import('@/views/widgets/Widgets')

//home seccion sin iniciar sesion
const About = () => import('@/views/inicio/About')
const Contactenos = () => import('@/views/inicio/Contactenos')
const Home = () => import('@/views/inicio/Home')
const Horarios = () => import('@/views/inicio/Horarios')
const Ordenar = () => import('@/views/inicio/Ordenar')
const PagoCliente = () => import('@/views/inicio/PagoCliente')
const MenuEspeciales = () => import('@/views/inicio/MenuEspeciales')
const Barra = () => import('@/views/inicio/Barra')
// Views - Components
const Platos = () => import('@/views/base/Platos')

const Orden = () => import('@/views/ordenes/Orden')
const Ordenes = () => import('@/views/ordenes/Ordenes')
const Inventario = () => import('@/views/base/Inventario')
const Reservaciones = () => import('@/views/base/Reservaciones')


// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Comprar = () => import('@/views/base/comprar')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes() {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'dashboard',
      component: TheContainer,
      children: [

        {//este es la ruta de home parqa usuarios sin iniciar sesion1
          path: '/inicio',
          redirect: '/home',
          name: 'inicio',
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: '/home',
              name: 'Home',
              component: Home
            },
            {
              path: '/Barra',
              name: 'Barra',
              component: Barra
            },
            {
              path: '/horarios',
              name: 'Horarios',
              component: Horarios
            },
            {
              path: '/ordenar',
              name: 'Ordenar',
              component: Ordenar
            },

            {
              path: '/pagoCliente',
              name: 'PagoCliente',
              component: PagoCliente
            },
            {
              path: '/menuEspeciales',
              name: 'MenuEspecialeso',
              component: MenuEspeciales
            },
            {
              path: '/about',
              name: 'About',
              component: About
            },
            {
              path: '/contactenos',
              name: 'Contactenos',
              component: Contactenos
            }
          ]
        },
        {
          path: 'dashboard', //dashboar  @funciont admin 
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'users',
          meta: {
            label: 'Users'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Users',
              component: Users
            },
            {
              path: ':id',
              meta: {
                label: 'User Details'
              },
              name: 'User',
              component: User
            }
          ]
        },
        {
          path: 'ordenes',
          meta: {
            label: 'Ordenes'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Ordenes',
              component: Ordenes
            },
            {
              path: ':id',
              meta: {
                label: 'Orden Details'
              },
              name: 'Orden',
              component: Orden
            }
          ]
        },
        {
          path: 'base',
          name: 'Base',
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: 'comprar',
              name: 'Comprar',
              component: Comprar
            },
            {
              path: 'platos',
              name: 'Platos',
              component: Platos
            },

            /*{
              path: 'orden',
              name: 'Orden',
              component: Orden

            },*/
            {
              path: 'inventario',
              name: 'Inventario',
              component: Inventario

            },
            {
              path: 'reservaciones',
              name: 'Reservaciones',
              component: Reservaciones
            },
          ],
        },
        {

          path: '/pages/404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '/pages/500',
          name: 'Page500',
          component: Page500
        },
        {
          path: '/pages/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/pages/register',
          name: 'Register',
          component: Register
        }



      ]
    },


  ]
}

