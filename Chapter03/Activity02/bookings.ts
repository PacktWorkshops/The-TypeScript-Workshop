import { checkAvailability, Flight, holdSeats, reserveSeats } from './flights';

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
): Booking => ({
  bookingNumber: bookingNumber++,
  flight,
  paid: false,
  seatsHeld,
  seatsReserved: 0,
});

const createBooking = bookingsFactory(1);

export const startBooking = (
  flight: Flight,
  seatsRequested: number
): Booking => {
  if (checkAvailability(flight, seatsRequested)) {
    holdSeats(flight, seatsRequested);
    return createBooking(flight, seatsRequested);
  }
  throw new Error('Booking not available!');
};

export const processPayment = (booking: Booking): Booking => {
  booking.paid = true;
  return booking;
};

export const completeBooking = (booking: Booking): Booking => {
  reserveSeats(booking.flight, booking.seatsHeld);
  booking.seatsReserved = booking.seatsHeld;
  booking.seatsHeld = 0;
  return booking;
};
