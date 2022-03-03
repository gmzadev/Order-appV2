export default [{
    _name: 'CSidebarNav',
    _children: [{
            _name: 'CSidebarNavItem',
            name: 'Home',
            to: '/Home', //ruta de historico
            icon: 'cil-home'
        },
        {
            _name: 'CSidebarNavItem',
            show: false,
            route: '/Dasboard',
            name: 'Dashboard',
            to: '/Dashboard',
            icon: 'cil-speedometer'
        },

        {
            _name: 'CSidebarNavItem',
            show: false,
            route: '/base',
            name: 'Inventario',
            to: '/base/Inventario', //aqui esta la ruta para inventario
            icon: 'cil-inbox'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Pagos',
            to: '/Users', //ruta de historico
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
            name: 'Órdenes',
            to: '/Ordenes', //aqui esta la ruta para ordenes
            icon: 'cil-clipboard'
        },
        {
            _name: 'CSidebarNavItem',
            route: '/base',
            name: 'Comprar',
            to: '/base/Comprar', //aqui esta la ruta para  comprar
            icon: 'cil-dollar'
        },

        /* {
           _name: 'CSidebarNavSDropdown',
           name: 'hola 2',
           route: '/notifications',
           icon: 'cil-dollar',
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
         {
           _name: 'CSidebarNavItem',
           name: 'hol',
           to: '/widgets',
           icon: '',
         },*/


    ]
}]