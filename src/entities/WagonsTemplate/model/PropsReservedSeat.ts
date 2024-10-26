import { WagonData } from "@/widgets/SchemeWagon/model/WagonData";

export interface PropsReservedSeat {
  path: string;
  seatData: WagonData | null;
  seatNum: number;
}
