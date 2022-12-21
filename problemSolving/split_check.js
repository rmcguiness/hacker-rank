'use strict';
const fs = require('fs');
const reader = fs.createReadStream("../inputs/split_check.txt");

let inputString = '';
let currentLine = 0;

reader.on('data', function(inputStdin) {
    inputString += inputStdin;
});

reader.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
    // Write your code here
    let total = bill.reduce((a,b)=> a + b, 0);
    let tk = total - bill[k];

    if(tk/2 == b){
        console.log('Bon Appetit');
    }else{
        console.log(b - tk/2);
    }

}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

    const b = parseInt(readLine().trim(), 10);

    bonAppetit(bill, k, b);
}

// Function Description

// Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

// bonAppetit has the following parameter(s):

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

// Input Format

// The first line contains two space-separated integers n and k, the number of items ordered and the 0-based index of the item that Anna did not eat.
// The second line contains n space-separated integers bill[i] where 0< i < n.
// The third line contains an integer,b , the amount of money that Brian charged Anna for her share of the bill.
