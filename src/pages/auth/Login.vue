<template>
    <div class="page-container">

        <div v-if="loading" class="loading-overlay">
            <a-spin size="large" tip="Signing in..." />
        </div>

        <div class="bg-wrapper" :style="{ backgroundImage: `url('/src/assets/bg.jpg')` }">

            <div class="header">
                <div class="brand">Tracker App</div>
                <div class="header-actions">
                    <button class="btn-help">
                        <i class="fa-regular fa-user"></i>
                        Help
                    </button>
                    <button class="btn-signup">Sign Up</button>
                </div>
            </div>

            <div class="login-card">
                <h2 class="login-title">Sign In</h2>
                <p class="login-subtitle">Hey, enter details to get sign up to your account</p>

                <form @submit.prevent="handleLogin" class="form">

                    <BaseInput
                        label="Email"
                        v-model="form.email"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />

                    <BaseInput
                        label="Password"
                        v-model="form.password"
                        type="password"
                        placeholder="Enter your password"
                        required
                    />

                    <div class="forgot-wrapper">
                        <a class="forgot-link">Forgot password?</a>
                    </div>

                    <button class="btn-submit" type="submit" :disabled="loading">
                        Sign In
                    </button>
                </form>

                <div class="divider">- Or Sign in with -</div>

                <div class="social-wrapper">
                    <button class="social-btn">
                        <i class="fa-brands fa-google social-google"></i>
                        Google
                    </button>

                    <button class="social-btn">
                        <i class="fa-brands fa-facebook social-facebook"></i>
                        Facebook
                    </button>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../store/authStore";
import { useNotification } from "../../composables/useNotification";
import { simulateLogin } from "../../composables/useAuth";
import BaseInput from "../../components/ui/BaseInput.vue";

const router = useRouter();
const auth = useAuthStore();
const { showSuccess, showError } = useNotification();

const loading = ref(false);

const form = reactive({
  email: "",
  password: "",
});

const handleLogin = () => {
  loading.value = true;

  simulateLogin(form.email, form.password)
    .then((res: any) => {
      if (res.message === "Login Success") {
        showSuccess(res.message);
        auth.login(res.data.user);
        localStorage.setItem("token", res.data.token);
        router.push("/");
      }
    })
    .catch((err) => {
      showError(err.message || "Login failed!");
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

<style scoped>

.page-container {
    position: relative;
    min-height: 100vh;
    background: #f0f6ff;
    overflow: hidden;
}

.bg-wrapper {
    position: relative;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 16px;
}

.loading-overlay {
    position: fixed;
    inset: 0;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 16px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 20;
}

.brand {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
}

.header-actions {
    display: flex;
    gap: 12px;
}

.btn-help {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border: 1px solid #ccc;
    background: white;
    color: #333;
    border-radius: 999px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.2s;
}

.btn-signup {
    background: #0d153d;
    color: white;
    padding: 8px 20px;
    border-radius: 999px;
    font-size: 15px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: 0.2s;
}

.login-card {
    margin-top: 120px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    border-radius: 20px;
    padding: 40px;
    width: 100%;
    max-width: 420px;
    text-align: center;
    z-index: 10;
}

.login-title {
    font-size: 28px;
    font-weight: bold;
    color: #222;
}

.login-subtitle {
    color: #666;
    font-size: 14px;
    margin-bottom: 24px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: left;
}

.forgot-wrapper {
    text-align: right;
}

.forgot-link {
    font-size: 12px;
    color: #3b82f6;
    cursor: pointer;
}

/* Login button */
.btn-submit {
    width: 100%;
    padding: 10px;
    background: #0d153d;
    color: white;
    font-weight: 600;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    font-size: 15px;
    transition: 0.2s;
}

.divider {
    margin: 24px 0;
    font-size: 13px;
    color: #999;
}

.social-wrapper {
    display: flex;
    justify-content: center;
    gap: 12px;
}

.social-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 16px;
    border: 1px solid #ccc;
    background: white;
    border-radius: 999px;
    cursor: pointer;
    transition: 0.2s;
}

.social-google {
    color: #e63946;
}

.social-facebook {
    color: #1877f2;
}

</style>
