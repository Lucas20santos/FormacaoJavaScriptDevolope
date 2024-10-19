const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'healthcare-dataset-stroke-data.csv');

let promessaLeituraDoArquivo = fs.promises.readFile(filePath);

promessaLeituraDoArquivo.then((files) => {
    console.log(files.toString('utf8'));
})
.catch((error) => console.log(error))
.finally(() => console.log("Finalizou"))
