//csv to be processed scrubbed 
const csvstrings = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//variables to store current cell, current row and all other rows 
let cell='';
let row = [];
let rows =[];