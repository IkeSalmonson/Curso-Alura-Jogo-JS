function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf')
  imagemFimDeJogo = loadImage('imagens/assets/game-over.png');
  imagemVida = loadImage('imagens/assets/coracao.png');

  fita = loadJSON('fita/fita.json') ;   
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');

}