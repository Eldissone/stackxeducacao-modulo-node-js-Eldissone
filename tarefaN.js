
console.time();
console.log("inicio do codigo");

const fs = require("fs/promises");
const fs1 = require("fs");
const fs2 = require("fs");
const path = require("path");

const readline = require("readline");

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function inicioExecucao(){
setTimeout(() => leitor.question("qual é o caminho do arquivo?", function(resposta){

    fs.readdir(path.join(resposta)).then(files => {

    const filtro = ['.txt']
    const Arquivos = files.filter(file => filtro.includes(path.extname(file)));
   
   fs1.readFile("arquivo.txt", "utf8", (err, data) => {
       if(err){
           console.error(err);
           return;
        }

        console.log(data);
        let soma = 0;

        const listas = data.split("\r\n");

        const listaNumeros = listas.filter((item) => !isNaN(item))
        .map((numero) =>(soma = soma + parseInt(numero)));

        const listaTexto = listas.filter((item) => isNaN(item));
        
        console.log("Número total de linhas:",listas.length);
        
        console.log("Número de linhas só com números: ",listaNumeros.length);
        
        console.log("Número de linhas só com textos: ",listaTexto.length);
        
        console.log ("Soma dos Número: ",soma);

        const readP = require("readline");

        const pergunta = readP.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        newFunction();
           
       function newFunction() {
           pergunta.question("Quer executar novamente? s ou n: ", (resposta1) => {
               if (resposta1.toLowerCase() == 's') {
                   console.log("executar novamente o programa");
                   pergunta.close();
                   inicioExecucao();
                   
                } else {

                    console.log("fim de execução do programa");
                    console.timeEnd();
                    pergunta.close();
                }
            });
        }
        newFunction();
    })
});
}), 500);
}
inicioExecucao();