import {
  checkAvailability,
  Flight,
  holdSeats,
  reserveSeats,
} from './flights-solution';

export interface Booking {
  bookingNumber: number;
  flight: Flight;
  paid: boolean;
  seatsHeld: number;
  seatsReserved: number;
}

const bookings: Booking[] = [];

const bookingsFactory = (bookingNumber: number) => (
  flight: Flight,
  seatsHeld: number
): Booking => {
  throw new Error('Not implemented!');
};

const createBooking = () => {
  throw new Error('Not implemented!');
};

export const startBooking = (
  flight: Flight,
  seatsRequested: number
): Booking => {
  throw new Error('Not implemented!');
};

export const processPayment = (booking: Booking): Booking => {
  throw new Error('Not implemented!');
};

export const completeBooking = (booking: Booking): Booking => {
  throw new Error('Not implemented!');
};
