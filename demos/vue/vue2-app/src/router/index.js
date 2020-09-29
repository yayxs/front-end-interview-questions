const routes = [
  {
    path: "/",
    redirect: "/key",
    // component: () => import("../components/Key.vue"),
  },
  {
    path: "/key",
    component: () => import("../views/key.vue"),
  },
  {
    path:'watchComputed',
    component:()=>import('../views/watchComputed')
  }
];
export default routes;
