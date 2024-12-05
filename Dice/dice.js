"use strict";
let sides = 6;
let dice = 2;
let probability = 0.3;
let morethan = true;
let pspace = [];
//3 würfel 4 seiten i=12 ->((x-1)*4^2; (x-1)*4^1; (x-1)*4^0)->(1,4,1)
//
// for (let i: number = 0; i < (sides ** dice); i++) {
//     let item: number[] = []
//     for (let j: number = 0; j < dice; j++) {
//         item.push(0)
//     }
//     let step: number = i % sides;
//     let round: number = (i - step) / sides;
//     let index: number = i;
//     for (let j: number = 0; j < dice - 1; j++) {
//     }
//     pspace.push(item)
// }
setpspace();
console.log(pspace);
findsum();
function setpspace() {
    for (let i = 0; i < (sides ** dice); i++) {
        let item = [];
        let rem = i;
        for (let j = dice - 1; j >= 0; j--) {
            //warum die folgenden 3 zeilen nicht funktionieren ist mir ein rätsel dessen lösung ich aufgegeben habe
            // let a: number = (rem - (rem % (sides ** j)) / (sides ** j)) + 1;
            // item.push(a);
            // rem -= a * (sides ** j);
            let a = 1;
            while (rem >= sides ** j) {
                a++;
                rem -= sides ** j;
            }
            item.push(a);
        }
        pspace.push(item);
    }
}
function findsum() {
    let testspace = pspace;
    let max = dice * sides;
    let coreprob = 1 / (sides ** dice);
    let currprob = 0;
    let minsum = max + 1;
    while (currprob <= probability) {
        minsum--;
        let amount = 0;
        for (let i = 0; i < testspace.length; i++) {
            let sum = 0;
            for (let j = 0; j < testspace[i].length; j++) {
                sum += testspace[i][j];
            }
            if (sum === minsum) {
                amount++;
                testspace.splice(i, 1);
            }
        }
        currprob += amount * coreprob;
    }
    if (!morethan) {
        minsum--;
    }
    console.log(minsum);
}
