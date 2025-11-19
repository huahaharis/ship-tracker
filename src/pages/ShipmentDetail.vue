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
        <BaseSelect v-if="auth.isAdmin" v-model="selectedTransporter" :options="transporterOptions" placeholder="Select transporter" />
        <a-button v-if="auth.isAdmin" class="assign-btn" @click="assign" type="primary">
            Assign Transporter
        </a-button>
    </a-card>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import { useShipmentStore } from "../store/shipmentStore";
import { useNotification } from "../composables/useNotification";
import { useAuthStore } from "../store/authStore";
import BaseSelect from "../components/ui/BaseSelect.vue";

const { showSuccess, showError } = useNotification();

const route = useRoute();
const store = useShipmentStore();
const auth = useAuthStore();

const transporterOptions = [
    { label: "PT Transportindo", value: "PT Transportindo" },
    { label: "PT JNE Cargo", value: "PT JNE Cargo" },
    { label: "PT Sicepat Logistics", value: "PT Sicepat Logistics" },
];

const shipment = computed(() =>
  store.shipments.find((s) => s.id === route.params.id)
);

const selectedTransporter = ref("");
const loading = ref(false);

function assign() {
    if (!selectedTransporter.value) {
        showError("Please select a transporter.");
        return;
    }
    loading.value = true;
    setTimeout(() => {
        const success = store.assignTransporter( shipment.value!.id, selectedTransporter.value);
        if (success) {
            showSuccess("Transporter successfully assigned! ✅");
        } else {
            showError("Failed to assign transporter ❌");
        }
        loading.value = false;
    }, 600);
}
</script>

<style scoped>
.assign-btn {
    display: flex;
    background-color: #1677ff !important;
    border-color: #1677ff !important;
    color: white !important;
    padding: 8px 18px;
    font-size: 15px;
    border-radius: 8px;
    font-weight: 500;
    margin-top: 4px;
    justify-content: center;
    align-items: center;
    width: 100%;
    transition: all 0.25s ease;
    box-shadow: 0 2px 4px rgba(22, 119, 255, 0.25);
}

.assign-btn:hover:not([disabled]) {
    background-color: #3c8bff !important;
    border-color: #3c8bff !important;
    box-shadow: 0 3px 6px rgba(22, 119, 255, 0.35);
}

.assign-btn:active:not([disabled]) {
    background-color: #0f5ed6 !important;
    border-color: #0f5ed6 !important;
    transform: scale(0.98);
}

.assign-btn[disabled] {
    background-color: #d0d7e1 !important;
    border-color: #d0d7e1 !important;
    color: white !important;
    cursor: not-allowed !important;
    box-shadow: none !important;
    opacity: 0.6;
}
</style>
