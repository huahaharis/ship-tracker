<template>
  <a-layout class="min-h-screen">
    <a-layout-header>
      <div class="flex justify-between items-center h-full">
        <h1 class="brand-title text-lg font-semibold">Ship Tracker</h1>
      </div>
    </a-layout-header>
    <a-layout-content style="padding: 24px;">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
.brand-title {
  color: #ffffff;
}
</style>
