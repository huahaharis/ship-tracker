<template>
  <div class="search-wrapper">
    <div class="search-container">
      <button
        v-if="modelValue"
        class="clear-btn"
        @click="$emit('update:modelValue', '')"
      >
        ✕
      </button>
      <input
        class="search-input"
        :value="modelValue"
        type="text"
        :placeholder="placeholder"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  placeholder?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

function onInput(event: Event) {
  const target = event.target as HTMLInputElement | null;
  if (target) {
    emit("update:modelValue", target.value);
  }
}
</script>

<style scoped>
.search-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 10px;
}

.search-container {
  position: relative;
  width: 360px;
}

.search-input {
  width: 100%;
  padding: 10px 14px;
  padding-left: 14px;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  outline: none;
  transition: 0.2s ease;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.search-input:hover {
  border-color: #1677ff;
}

.search-input:focus {
  border-color: #1677ff;
  box-shadow: 0 0 0 2px rgba(22,119,255,0.2);
}

.clear-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.2s ease;
}

.clear-btn:hover {
  opacity: 1;
}
</style>
