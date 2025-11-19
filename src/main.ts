import { createApp } from "vue";
import App from "./App.vue";
import router from "./route";
import { createPinia } from "pinia";
import { useAuthStore } from "./store/authStore";
import Antd from "ant-design-vue";
import 'ant-design-vue/dist/reset.css'
import "./style.css";

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(Antd)
app.use(pinia)
app.mount('#app')
const auth = useAuthStore();
auth.loadUser();
