import { defineStore } from "pinia";
import { useNotification } from "../composables/useNotification";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: null as null | { email: string; role: string },
  }),
  getters: {
    isAdmin: (state) => state.user?.role === "admin",
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    login(userData: { email: string; role: string }) {
      this.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
    },
    loadUser() {
      const saved = localStorage.getItem("user");
      if (saved) this.user = JSON.parse(saved);
    },
    logout() {
      const { showSuccess } = useNotification();
      this.user = null;
      showSuccess("Logout Success")
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }
});
