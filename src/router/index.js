import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Crear from "../components/Crear.vue";
import Editar from "../components/Editar.vue";
import Listar from "../components/Listar.vue";
import LoginView from "../views/LoginView.vue";
import RegistroAsesorView from "../views/RegistroAsesorView.vue";
import EditarAsesorView from "../views/EditarAsesorView.vue";
import ListarAsesoresView from "../views/ListarAsesoresView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/crear",
            name: "crear",
            component: Crear,
        },
        {
            path: "/editar/:id",
            name: "editar",
            component: Editar,
        },
        {
            path: "/listar",
            name: "listar",
            component: Listar,
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
        },
        {
            path: "/registroasesor",
            name: "registroasesor",
            component: RegistroAsesorView,
        },
        {
            path: "/editarasesor/:id",
            name: "editarasesor",
            component: EditarAsesorView,
        },
        {
            path: "/listarasesores",
            name: "listarasesores",
            component: ListarAsesoresView,
        },
    ],
});

export default router;
