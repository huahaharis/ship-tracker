<template>
    <div class="p-4 sm:p-6 md:p-8">
        <a-card title="Shipment List" bordered class="shadow-sm rounded-lg">
            <a-spin :spinning="loading">
                <a-table :dataSource="store.shipments" row-key="id" bordered :scroll="{ x: 600 }">
                    <a-table-column title="Shipment ID" dataIndex="id" key="id" />
                    <a-table-column title="Route">
                        <template #default="{ record }">
                            {{ record.origin }} → {{ record.destination }}
                        </template>
                    </a-table-column>
                    <a-table-column title="Status">
                        <template #default="{ record }">
                            <a-tag :color="record.status === 'Delivered'
                                ? 'green'
                                : record.status === 'In Transit'
                                    ? 'blue'
                                    : 'orange'">
                                {{ record.status }}
                            </a-tag>
                        </template>
                    </a-table-column>
                    <a-table-column title="Action">
                        <template #default="{ record }">
                            <a-button type="primary" @click="goToDetail(record.id)">
                                View Details
                            </a-button>
                        </template>
                    </a-table-column>
                </a-table>
            </a-spin>
        </a-card>
    </div>
</template>

<script setup lang="ts">
import { useShipmentStore } from "../store/shipmentStore";
import { useRouter } from "vue-router";
import { ref } from "vue";

const store = useShipmentStore();
const router = useRouter();
const loading = ref(false);

function goToDetail(id: string) {
    loading.value = true;
    setTimeout(() => {
        router.push(`/shipment/${id}`);
        loading.value = false;
    }, 300);
}
</script>