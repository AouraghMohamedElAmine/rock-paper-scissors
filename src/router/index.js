import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import GameView from "../views/GameView.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainView,
  },
  {
    path: "/play",
    name: "play",
    component: GameView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
