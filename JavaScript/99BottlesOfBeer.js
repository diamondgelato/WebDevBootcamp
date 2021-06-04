// __ bottles of beer on the wall, __ bottles of beer, Take one down and pass it around, __-1 bottles of beer on the wall
// No more bottles of beer on the wall, no more bottles of beer, Go to the store and buy some more, 99 bottles of beer on the wall

var counter = 99;

while (counter > 0) {
    console.log (counter + " bottles of beer on the wall, " + counter + " bottles of beer, \nTake one down and pass it around, " + (counter-1) + " bottles of beer on the wall\n\n");
    counter--;
}

if (counter == 0) {
    console.log ("No more bottles of beer on the wall, no more bottles of beer, \nGo to the store and buy some more, 99 bottles of beer on the wall");
}