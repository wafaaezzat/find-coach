import {createRouter, createWebHistory} from 'vue-router';
const router =createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',redirect:'/coaches'},
        {path:'/coaches',Component:null},
        {path:'/coaches/:id',Component:null,children:[
            {path:'contact',Component:null},
        ]},
        {path:'/register',Component:null},
        {path:'/requests',Component:null},
        {path:'/:notFound(.*)',Component:null},
]
});

export default router ;