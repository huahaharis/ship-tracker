import { setActivePinia, createPinia } from "pinia";
import { useShipmentStore } from "../store/shipmentStore";
import { beforeEach, expect, test } from "vitest";

beforeEach(() => {
  setActivePinia(createPinia());
});

test("assignTransporter works", () => {
  const store = useShipmentStore();
  const result = store.assignTransporter("SHP-001", "JNE");

  expect(result).toBe(true);
  expect(store.shipments[0].transporter).toBe("JNE");
});
