let sides: number = 6;
let dice: number = 2;
let probability: number = 0.3;
let morethan: boolean = true;

let pspace: number[][] = []

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

function setpspace(): void {

    for (let i: number = 0; i < (sides ** dice); i++) {
        let item: number[] = [];
        let rem: number = i;
        for (let j: number = dice - 1; j >= 0; j--) {

            //warum die folgenden 3 zeilen nicht funktionieren ist mir ein rätsel dessen lösung ich aufgegeben habe
            // let a: number = (rem - (rem % (sides ** j)) / (sides ** j)) + 1;
            // item.push(a);
            // rem -= a * (sides ** j);


            let a: number = 1;
            while (rem >= sides ** j) {
                a++;
                rem -= sides ** j;
            }
            item.push(a);
        }
        pspace.push(item);
    }

}

function findsum(): void {
    let testspace: number[][] = pspace;
    let max: number = dice * sides;
    let coreprob: number = 1 / (sides ** dice);

    let currprob: number = 0;
    let minsum: number = max + 1;

    while (currprob <= probability) {
        minsum--;
        let amount: number = 0;
        for (let i: number = 0; i < testspace.length; i++) {
            let sum: number = 0;
            for (let j: number = 0; j < testspace[i].length; j++) {
                sum += testspace[i][j];
            }
            if (sum === minsum) {
                amount++
                testspace.splice(i, 1);
            }
        }
        currprob += amount * coreprob
    }
    if (!morethan) {
        minsum--;
    }
    console.log(minsum);
}