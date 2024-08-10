import { createRouter , createWebHistory} from "vue-router";
import HomePage from "../Views/HomePage.vue";
import AboutUs from "../Views/AboutUs.vue";



const routes = [
    {
        name : "HomePage",
        path : "/",
        component : HomePage
    },
    {
        name : "AboutUs",
        path : "/AboutUs",
        component : AboutUs
    }
    
]

const router = createRouter({
    history : createWebHistory(), routes
})

export default router;