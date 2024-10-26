import { BookingStatus } from "./BookingStatus";

export interface WagonData {
  seat_id: number;
  seatNum: number;
  block: number;
  price: number;
  bookingStatus: BookingStatus;
}
