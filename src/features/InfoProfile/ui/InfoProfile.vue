<script setup lang="ts">
import man from "@/shared/icons/manIcon.vue";
import woman from "@/shared/icons/womanIcon.vue";
import { onMounted, reactive } from "vue";
import type { UnwrapRef } from "vue";

import { useUserStore } from "@/store/userStore";

const { userData } = useUserStore();

interface FormState {
  layout: "horizontal" | "vertical" | "inline";
  firstName: string;
  lastName: string;
  mail: string;
}
const formState: UnwrapRef<FormState> = reactive({
  layout: "vertical",
  firstName: "",
  lastName: "",
  mail: "",
});

onMounted(() => {
  formState.firstName = userData.first_name;
  formState.lastName = userData.last_name;
  formState.mail = userData.email;
});
</script>

<template>
  <div class="info_prof">
    <p>Основная информация</p>
    <a-divider class="divider" />
    <a-flex wrap="wrap" gap="small" horizontal>
      <a-form layout="vertical">
        <div class="profile-info">
          <a-flex horizontal>
            <div>
              <a-flex vertical>
                <a-form-item label="Фамилия *" vertical>
                  <a-input
                    v-model:value="formState.firstName"
                    placeholder="Битков *"
                  />
                </a-form-item>
                <a-form-item label="Почта *">
                  <a-input
                    v-model:value="formState.mail"
                    placeholder="Example@mail.com *"
                  />
                </a-form-item>
              </a-flex>
            </div>
            <div>
              <a-flex horizontal>
                <a-form-item label="Имя *">
                  <a-input
                    v-model:value="formState.lastName"
                    placeholder="Дмитрий"
                  />
                </a-form-item>
                <!-- <div class="gender-toggle">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked
                  />
                  <label for="male">
                    <span class="icon">
                      <man />
                    </span>
                    Мужской
                  </label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                  <label for="female">
                    <span class="icon">
                      <woman />
                    </span>
                    Женский
                  </label>
                </div> -->
              </a-flex>
            </div>
          </a-flex>
        </div>
      </a-form>
    </a-flex>
  </div>
</template>

<style scoped lang="scss">
.info_prof {
  display: flex;
  flex-direction: column;
  background-color: var(--dark-color-2);
  border-radius: 20px;
  width: 70vw;
  max-height: 400px;

  p {
    font-family: "Jura";
    font-weight: 600;
    color: white;
    font-size: 30px;
    margin: 20px;
  }
}

.divider {
  background-color: var(--light-gray-color);
  margin-top: 0;
}

.profile-info {
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
}

.ant-input {
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 33px;
  stroke: var(--gray-color);
  background-color: var(--light-dark-color);
  color: #fff;
}

.ant-input::placeholder {
  color: var(--gray-color);
}

.ant-form-item {
  padding-left: 20px;
  padding-bottom: 0px;
}

:deep(.ant-form-item .ant-form-item-label > label) {
  color: var(--gray-color);
  font-size: 10px;
}

.gender-toggle {
  margin-top: 30px;
  margin-left: 20px;
  height: 54px;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
}

.gender-toggle input[type="radio"] {
  display: none;
}

.gender-toggle label {
  flex: 1;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.gender-toggle label:first-of-type {
  background-color: var(--main-color);
  color: black;
}

.gender-toggle label:last-of-type {
  background-color: var(--gray-color);
  color: white;
}

.gender-toggle input[type="radio"]:checked + label {
  background-color: var(--main-color);
  color: black;
}

.gender-toggle input[type="radio"]:not(:checked) + label {
  background-color: var(--gray-color);
  color: white;
}

.gender-toggle .icon svg {
  width: 20px;
  height: 20px;
}
</style>
