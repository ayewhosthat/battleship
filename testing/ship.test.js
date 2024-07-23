import {Ship} from '../src/ship.js';

let ship1 = new Ship(4);
let ship2 = new Ship(2);
ship1.hit();
ship1.hit();
ship1.hit();
ship1.hit();

ship2.hit();

test('ship sunk', () => {
    expect(ship1.isSunk()).toBe(true)
});

test('ship not sunk', () => {
    expect(ship2.isSunk()).toBe(false);
})