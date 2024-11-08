const fs = require('fs');
const { parse } = require('csv-parse')
let elementosTablas = '';
const write = fs.createWriteStream('tabla.html')
const parser = parse({}, function (err, records) {
  for (const record of records) {
    let fila = `<tr>`;
    for (const elemento of record) {
      fila = `${fila}<td>${elemento}</td>`;
    }
    fila = `${fila}</tr>`;
    //const fila = `<tr></tr>`;
    //console.log(fila)
    elementosTablas += fila;

  }
  write.write(elementosTablas);
  //
})

fs.createReadStream('datos.csv').pipe(parser);
console.log(elementosTablas);
;