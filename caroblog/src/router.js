import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'
import Create from '@/components/Create'
import Edit from '@/components/Edit'
import Details from '@/components/Details'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/create',
            name: 'create',
            component: Create
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: Edit
        },
        {
            path: '/details/:id',
            name: 'details',
            component: Details
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        },
    ]
})