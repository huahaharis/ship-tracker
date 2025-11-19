import { ref } from "vue";
import { Shipment } from "../type/type";


export function useShipmentApi() {
  const shipments = ref<Shipment[]>([]);

  async function loadShipments() {
    const data = (await import("../mock/shipments.json")).default;
    shipments.value = data;
  }

  return {
    shipments,
    loadShipments,
  };
}
