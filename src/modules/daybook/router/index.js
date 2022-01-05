export default {

    name: 'daybook',
    component: () =>
        import ( /* webpackChunkName: "daybook" */ '../layouts/DayBookLayout.vue'),
    children: [{
            path: '',
            name: 'no-entry',
            component: () =>
                import ( /* webpackChunkName: "daybook" */ '../views/NoEntrySelected')
        },
        {
            path: ':id',
            name: 'entry',
            component: () =>
                import ( /* webpackChunkName: "daybook" */ '../views/EntryView')
        },
    ]

}