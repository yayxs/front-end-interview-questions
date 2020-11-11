const routes = [
 
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
