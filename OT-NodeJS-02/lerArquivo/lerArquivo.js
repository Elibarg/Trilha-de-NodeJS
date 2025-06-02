var fs = require("fs");
fs.appendFile("ArquivoNovoRenomeado.txt", "Olá NodeJS! UNISENAI 2023", function (err) {
if (err) throw err;
console.log("Arquivo Salvo!");
});