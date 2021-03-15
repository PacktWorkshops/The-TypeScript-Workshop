import {
  completeBooking,
  processPayment,
  startBooking,
} from './bookings-solution';
import { getDestinations } from './flights-solution';

const destinations = getDestinations();

// Let's fly to Lagos
let lagosBooking = startBooking(destinations[0], 1);

lagosBooking = processPayment(lagosBooking);

lagosBooking = completeBooking(lagosBooking);

console.log('Booked to Lagos', lagosBooking);
console.log('Lagos flight', destinations[0]);

// Want to go to Istanbul, but the flight is full!
try {
  startBooking(destinations[5], 7);
} catch (e) {
  console.error(e.message);
}

// Let's try the other flight to Istanbul
let istanbulBooking = startBooking(destinations[6], 7);

istanbulBooking = processPayment(istanbulBooking);

istanbulBooking = completeBooking(istanbulBooking);

console.log('Booked to Istanbul', istanbulBooking);
console.log('Istanbul flight', destinations[6]);

// Can we get one more on the flight to Istanbul?
try {
  startBooking(destinations[6], 1);
} catch (e) {
  console.error(e.message);
}
