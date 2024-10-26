import type { Rule } from "ant-design-vue/es/form";

export const rules: Record<string, Rule[]> = {
  cityFrom: [
    { required: true, message: "Это поле обязательное", trigger: "change" },
  ],
  cityTo: [
    { required: true, message: "Это поле обязательное", trigger: "change" },
  ],
  dateFrom: [
    { required: true, message: "Это поле обязательное", trigger: "change" },
  ],
};
