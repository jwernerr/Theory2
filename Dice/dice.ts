let sides: number = 6;
let dice: number = 2;
let probability: number = 0.3;

let pspace: number[][] = []
for (let i: number = 1; i <= (sides ** dice); i++) {
    let step: number = (sides ** dice) % i;
    let round: number = (sides ** dice) / (i - step);

    let next: number[] = []
    for (let j: number = 0; j < dice; j++) {
        next.push(1)
    }
    let last: number[] = next;

    if (i === 1) {
        pspace.push(next)
    }
    else {
        for (let j: number = dice - 1; j >= 0; j--) {
            if (last[j] = sides) {
                next[j] = 1
            }
            else {
                next[j] = last[j] + 1
            }
        }
        pspace.push(next);
        last = next;
    }
}

console.log(pspace);