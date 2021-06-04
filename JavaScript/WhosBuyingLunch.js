function selectPerson (names) {
    var index = Math.round(Math.random() * names.length);
    return (names[index] + " is buying lunch.");
}

names = ["Michael", "Susan", "Jack", "Annie", "Mugdha"];
alert (selectPerson(names));