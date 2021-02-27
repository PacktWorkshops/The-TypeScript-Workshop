import {
  checkAvailability,
  getDestinations,
  holdSeats,
  reserveSeats,
} from './flights';

describe('flights tests', () => {
  const destinations = getDestinations();
  let flight = destinations[0];
  test('get destinations', () => {
    expect(destinations).toHaveLength(7);
  });
  test('checking availability', () => {
    const destinations = getDestinations();
    expect(checkAvailability(destinations[0], 3)).toBeTruthy();
    expect(checkAvailability(destinations[1], 5)).toBeFalsy();
    expect(checkAvailability(destinations[2], 300)).toBeFalsy();
    expect(checkAvailability(destinations[3], 3)).toBeTruthy();
  });
  test('hold seats', () => {
    expect.assertions(3);
    flight = holdSeats(flight, 3);
    expect(flight.seatsHeld).toBe(3);
    flight = holdSeats(flight, 13);
    expect(flight.seatsHeld).toBe(16);
    try {
      holdSeats(flight, 15);
    } catch (e) {
      expect(e.message).toBe('Not enough seats remaining!');
    }
  });
  test('reserve seats', () => {
    expect.assertions(3);
    flight = reserveSeats(flight, 3);
    expect(flight.seatsRemaining).toBe(27);
    flight = reserveSeats(flight, 13);
    expect(flight.seatsRemaining).toBe(14);
    try {
      reserveSeats(flight, 1);
    } catch (e) {
      expect(e.message).toBe('Seats were not held!');
    }
  });
});
