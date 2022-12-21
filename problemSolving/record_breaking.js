// Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

// Function Description
// Complete the breakingRecords function in the editor below.
// breakingRecords has the following parameter(s):
// int scores[n]: points scored per game

// Returns
// int[2]: An array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.

'use strict';

const fs = require('fs');
const reader = fs.createReadStream("../inputs/record_breaking.txt");

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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let max = scores[0];
    let min = scores[0];
    let hCount=0, lCount = 0;
    for (let i = 1; i< scores.length; i++){
        if(scores[i] > max){
            max = scores[i]
          ++hCount; 
        }
        if(scores[i] < min){
            min = scores[i]
            ++lCount;
        }
    }
    
    var ans = [hCount, lCount];
    return ans;

}

function main() {
    const ws = fs.createWriteStream("../outputs/record_breaking.txt");

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
