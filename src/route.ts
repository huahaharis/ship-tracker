import { createRouter, createWebHistory } from "vue-router";
import ShipmentList from "./pages/ShipmentList.vue";
import ShipmentDetail from "./pages/ShipmentDetail.vue";
import Login from "./pages/auth/Login.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: "/", 
      component: ShipmentList 
    },
    {
      path: "/login",
      component: Login,
      meta: { hideHeader: true, noPadding: true }
    },
    { 
      path: "/shipment/:id", 
      component: ShipmentDetail,
    },
  ],
});
