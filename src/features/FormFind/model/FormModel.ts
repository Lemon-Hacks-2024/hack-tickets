import type { Dayjs } from "dayjs";

export interface FormModel {
  cityFrom: string;
  cityTo: string;
  dateFrom: Dayjs | null;
  dateTo: Dayjs | null;
}
