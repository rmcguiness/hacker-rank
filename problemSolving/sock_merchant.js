'use strict';

const fs = require('fs');
const reader = fs.createReadStream("../inputs/sock_merchant.txt");


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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    let totalPairs = 0;
    let counts = {}
    ar.forEach(function(i){counts[i] = (counts[i] || 0) + 1;});
    for (const [key, value] of Object.entries(counts)) {
        totalPairs += Math.floor(value/2);
    }
    return totalPairs;
}

function main() {
    const ws = fs.createWriteStream('../outputs/sock_merchant.txt');

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs