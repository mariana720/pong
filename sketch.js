function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 10;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaRaquete();
  verificaColisaoRaquete ();
}


function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(){
  rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete);
}

function movimentaRaquete(){
if (keyIsDown(87)){
  yRaquete -= 5;
}
  if (keyIsDown(83)){
    yRaquete += 5;
  }
}
  function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + comprimentoRaquete
        && yBolinha - raio < yRaquete + alturaRaquete
        && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }
}