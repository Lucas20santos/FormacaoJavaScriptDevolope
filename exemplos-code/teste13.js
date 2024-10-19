const fs = require('fs');
const path = require('path');

var lista = []

const filePath = path.resolve(__dirname, 'healthcare-dataset-stroke-data.csv');


async function buscarArquivo() 
{
    try 
    {
        let promessaLeituraDoArquivo = await fs.promises.readFile(filePath);
        let textoDoArquivo = promessaLeituraDoArquivo.toString('utf8')
        lista = textoDoArquivo.split(",").slice(1)
        console.log(lista[1])
    } catch (error) 
    {
        console.error(error);   
    }
    finally
    {
        console.log("Finalizou finalmente");
    }
}

console.log(buscarArquivo()[1])
console.log(lista[1])
