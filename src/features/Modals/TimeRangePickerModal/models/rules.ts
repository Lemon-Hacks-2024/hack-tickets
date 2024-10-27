// rules.ts
import dayjs, { Dayjs } from "dayjs";

export const rules = {
  dateFrom: [
    { required: true, message: "Пожалуйста, выберите дату отправления" },
    {
      validator: (_: any, value: Dayjs | null) => {
        if (!value) {
          return Promise.reject("Дата отправления не может быть пустой");
        }
        if (value.isBefore(dayjs(), "day")) {
          return Promise.reject("Дата отправления не может быть в прошлом");
        }
        return Promise.resolve();
      },
    },
  ],
  dateTo: [
    { required: true, message: "Пожалуйста, выберите дату возвращения" },
    {
      validator: (_: any, value: Dayjs | null, formData: any) => {
        if (!value) {
          return Promise.reject("Дата возвращения не может быть пустой");
        }
        if (value.isBefore(dayjs(), "day")) {
          return Promise.reject("Дата возвращения не может быть в прошлом");
        }
        if (formData.dateFrom && value.isBefore(formData.dateFrom, "day")) {
          return Promise.reject("Дата возвращения не может быть раньше даты отправления");
        }
        return Promise.resolve();
      },
    },
  ],
};
