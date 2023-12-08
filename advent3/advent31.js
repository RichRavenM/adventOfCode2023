const fs = require("fs");
const path = require("path");

function isPart(i, j) {
    const i_values = [-1, 0, 1];
    const j_values = [-1, 0, 1];
    const symbols = ['£'];

    for (const iv of i_values) {
        for (const jv of j_values) {
            if (!(i+iv < 0 || i+iv >= input.length || j+jv < 0 || j+jv >= input[0].length)) {
                if (symbols.includes(input[i+iv][j+jv]))
                    return true; }}}
    return false;
}

function getNumsBySymbol() {
    const parts = [];
    let tempBuilder = '';
    let tempPart = false;
    
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (Number.isInteger(+input[i][j])) {
                tempBuilder += input[i][j];
                tempPart = (tempPart || isPart(i, j));
            }
            if (!Number.isInteger(+input[i][j]) || j == input[i].length-1) {
                if (tempBuilder.length > 0) {
                    if (tempPart)
                        parts.push(+tempBuilder);
                    tempBuilder = '';
                    tempPart = false; }}}}
    
    return parts;
}

const x = String(fs.readFileSync("C:\\Users\\richa\\coding\\advent\\advent3\\advent3.txt")).trim().split("\n");
input = x.map(e => e.split(''));

let parts = [];
let sum = 0;

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] == '*') {
            input[i][j] = '£';
            parts = getNumsBySymbol();
            if (parts.length == 2)
                sum += parts.reduce((a,b) => a*b, 1);
            input[i][j] = '*';
        }
    }
}

console.log(sum);