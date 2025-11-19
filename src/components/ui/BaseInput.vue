<template>
  <div class="form-group">
    <label class="form-label">{{ label }}</label>

    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      class="form-input"
      @input="onInput"
      :required="required"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  modelValue: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const onInput = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  color: #555;
  font-size: 14px;
  margin-bottom: 4px;
}

.form-input {
  padding: 10px 14px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  transition: 0.2s;
}

.form-input:focus {
  border-color: #0d153d;
  box-shadow: 0 0 0 2px rgba(10, 23, 138, 0.3);
}
</style>
