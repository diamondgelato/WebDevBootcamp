/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
 function main(){
    moveDiagonal();
    moveDiagonal();
    moveDiagonal();
    moveDiagonal();
    putBeeper();
 }
 
 function moveDiagonal () {
    putBeeper();
    move();
    turnLeft();
    move();
    turnRight();
 }