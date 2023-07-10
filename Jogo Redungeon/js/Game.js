class Game {
    constructor() {
        
    }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value"), function (data) {
            gameState = data.val();
        }
    }

    update(state) {
            database.ref('/').update({
                gameState : state
            })
    };
               
    
    start() {
        player = new Player();
        
        forms = new forms();
        forms.display();

        cavaleiro1.addImage("cavaleiro1", atras.png);
        cavaleiro1.scale = 0.07;

        cavaleiro2.addImage("cavaleiro2", frente.png);
        cavaleiro2.scale = 0.07;
        
        cavaleiro3.addImage("cavaleiro3", esquerda.png);
        cavaleiro3.scale = 0.07;

        cavaleiro4.addImage("cavaleiro2", direita.png);
        cavaleiro4.scale = 0.07;
    }




    play(){
        
    }
     



}

    


