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