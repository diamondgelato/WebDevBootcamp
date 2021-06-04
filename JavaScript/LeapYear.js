var year = prompt("Enter the year");
var isLeap = 0;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            isLeap = 1;
        }
        else {
            isLeap = 0;
        }
    }
    else {
        isLeap = 1;
    }
}

if (isLeap == 0) {
    alert (year + " is not a leap year");
}
else if (isLeap == 1) {
    alert (year + " is a leap year");
}