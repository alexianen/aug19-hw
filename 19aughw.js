//Ex. 5 din clasa

function tipAn(num1) {
    if (num1 % 4 === 0 && num1 % 100 != 0) {
        console.log(`Anul ${num1} este bisect`);
    }
    else if (num1 % 400 === 0) {
        console.log(`Anul ${num1} este bisect`)
    }
    else {
        console.log(`Anul ${num1} nu este bisect`);
    }
    return num1;
}

tipAn(2000);
tipAn(1000);
tipAn(2016);
tipAn(2025);


//Tema pe acasa

function calcAverage (scor1, scor2, scor3) {
    avg = (scor1 + scor2 + scor3) / 3;
    return avg;
}

let _1avgDolphins = calcAverage(44, 23, 71);
let _1avgKoalas = calcAverage(65, 54, 49);

let _2avgDolphins = calcAverage(85, 54, 41);
let _2avgKoalas = calcAverage(23, 34, 27);

function checkWinner (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas*2) {
        console.log(`Delfinii castiga ${avgDolphins} vs ${avgKoalas}`);
    }
    else if (avgKoalas >= avgDolphins*2) {
        console.log(`Koalas castiga ${avgKoalas} vs ${avgDolphins}`);
    }
    else {
        console.log("Nimeni nu castiga")
    }
}

//testul 1
console.log(`Scorul mediul al Delfinilor este ${_1avgDolphins}, iar a echipei Koalas este ${_1avgKoalas}`);
checkWinner(46, 56);
//testul 2
console.log(`Scorul mediul al Delfinilor este ${_2avgDolphins}, iar a echipei Koalas este ${_2avgKoalas}`);
checkWinner(60, 28); 