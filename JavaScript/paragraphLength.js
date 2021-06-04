var paragraph = prompt("Enter a paragraph");
var length = paragraph.length;
var lengthLeft = 140 - length;


alert ("String entered:\n" + paragraph.slice(0, 140) + "\n\nYou have typed " + length + " characters, you have " + lengthLeft + " characters left." )