export default [
  {
    _name: 'CSidebarNav',
    _children: [
      
      {
        _name: 'CSidebarNavTitle',
        _children: ['Administrativo'],
        
      },
      {
        _name: 'CSidebarNavItem',
        show: false,
        route: '/base',
        name: 'Inventario',
        to: '/base/Inventario',//aqui esta la ruta para inventario
        icon: 'cil-inbox'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Historico',
        to: '/Users',//ruta de historico
        icon: 'cil-description'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Pagos',
        to: '/Users',//ruta de historico
        icon: 'cil-cash'
      },

      {
        _name: 'CSidebarNavItem',
        name: 'Platos',
        route: '/base',
        icon: 'cil-burger',
        to: '/base/Platos'

      },
      {
        _name: 'CSidebarNavItem',
        name: 'Reservaciones',
        route: '/base',
        to: '/base/Reservaciones',
        icon: 'cil-file',
      },
      {
      _name: 'CSidebarNavItem',
      name: 'Ordenes',
      to: '/Ordenes',//aqui esta la ruta para ordenes
      icon: 'cil-inbox'
      },
     {
        _name: 'CSidebarNavItem',
        route: '/base',
        name: 'Comprar',
        to: '/base/Comprar',//aqui esta la ruta para  comprar
        icon: 'cil-inbox'
      },

      /*/{
        _name: 'CSidebarNavSDropdown',
        name: '',
        route: '/notifications',
        icon: '',
        items: [ 
          {
            name: 'Alerts',
            to: '/notifications/alerts'
          },
          {
            name: 'Badges',
            to: '/notifications/badges'
          },
          {
            name: 'Modals',
            to: '/notifications/modals'
          }
        ]
      },
      /*{
        _name: 'CSidebarNavItem',
        name: '',
        to: '/widgets',
        icon: '',
      },
      {
        _name: 'CSidebarNavDivider',
        _class: 'm-2'
      },*/
      {
        _name: 'CSidebarNavDropdown',
        name: 'Pages',
        route: '/pages',
        icon: 'cil-star',
        items: [
          {
            name: 'Login',
            to: '/pages/login'
          },
          {
            name: 'Register',
            to: '/pages/register'
          },
          {
            name: 'Error 404',
            to: '/pages/404'
          },
          {
            name: 'Error 500',
            to: '/pages/500'
          }

        ]
      }
    

    ]
  }
]