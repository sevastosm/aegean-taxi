export interface OrderData {
  waypoints: Waypoint[];
  extraOptions: any[];
  client: Client;
  notes: string;
  unitOfLength: string;
  orderSource: string;
  pickupTime: string;
  numberOfSeats: number;
  vehicleType: string;
  paymentMethods: string[];
  prepaid: boolean;
  tariffId: string;
  orderId: string;
}
interface Client {
  clientId: string;
  name: string;
  phone: string;
}
interface Waypoint {
  street: string;
  poiName: string;
  placeLatLng: PlaceLatLng;
}
interface PlaceLatLng {
  lat: number;
  lng: number;
}

export type BookingStatus =
  | "CANCELLED_BY_DISPATCH"
  | "CANCELLED_BY_DRIVER"
  | "CANCELLED_NO_PASSENGER"
  | "CANCELLED_DECIDED_NOT_TO_GO"
  | "CANCELLED_NO_TAXI"
  | "CANCELLED_DRIVER_OFFLINE"
  | "CANCELLED_SEARCH_EXCEEDED"
  | "SEARCH"
  | "ASSIGNED"
  | "STARTED"
  | "ARRIVED"
  | "TRANSFERRING"
  | "REVIEW_SUMMARY"
  | "PAYMENT"
  | "FINISHED_PAID"
  | "FINISHED_UNPAID";
