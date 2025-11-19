<template>
  <div class="pagination-container">
    
    <button
      class="pagination-btn"
      :class="{ disabled: currentPage === 1 }"
      @click="goPrev"
    >
      Prev
    </button>

    <button
      v-for="page in pages"
      :key="page"
      class="pagination-btn"
      :class="{ active: page === currentPage }"
      @click="changePage(page)"
    >
      {{ page }}
    </button>

    <button
      class="pagination-btn"
      :class="{ disabled: currentPage === totalPages }"
      @click="goNext"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  currentPage: number;
  total: number;
  pageSize: number;
}>();

const emit = defineEmits(["change"]);

const totalPages = computed(() =>
  Math.ceil(props.total / props.pageSize)
);

const pages = computed(() => {
  const arr: number[] = [];
  for (let i = 1; i <= totalPages.value; i++) arr.push(i);
  return arr;
});

const changePage = (page: number) => {
  emit("change", page);
};

const goPrev = () => {
  if (props.currentPage > 1) emit("change", props.currentPage - 1);
};

const goNext = () => {
  if (props.currentPage < totalPages.value) emit("change", props.currentPage + 1);
};
</script>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 18px;
  user-select: none;
}

.pagination-btn {
  padding: 6px 14px;
  font-size: 14px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0,0,0,0.06);
}

.pagination-btn:hover:not(.disabled):not(.active) {
  background: #f5f5f5;
  border-color: #1677ff;
}

.pagination-btn.active {
  background: #1677ff;
  color: white;
  border-color: #1677ff;
  box-shadow: 0 2px 4px rgba(22, 119, 255, 0.3);
}

.pagination-btn.disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
