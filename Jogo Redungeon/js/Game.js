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
               
    

    start(){
    // player = new player();
    form = new forms();
    }
        
    start() {






    }




    play(){
        
    }
     



}

    

