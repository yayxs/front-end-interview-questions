const routes = [
  {
    path:'/if',
    component:()=>import('../views/ifFor.vue')
  },
  {
    path:'/nextTick',
    component:()=>import('../components/NextTick.vue')
  },
  {
    path: "/key",
    component: () => import("../views/key.vue"),
  },
  {
    path:'/watchComputed',
    component:()=>import('../views/watchComputed')
  },
  {
    path:'/passByValue',
    component:()=>import('../views/passByValue')
  }
];
export default routes;
