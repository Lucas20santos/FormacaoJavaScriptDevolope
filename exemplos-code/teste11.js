// Promises

let promessaNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100);
        resolve(numero)
    }, 1000);
});

console.log("Foi ????")

promessaNumeroQualquer
    .then((valor) =>
    {
    console.log(valor);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Finalizou");
    })
