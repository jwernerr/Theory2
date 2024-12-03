"use strict";
let sides = 6;
let dice = 2;
let probability = 0.3;
let pspace = [];
let array = [];
for (let i = 0; i < dice; i++) {
    array.push(1);
}
for (let i = 1; i <= (sides ** dice); i++) {
    let step = (sides ** dice) % i;
    let round = (sides ** dice) / (i - step);
    let last = array;
    if (i === 1) {
        pspace.push(array);
    }
    else {
        for (let j = dice - 1; j >= 0; i--) {
        }
    }
}
