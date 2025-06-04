var clc = require("cli-color");
var erro = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;
var clc = require("cli-color");

var msg = clc.xterm(202).bgXterm(236)

console.log(msg("Orange text on dark gray background"))

console.log(clc.green("verde"));
console.log(clc.red("vermelho"));
console.log(clc.blue("azul"));
console.log(clc.yellow("amarelo"));
console.log(clc.red("red" + clc.blue("blue") + "red"));
console.log(clc.red("red") + "plain" + clc.blue("blue"));
console.log(clc,red.bgWhite.underline("Underlite red text on white backgroun"));
console.log(clc.red("text in red"));

console.log(erro("Error"));
console.log(warn("waring"));
console.log(notice("notice"));

process.stdout.write(
    clc.columns([
        [clc.bold("First Name"),clc.bold("Last Name"),clc.bold("Age")],
        ["Jonh", "Doe", 34],
        ["Martha", "Smith", 20],
        ["Jan", "Kowalski", 30]
    ])
)