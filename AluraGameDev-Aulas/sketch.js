function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  console.log('setup');
  jogo = new Jogo();
  jogo.setup();
  
  botaoGerenciador = new BotaoGerenciador('Iniciar',width/2,height/2);
  telaInicial = new TelaInicial();
  
  cenas = {
  jogo:jogo,
  telaInicial:telaInicial 
  }
  //  somDoJogo.loop();
}

function keyPressed() {

  jogo.keyPressed(key);
}


function draw() {
  cenas[cenaAtual].draw();
  
  
  
  
  
  
} // end draw