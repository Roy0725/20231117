import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Introduction",
      name: "Introduction",
      component: () => import("../views/Introduction.vue"),
    },
    {
      path: "/VtestAndVmodel",
      name: "VtestAndVmodel",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/VtestAndVmodel.vue"),
    },
    {
      path: "/Vfor",
      name: "Vfor",
      component: () => import("../views/Vfor.vue"),
    },
    {
      path: "/Von",
      name: "Von",
      component: () => import("../views/Von.vue"),
    },
    {
      path: "/Three",
      name: "Three",
      component: () => import("../views/Practice/Three.vue"),
    },
    {
      path: "/Vbind",
      name: "Vbind",
      component: () => import("../views/Vbind.vue"),
    },
    {
      path: "/VifAndVshow",
      name: "VifAndVshow",
      component: () => import("../views/VifAndVshow.vue"),
    },
    {
      path: "/WatchAndComputed",
      name: "WatchAndComputed",
      component: () => import("../views/WatchAndComputed.vue"),
    },
    {
      path: "/Props",
      name: "Props",
      component: () => import("../views/Props.vue"),
    },
    {
      path: "/Emit",
      name: "Emit",
      component: () => import("../views/Emit.vue"),
    },
    {
      path: "/ProvideAndInject",
      name: "ProvideAndInject",
      component: () => import("../views/ProvideAndInject.vue"),
    },
    {
      path: "/DataFlow",
      name: "DataFlow",
      component: () => import("../views/DataFlow.vue"),
    },
    {
      path: "/Accounting",
      name: "Accounting",
      component: () => import("../views/Practice/Accounting.vue"),
    },
    {
      path: "/SignUp",
      name: "SignUp",
      component: () => import("../views/Practice/SignUp.vue"),
    },
    {
      path: "/Interface",
      name: "Interface",
      component: () => import("../views/Practice/Interface.vue"),
    },
    {
      path: "/User/:userId",
      name: "User",
      component: () => import("../views/User.vue"),
      props: true,
    },
    {
      path: "/RouteFam",
      name: "RouteFam",
      component: () => import("../views/RouteFam.vue"),
      children: [
        {
          path: "RouteChild",
          component: () => import("../components/RouteChild.vue"),
        },

        {
          path: "RouteChild2",
          component: () => import("../components/RouteChild2.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component:() => import("../views/NotFound.vue")
    }
  ],
});

export default router;
