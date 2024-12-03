let sides: number = 6;
let dice: number = 2;
let probability: number = 0.3;

let pspace: number[][] = []
let array: number[] = []
for (let i: number = 0; i < dice; i++) {
    array.push(1);
}
for (let i: number = 1; i <= (sides ** dice); i++) {
    let step: number = (sides ** dice) % i;
    let round: number = (sides ** dice) / (i - step);
    let last: number[] = array;
    if (i === 1) {
        pspace.push(array)
    }
    else {
        for (let j: number = dice - 1; j >= 0; i--) {

        }
    }
}