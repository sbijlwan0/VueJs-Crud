import {
    createWebHistory,
    createRouter
} from 'vue-router';
import AddEmployee from '../components/Add/AddEmployee.vue';
import ViewEmployee from '../components/View/ViewEmployee.vue';
import LoginComponent from '../components/Auth/Login.vue';
import WebContainer from '../components/WebContainer.vue';

const routes = [{
        path: '/login',
        component: LoginComponent,
        name: 'Login'
    },
    {
        path: '/web',
        component: WebContainer,
        children: [{
                path: 'add',
                component: AddEmployee,
            },
            {
                path: 'edit/:id',
                component: AddEmployee,
            },
            {
                path: 'list',
                component: ViewEmployee,
            }
        ]
    },

    {
        path: '/',
        pathMatch: 'full',
        redirect: '/login'
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;