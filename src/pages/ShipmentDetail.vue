<template>
    <a-breadcrumb class="mb-4">
        <a-breadcrumb-item>
            <router-link to="/" class="text-blue-500 hover:underline">
                Shipment List
            </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item class="cursor-pointer">Detail</a-breadcrumb-item>
    </a-breadcrumb>
    <a-card :title="`Shipment Detail – ${shipment?.id}`" class="bg-white shadow-lg rounded-lg">
        <div class="space-y-2 text-gray-700 text-[15px]">
            <p><b>Route:</b> {{ shipment?.origin }} → {{ shipment?.destination }}</p>
            <p><b>Vehicle:</b> {{ shipment?.vehicle }}</p>
            <p><b>Current Transporter:</b> {{ shipment?.transporter ?? "-" }}</p>
        </div>
        <a-divider />
        <a-form layout="vertical" @submit.prevent class="mt-4">
            <a-form-item label="Assign Transporter" required>
                <a-select v-model:value="selectedTransporter" :options="transporterOptions"
                    placeholder="Select transporter..." style="width: 100%;" allow-clear show-search />
            </a-form-item>
            <a-button type="primary" :loading="loading" block @click="assign">
                Assign Transporter
            </a-button>
        </a-form>
    </a-card>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import { useShipmentStore } from "../store/shipmentStore";
import { message } from "ant-design-vue";

const route = useRoute();
const store = useShipmentStore();
const shipment = store.shipments.find((s) => s.id === route.params.id);

const transporterOptions = [
    { label: "PT Transportindo", value: "PT Transportindo" },
    { label: "PT JNE Cargo", value: "PT JNE Cargo" },
    { label: "PT Sicepat Logistics", value: "PT Sicepat Logistics" },
];

const selectedTransporter = ref<string>(shipment?.transporter ?? "");
const loading = ref(false);

function assign() {
    if (!selectedTransporter.value) {
        message.error("Please select a transporter.");
        return;
    }
    loading.value = true;
    setTimeout(() => {
        const success = store.assignTransporter(shipment!.id, selectedTransporter.value);
        if (success) {
            message.success("Transporter successfully assigned! ✅");
        } else {
            message.error("Failed to assign transporter ❌");
        }
        loading.value = false;
    }, 600);
}
</script>
