class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    this.variacaoY = variacaoY;
    this.yBase = height - this.altura - this.variacaoY;
    this.y = this.yBase;
    this.gravidade = 5;
    this.velocidadeDoPulo = 0;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.invencivel = false;
  }



  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;

    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yBase) {
      this.y = this.yBase;
      this.pulos = 0;
    }
  }


  ficaInvencivel() {
    this.invencivel = true;
    setTimeout( () => {
    this.invencivel = false;
    }, 1000  )
  }
  
    estaColidindo(inimigo) {
      
      if(this.invencivel){return false}
      
    const precisao = 0.7;

    const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
    return colisao;
  }


} // end class



/*
   estaColidindoB (inimigo){
  const  precisao = 0.6;
  this.hitBoxX = this.x+this.largura * precisao/3 ;
  this.hitBoxY = this.y+this.altura * precisao/3 ;
      
      
  rect(this.hitBoxX, this.hitBoxY, this.largura * precisao, this.altura * precisao);
  rect(inimigo.x+inimigo.largura * precisao/3, inimigo.y+inimigo.altura * precisao/3, inimigo.largura * precisao, inimigo.altura * precisao);
      
  const colisao = collideRectRect(this.hitBoxX, this.hitBoxY, this.largura * precisao, this.altura * precisao, inimigo.x+inimigo.largura * precisao/2, inimigo.y+inimigo.altura * precisao/2, inimigo.largura * precisao, inimigo.altura * precisao);
  return colisao;  
  } */