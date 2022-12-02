//atividades de array Proa


//1

var numerofinal = 20; 
var array = [];
var array2 = array.join(' ')
for (let numeros = 0; numeros < numerofinal; numeros++) {
    let numerousuer = parseInt(prompt("insira um numero"))
    array.push(numerousuer + "<br>")
    console.log(numeros);
}
var array2 = array.join(' ')
document.getElementById("conteudo").innerHTML = array2
console.log(array2);


var maior = [];
var menor = [];
var numerofinal = 12;

for(let i = 0; i < 12; i++){
    let usuario = parseInt(prompt("digite os numeros:"));
    if(usuario < 50){
        menor.push(usuario);
    }
    else{
        maior.push(usuario);
    }
}

document.getElementById("dentro").innerHTML = "A baixo de 50: <br>" + menor;
document.getElementById("fora").innerHTML = "A cima de 50: <br>" + maior;



var drofo = ["anel da invisibilidade", " par de bota magica", " par de bota magica", " poção do sono", " poções da inocência", " poções da inocência",];
var topper = ["capa da invisibilidade", " pedra do despertar", " varinha das varinhas", " poção da inocencia", " poção da mentira", " poção da mentira", " poção anti-inteligência"];

topper.splice(4,1) //remove uma poção da mentira
topper.splice(1,1, " par de botas magica")//remove a pedra do despertar
drofo.splice(1,1);//remove um par de botas que fopi para o topper
topper.push(" escudo magico", " espada magica");//adiciona oos intem encontrados pelo topper

drofo.push(" bota magica");//acha mais uma bota magica
drofo.splice(2,1);// remove a poão do sono
topper.splice(5,1);// uso da poção anti inteligencia do drofo
drofo.push(" ovo de dragão", " coixinha");// adciona os intens achados pelo drofo



document.getElementById("drofo").innerHTML = "<strong> iventario do drofo: </strong>" + "<br> <br>" + drofo;

document.getElementById("topper").innerHTML = "<strong> inventario do topper: </strong>" + "<br> <br>" + topper;

