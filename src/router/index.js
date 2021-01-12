import {
  createRouter,
  createWebHistory,
  createMemoryHistory
} from "vue-router";
import canvasRoutes from "./canvas";
import countDownRoutes from "./countDown";

const routes = [
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue")
  },
  ...canvasRoutes,
  ...countDownRoutes
];

const isServer = typeof window === "undefined";

const createHistory = isServer ? createMemoryHistory : createWebHistory;

const _createRouter = () => {
  return createRouter({
    history: createHistory(),
    routes
  });
};

export default _createRouter;
