//csv to be processed scrubbed 
const csvstrings = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//variables to store current cell, current row and all other rows 
let cell='';
let row = [];
let rows =[];

//loop thru each character in csv
for (let i = 0; i < csvstrings.length; i++) {
    let char = csvstrings[i]; // Get the current character

    if (char === ',') {
        // When a comma is encountered, move to the next cell
        row.push(cell);
        cell = '';
    } else if (char === '\n') {
        // When a /n is encountered, log the current row and reset cells and counter
        row.push(cell);
        rows.push(row)
        row = [];
        cell = '';
    } else {
        cell += char;
    }
}
// Push the last cell and row if any
if (cell) {
    row.push(cell);
}
if (row.length > 0) {
    rows.push(row);
}

// Log each row
for (let i = 0; i < rows.length; i++) {
    console.log(rows[i][0], rows[i][1], rows[i][2], rows[i][3]);
}