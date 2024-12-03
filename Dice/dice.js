"use strict";
let sides = 6;
let dice = 2;
let probability = 0.3;
let pspace = [];
for (let i = 1; i <= (sides ** dice); i++) {
    let step = (sides ** dice) % i;
    let round = (sides ** dice) / (i - step);
    let next = [];
    for (let j = 0; j < dice; j++) {
        next.push(1);
    }
    let last = next;
    if (i === 1) {
        pspace.push(next);
    }
    else {
        for (let j = dice - 1; j >= 0; j--) {
            if (last[j] = sides) {
                next[j] = 1;
            }
            else {
                next[j] = last[j] + 1;
            }
        }
        pspace.push(next);
        last = next;
    }
}
console.log(pspace);
