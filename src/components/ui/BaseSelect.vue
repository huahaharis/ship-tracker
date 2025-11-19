<template>
  <div class="select-wrapper">
    <select
      class="select-input"
      :value="modelValue"
      @change="onChange"
    >
      <option disabled value="">{{ placeholder }}</option>
      <option
        v-for="item in options"
        :key="item.value"
        :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  options: { label: string; value: string }[];
  placeholder?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

function onChange(e: Event) {
  const target = e.target as HTMLSelectElement;
  emit("update:modelValue", target.value);
}
</script>

<style scoped>
.select-input {
  width: 100%;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  font-size: 14px;
  transition: 0.3s;
}

.select-input:hover {
  border-color: #1677ff;
}

.select-input:focus {
  border-color: #1677ff;
  outline: none;
  box-shadow: 0 0 0 2px rgba(22,119,255,0.2);
}
</style>
