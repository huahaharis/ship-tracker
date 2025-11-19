<template>
    <div class="p-4 sm:p-6 md:p-8">
        <a-card title="Shipment List" bordered class="shadow-sm rounded-lg">
            <BaseSearch 
                v-model="store.searchQuery" 
                placeholder="Search origin / destination / transporter..."
                class="mb-4" />
            <a-spin :spinning="loading">
                <BaseTable :data="store.paginatedShipments" :columns="columns" rowKey="id">
                    <template #route="{ record }">
                        {{ record.origin }} → {{ record.destination }}
                    </template>

                    <template #transporter="{ record }">
                        {{ record.transporter === null ? "-" : record.transporter}}
                    </template>

                    <template #status="{ record }">
                        <a-tag :color="record.status === 'Delivered'
                            ? 'green'
                            : record.status === 'In Transit'
                                ? 'blue'
                                : 'orange'">
                            {{ record.status }}
                        </a-tag>
                    </template>
                    

                    <template #action="{ record }">
                        <a-button type="primary" @click="goToDetail(record.id)">
                            View Details
                        </a-button>
                    </template>

                </BaseTable>
                <BasePagination :currentPage="store.currentPage" :pageSize="store.pageSize"
                    :total="store.filteredShipments.length" @change="store.currentPage = $event" />
            </a-spin>
        </a-card>
    </div>
</template>

<script setup lang="ts">
import { useShipmentStore } from "../store/shipmentStore";
import { useRouter } from "vue-router";
import { ref } from "vue";
import BaseTable from "../components/ui/BaseTable.vue";
import BasePagination from "../components/ui/BasePagination.vue";
import BaseSearch from "../components/ui/BaseSearch.vue";

const store = useShipmentStore();

const router = useRouter();
const loading = ref(false);

const columns = [
    {
        title: "Shipment ID",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Route",
        key: "route",
        slot: "route",
    },
    {
        title: "Transporter Name",
        key: "transporter",
        slot: "transporter",
    },
    {
        title: "Status",
        key: "status",
        slot: "status",
    },
    {
        title: "Action",
        key: "action",
        slot: "action",
    },
];

function goToDetail(id: string) {
    loading.value = true;
    setTimeout(() => {
        router.push(`/shipment/${id}`);
        loading.value = false;
    }, 300);
}
</script>