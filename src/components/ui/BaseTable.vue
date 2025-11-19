<template>
    <a-table :dataSource="data" :scroll="{ x: 600 }" row-key="rowKey" bordered :pagination="false">
        <template v-for="col in columns" :key="col.key">
            <a-table-column v-bind="col" :title="col.title" :dataIndex="col.dataIndex">
                <template v-if="col.slot" #default="scope">
                    <slot :name="col.slot" v-bind="scope" />
                </template>
            </a-table-column>
        </template>
    </a-table>
</template>

<script setup lang="ts">
import { Column, PaginationType } from '../../type/type';

defineProps<{
    data: any[];
    columns: Column[];
    rowKey?: string;
    pagination?: PaginationType | null;
}>();
</script>
