function HouseKeeper (name, yearsExp, repertoire) {
    this.name = name;
    this.yearsExp = yearsExp;
    this.repertoire = repertoire;
    this.clean = function() {
        alert ("Cleaning in progress");
    }
}

var hs1 = new HouseKeeper ("Jane", 12, ["rooms", "baths"]);
console.log (hs1.name);
console.log (hs1.repertoire);
hs1.clean();