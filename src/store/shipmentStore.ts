import { defineStore } from "pinia";
import { ref, computed, onMounted, watch } from "vue";
import { useShipmentApi } from "../composables/useShipment";

export const useShipmentStore = defineStore("shipmentStore", () => {
  const api = useShipmentApi();
  
  const searchQuery = ref("");
  const currentPage = ref(1);
  const pageSize = ref(5);

  function assignTransporter(id: string, name: string) {
    const target = api.shipments.value.find(s => s.id === id);
    if (!target) return false;

    target.transporter = name;
    target.status = "Assigned";
    return true;
  }

  const simulateUpdates = () => {
    setInterval(() => {
      api.shipments.value = api.shipments.value.map((s) => {
        if (s.status === "Assigned") return { ...s, status: "In Transit" };
        if (s.status === "In Transit") return { ...s, status: "Delivered" };
        return s;
      });
    }, 5000);
  };

  const filteredShipments = computed(() => {
    const q = searchQuery.value.toLowerCase();
    return api.shipments.value.filter((s) =>
      s.origin.toLowerCase().includes(q) ||
      s.destination.toLowerCase().includes(q) ||
      (s.transporter?.toLowerCase().includes(q) ?? false)
    );
  });

  const paginatedShipments = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    return filteredShipments.value.slice(start, start + pageSize.value);
  });

  watch(searchQuery, () => {
    currentPage.value = 1;
  });

  return {
    shipments: api.shipments,
    simulateUpdates,
    loadShipments: api.loadShipments,
    assignTransporter,
    searchQuery,
    currentPage,
    pageSize,
    filteredShipments,
    paginatedShipments,
  };
});
