class Bola {

    constructor(x,y,r) {
     
     var options = {
      restitution: 0.3,
    
     }
    
     this.r = r;
     this.body = Bodies.circle(x,y,r, options);
            World.add(world, this.body);
    
    
    }
    display(){
    
        //Definir posição do solo
        var position = this.body.position;
    
        push();
        //Propriedades do retângulo
        fill("withe");
    
        //Exibir retângulo na tela
         ellipse(position.x,position.y,this.r);
        pop()
    }
    
    }
    
    
    