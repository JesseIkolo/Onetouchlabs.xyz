// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import WelCome from './components/Welcome'
import TrainingDetails from './components/TrainingDetails'

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: WelCome},
        { path: '/trainings/:id', component: TrainingDetails}

    ]
});


const app= createApp(App)

app.use(router)

app.mount('#app')