import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import shipmentsData from "../mock/shipments.json";
import type { Shipment } from "../type/type";

export const useShipmentStore = defineStore("shipmentStore", () => {
  const shipments = ref<Shipment[]>(shipmentsData);
  const assignTransporter = (shipmentId: string, transporterName: string) => {
    const shipment = shipments.value.find((s) => s.id === shipmentId);
    if (!shipment) return false;
    shipment.transporter = transporterName;
    shipment.status = "Assigned";
    return true;
  };

  function simulateUpdates() {
    setInterval(() => {
      shipments.value.forEach((s) => {
        if (s.status === "Assigned") s.status = "In Transit";
        else if (s.status === "In Transit") s.status = "Delivered";
      });
    }, 5000);
  }

  onMounted(simulateUpdates);

  return { shipments, assignTransporter };
});
