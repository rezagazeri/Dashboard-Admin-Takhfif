export default {
    NavItems: [{
            name: 'داشبورد',
            url: '/dashboard',
            icon: 'icon-speedometer',
            id: 0
        },
        {
            name: 'رنگ ها',
            url: '/theme/colors',
            icon: 'icon-drop',
            id: 1

        },
        {
            name: 'Typography',
            url: '/theme/typography',
            icon: 'icon-pencil',
            id: 2
        },
        {
            name: 'رسانه',
            url: '/media',
            icon: 'icon-puzzle',
            id: false,
            children: [{
                    name: ' کتابخانه',
                    url: '/media/allMedia',
                    icon: 'icon-puzzle',
                    id: 4

                },
                {
                    name: 'افزودن',
                    url: '/media/addMedia',
                    icon: 'icon-puzzle',
                    id: 5
                },
            ]
        },
        {
            name: 'امور فروشگاه',
            url: '/shop',
            icon: 'icon-puzzle',
            id: false,
            children: [{
                    name: ' دسته بندی',
                    url: '/shop/category',
                    icon: 'icon-puzzle',
                    id: 7
                },
                {
                    name: 'برندها ',
                    url: '/shop/brand',
                    icon: 'icon-puzzle',
                    id: 8
                },
                {
                    name: 'معیارهای امتیاز دهی ',
                    url: '/shop/scoring',
                    icon: 'icon-puzzle',
                    id: 9
                },

            ]
        },
        {
            name: 'Base',
            url: '/base',
            icon: 'icon-puzzle',
            id: 10,
            children: [{
                    name: 'Breadcrumbs',
                    url: '/base/breadcrumbs',
                    icon: 'icon-puzzle',
                    id: 11
                },
                {
                    name: 'Cards',
                    url: '/base/cards',
                    icon: 'icon-puzzle',
                    id: 12

                },
                {
                    name: 'Carousels',
                    url: '/base/carousels',
                    icon: 'icon-puzzle',
                    id: 13

                }
            ],
        },
        {
            name: 'Buttons',
            url: '/buttons',
            icon: 'icon-cursor',
            id: 14,
            children: [{
                    name: 'Buttons',
                    url: '/buttons/buttons',
                    icon: 'icon-cursor',
                    id: 15
                },
                {
                    name: 'Button dropdowns',
                    url: '/buttons/button-dropdowns',
                    icon: 'icon-cursor',
                    id: 16
                }
            ]
        },
        {
            name: 'Charts',
            url: '/charts',
            icon: 'icon-pie-chart',
            id: 17
        },
        {
            name: 'Icons',
            url: '/icons',
            icon: 'icon-star',
            id: 18,
            children: [{
                    name: 'CoreUI Icons',
                    url: '/icons/coreui-icons',
                    icon: 'icon-star',
                    id: 19

                },
                {
                    name: 'Flags',
                    url: '/icons/flags',
                    icon: 'icon-star',
                    id: 20

                },
                {
                    name: 'Font Awesome',
                    url: '/icons/font-awesome',
                    icon: 'icon-star',
                    id: 21

                },
                {
                    name: 'Simple Line Icons',
                    url: '/icons/simple-line-icons',
                    icon: 'icon-star',
                    id: 22

                },
            ],
        },
        {
            name: 'Pages',
            url: '/pages',
            icon: 'icon-star',
            id: 23,
            children: [{
                    name: 'ورود',
                    url: '/signin',
                    icon: 'icon-star',
                    id: 24

                },
                {
                    name: 'Register',
                    url: '/register',
                    icon: 'icon-star',
                    id: 25
                },
                {
                    name: 'Error 404',
                    url: '/404',
                    icon: 'icon-star',
                    id: 26

                },
                {
                    name: 'Error 500',
                    url: '/500',
                    icon: 'icon-star',
                    id: 27

                },
            ],
        }
    ]
};