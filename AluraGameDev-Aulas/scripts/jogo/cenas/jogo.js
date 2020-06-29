class Jogo {
  constructor() {
    this.indice = 0
    this.mapa = fita.mapa


  }

  setup() {
    cenario = new Cenario(imagemCenario, 10);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracao.vidaMaxima, fita.configuracao.vidaInicial);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 10, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30,
      52, 52,
      104, 104, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);

    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 180, 100, 75,
      200, 150, 10);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {

      personagem.pula();
      somDoPulo.play();
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();
    personagem.exibe();
    personagem.aplicaGravidade();
    pontuacao.adicionarPontos();
    pontuacao.exibe();

    vida.draw();
    const linhaAtual = this.mapa[this.indice]
    const inimigo = inimigos[linhaAtual.inimigo];
    console.log(this.inimigoAtual)
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    inimigo.exibe();
    inimigo.move();
    inimigo.velocidade = linhaAtual.velocidade;

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece()
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;

      }
    }

      if (personagem.estaColidindo(inimigo)) {
        vida.perdeVida();
        personagem.ficaInvencivel();

        if (vida.vidas === 0) {
          console.log('colidiu');
          image(imagemFimDeJogo, width / 2 - 200, height / 3)
          noLoop();
        }
      }


    }


  } // end class