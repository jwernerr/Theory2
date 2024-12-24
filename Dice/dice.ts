let sides: number = 6;
let dice: number = 2;
let probability: number = 0.3;
let morethan: boolean = true;

let pspace: number[][] = []

window.addEventListener("load", handleLoad);

function submit(): void {
    let diceslider: HTMLInputElement = <HTMLInputElement>document.getElementById("dice");
    dice = Number(diceslider.value);

    let sidesslider: HTMLInputElement = <HTMLInputElement>document.getElementById("sides");
    sides = Number(sidesslider.value);

    let probslider: HTMLInputElement = <HTMLInputElement>document.getElementById("probability");
    probability = Number(probslider.value);

    setpspace();
    console.log(pspace);

    let contentdiv: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
    contentdiv.innerHTML = "You shall pass if you roll at least " + findsum() + "."
}

function handleLoad(): void {



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

    function findsum(): number {
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
        return minsum;
    }
}