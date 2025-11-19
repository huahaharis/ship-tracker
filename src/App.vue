<template>
  <a-layout id="app" class="min-h-screen">
    <a-layout-header v-if="!$route.meta.hideHeader">
      <div class="headerMenu">
        <div>
          <h1 class="brand-title text-lg font-semibold">Ship Tracker</h1>
        </div>
        <div>
          <span v-if="!auth.isLoggedIn" @click="goToLogin" class="brand-title loginTitle">
            login
          </span>

          <span v-else @click="handleLogout" class="brand-title loginTitle">
            logout
          </span>
        </div>
      </div>
    </a-layout-header>
    <a-layout-content :style="{
      padding: $route.meta.noPadding ? '0' : '24px'
    }">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from './store/authStore';
import { useShipmentStore } from './store/shipmentStore';
import { onMounted } from 'vue';

const auth = useAuthStore();
const router = useRouter();
const store = useShipmentStore();
store.simulateUpdates();

const handleLogout = () => {
  auth.logout();
  router.push('/');
};

const goToLogin = () => {
  router.push("/login");
};

onMounted(() => {
  store.loadShipments();
})
</script>

<style scoped>
.headerMenu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.brand-title {
  color: #ffffff;
  font-weight: bold;
}

.brand-title.loginTitle {
  cursor: pointer;
  text-transform: capitalize;
}
</style>
