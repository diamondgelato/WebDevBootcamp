//jshint esversion:6

const fs = require("fs");
var superheroes = require("superheroes");
const supervillains = require('supervillains');

// Basic "Hello" Message
// console.log ("Hello!");

// Copy files
// fs.copyFileSync ("file1.txt", "file2.txt");

// Generate random superhero names (external package)
// var superheroName = superheroes.random()
// console.log (superheroName);

// Generate random supervillain names (external package)
var supervillainName = supervillains.random()
console.log (supervillainName);