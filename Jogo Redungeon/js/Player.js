class Player {
    constructor() {
      this.index = null;
      this.positionX = 0;
      this.positionY = 0;
      this.score = 0;
    }
    getDistance() {
        var playerDistanceRef = database.ref("players/player" + this.index);
        playerDistanceRef.on("value", data => {
          var data = data.val();
          this.positionX = data.positionX;
          this.positionY = data.positionY;
        });
      }
      update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({
          positionX: this.positionX,
          positionY: this.positionY,
          score: this.score,
         });
      }
    
    }           