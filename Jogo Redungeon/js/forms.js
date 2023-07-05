class forms {
    constructor(){
        this.playButton = createButton("Play");
        this.titleImg = createImg("assets/R.png", "game title");
    }
    
    setElementsPosition() {
        this.titleImg.position(width/2, height/2);
        this.playButton.position(width/2, height / 2 - 300);
    }

    setElementsStyle() {
        this.titleImg.class("gameTitle");
        this.playButton.class("buttonPlay");
    }

    hide() {
    this.playButton.hide();
    this.titleImg.hide();
    }

    handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.playButton.hide();

    })
    }

    display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    }
    }