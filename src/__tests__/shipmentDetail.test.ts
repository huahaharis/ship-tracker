import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useShipmentStore } from "../store/shipmentStore";

describe("Shipment Store - assignTransporter", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should assign transporter and change status to Assigned", () => {
    const store = useShipmentStore();

    if (!store.shipments.length) {
      store.shipments.push({
        id: "SHP-001",
        origin: "Jakarta",
        destination: "Bandung",
        vehicle: "Truck",
        transporter: null,
        status: "Not Assigned",
      });
    }

    const id = store.shipments[0]?.id;
    expect(id).toBeDefined();

    const result = store.assignTransporter(id, "PT Test Logistics");

    expect(result).toBe(true);
    expect(store.shipments[0].transporter).toBe("PT Test Logistics");
    expect(store.shipments[0].status).toBe("Assigned");
  });

  it("should not assign transporter for invalid shipment ID", () => {
    const store = useShipmentStore();

    const result = store.assignTransporter("INVALID_ID", "PT Test Logistics");

    expect(result).toBe(false);
  });
});
