function Clicou()
{
    document.getElementById("Thx").innerHTML = "<b>Eu mandei não clicar!!</b>";
}

function redirect()
{
    window.open("https://linktr.ee/matheusplp"); //Outra aba
    /* window.location.href =  "https://linktr.ee/matheusplp"; //Mesma aba */
}

function Pass(_element)
{
    _element.getElementById("Over").innerHTML = "<b>Eiii não olha SAI!!</b>";
}

function Out(_element)
{
    _element.innerHTML = "<b>Não olha!!</b>";
    /* document.getElementById("Over").innerHTML = "<b>Não olha!!</b>"; */
}

function OnLoad()
{
    alert("Página Carregada");
}

function Change(_element)
{
    alert(_element.value);
}

/* alert("meu primeiro js");
var _array = ["moto", "carro", "bicicleta"];
console.log(_array);
_array.pop();
_array.push("triciculo");
console.log(_array.join(" - "));

var _fruta = {nome: "maça", cor: "vermelho"};

var _frutas = [{nome: "maça", cor: "vermelho"}, 
              {nome: "banana", cor: "amarela"}];

var _name = prompt("Qual seu nome?");
_name.toString()

var _date = new Date();
alert(_date.getMonth() + 1) //GetMounth começa do 0

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());

// Escreva o seu código aqui
console.log("NUMBER = " + valor1);
var _salary = (valor2 * valor3);
console.log("SALARY = U$ " + _salary.toFixed(2));//print decimal */