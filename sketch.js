
let palavra//Cria variavel GLOBAL palavra
function palavraAleatoria() {  // cria função palavraAleatoria
let palavras = ["Banana","Morango","Uva","Kiwi","Laranja", "Abacaxi"];
return random(palavras); //retorna a palavra sorteada para a chamada da função
}
function setup() { 
createCanvas(600, 400);// cria a tela e define tamanho (x,y) (largura/ altura)
palavra = palavraAleatoria();// chama a função palavraAleatoria()
}
function inicializaCores(){ // cria a função inicializaCores
background("#F5E7BD"); // cor de fundo da tela
fill("black");//cor da caneta/letra
textSize(64); // tamanho da fonte
textAlign(CENTER, CENTER);//alinhamento do texto
}
function draw() {
inicializaCores();//chama a função inicializaCores()
let maximo = width; // cria a variavel maximo e define o valor com a largura da tela
let minimo = 0; // cria a variavelminimo e define o valor como 0
let quantidade = map (mouseX ,0 , width,0,palavra.length);
  
if(quantidade< 1){ 
palavra = palavraAleatoria();
}

let parcial = palavra.substring(0,quantidade);
text(parcial,300,200);
} 
