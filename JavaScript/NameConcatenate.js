var name = prompt ("Enter your name");
var length = name.length;
var formattedName = name.slice(0,1).toUpperCase() + name.slice(1,length).toLowerCase();

alert ("Hello, " + formattedName);