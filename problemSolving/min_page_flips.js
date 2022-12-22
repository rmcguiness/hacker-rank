'use strict';

const fs = require('fs');
const reader = fs.createReadStream("../inputs/min_page_flip.txt");

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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    let fromFront = Math.floor(p/2);
    let fromBack = Math.floor(n/2) - fromFront;
    return Math.min(fromFront, fromBack);
}

function main() {
    const ws = fs.createWriteStream('../outputs/min_page_flip.txt');

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}

// A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time.
// Function Description
// Complete the pageCount function in the editor below.
// pageCount has the following parameter(s):

// int n: the number of pages in the book
// int p: the page number to turn to

// Returns
// int: the minimum number of pages to turn

// Input Format
// The first line contains an integer n, the number of pages in the book.
// The second line contains an integer, p, the page to turn to.