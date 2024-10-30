<script lang="ts" setup>
import AuthLayout from "@/shared/layouts/AuthLayout.vue";
import { reactive } from "vue";
import AppBtn from "@/shared/ui/AppBtn.vue";
import type { Rule } from "ant-design-vue/es/form";

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

interface RegisterType {
  name: "";
  lastname: "";
  email: "";
  password: "";
}

const formData = reactive<RegisterType>({
  name: "",
  lastname: "",
  email: "",
  password: "",
});

const sendForm = () => {
  console.log(formData);
};
</script>

<template>
  <AuthLayout>
    <a-form
      @finish="sendForm"
      style="width: 370px"
      :model="formData"
      :rules="rules"
    >
      <div class="auth-header">
        <p class="title">Регистрация</p>
        <p class="subtitle">Создайте новый аккаунт</p>
      </div>

      <div class="information-container">
        <div class="fields-container">
          <a-form-item name="name">
            <a-input
              v-model:value="formData.name"
              placeholder="Имя"
              size="large"
            />
          </a-form-item>
          <a-form-item name="lastname">
            <a-input
              v-model:value="formData.lastname"
              placeholder="Фамилия"
              size="large"
          /></a-form-item>

          <a-form-item name="email">
            <a-input
              v-model:value="formData.email"
              placeholder="E-mail"
              size="large"
          /></a-form-item>

          <a-form-item name="password">
            <a-input-password
              v-model:value="formData.password"
              placeholder="Пароль"
              size="large"
          /></a-form-item>
        </div>
        <AppBtn type="submit" class="full-w">Создать аккаунт</AppBtn>
      </div>

      <p class="registration-text">
        Уже есть аккаунт?
        <router-link to="/login" class="link">Войти</router-link>
      </p>
    </a-form>
  </AuthLayout>
</template>
