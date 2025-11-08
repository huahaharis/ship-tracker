import { createRouter, createWebHistory } from "vue-router";
import ShipmentList from "./pages/ShipmentList.vue";
import ShipmentDetail from "./pages/ShipmentDetail.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: ShipmentList },
    { path: "/shipment/:id", component: ShipmentDetail },
  ],
});
