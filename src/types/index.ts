export interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

export interface ReservationFormData {
  firstName: string;
  lastName: string;
  email: string;
  checkIn: string;
  checkOut: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}
