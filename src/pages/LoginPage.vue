<script lang="ts" setup>
import AuthLayout from "@/shared/layouts/AuthLayout.vue";
import { reactive } from "vue";
import AppBtn from "@/shared/ui/AppBtn.vue";
import type { Rule } from "ant-design-vue/es/form";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/userStore";
import { login } from "@/api/login";
import { getProfile } from "@/api/getProfile";

const router = useRouter();
const { userData } = useUserStore();

const rules: Record<string, Rule[]> = {
  name: [
    { required: true, message: "Это поле обязательное", trigger: "change" },
  ],
  lastname: [
    { required: true, message: "Это поле обязательное", trigger: "change" },
  ],
  email: [
    { required: true, message: "Это поле обязательное", trigger: "change" },
    { type: "email", message: "E-mail не корректный", trigger: "change" },
  ],
  password: [
    { required: true, message: "Это поле обязательное", trigger: "change" },
    { min: 8, message: "Минимальная длина пароля 8 символов", trigger: "blur" },
  ],
};

interface LoginType {
  email: "";
  password: "";
}

const formData = reactive<LoginType>({
  email: "",
  password: "",
});

const sendForm = async () => {
  console.log(formData);

  const res = await login(formData);
  if (res) {
    message.success("Вы успешно вошли");
    router.push("/");

    getProfile().then((res: any) => {
      console.log(res);
      userData.first_name = res.first_name;
      userData.last_name = res.last_name;
      userData.email = res.email;
      userData.isLogin = true;
    });
  } else {
    message.error("Возникла ошибка");
  }
};
</script>

<template>
  <AuthLayout>
    <a-form
      @submit.prevent="sendForm"
      style="width: 370px"
      :model="formData"
      :rules="rules"
    >
      <div class="auth-header">
        <p class="title">Вход</p>
        <p class="subtitle">Войдите, чтобы продолжить</p>
      </div>

      <div class="information-container">
        <div class="fields-container">
          <a-form-item name="email">
            <a-input
              v-model:value="formData.email"
              placeholder="E-mail"
              size="large"
            />
          </a-form-item>
          <a-form-item name="password">
            <a-input-password
              v-model:value="formData.password"
              placeholder="Пароль"
              size="large"
            />
          </a-form-item>
        </div>

        <AppBtn class="full-w">Войти</AppBtn>
      </div>

      <p class="registration-text">
        Еще нет аккаунта?
        <router-link to="/register" class="link">Зарегистрируйтесь</router-link>
      </p>
    </a-form>
  </AuthLayout>
</template>
