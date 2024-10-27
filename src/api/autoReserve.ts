import { api } from ".";

interface AutoReserveType {
    id: 0;
    startpoint: "";
    endpoint: "";
    wagon_type: "";
    ticket_count: 0;
    seat_preference: [""];
    departure_dates: [""];
}

export const autoReserve = async (data: AutoReserveType) => {
  try {
    await api.post("auto-bookings", data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
