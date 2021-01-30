class Form
{
    constructor()
    {
        this.title = createElement("h2");
        this.input = createInput("name");
        this.button = createButton("Play");
        this.greeting = createElement("h3");
        this.resetButton = createButton("Reset");
    }
    hide()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
display()
{
    
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-40,0);

    
    this.input.position(displayWidth/2-40,displayHeight/2-80);

   
    this.button.position(displayWidth/2-40,displayHeight/2);
    
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        
        player.name = this.input.value();
        this.greeting.html("Hello " + player.name);
        this.greeting.position(displayWidth/2-40,displayHeight/2-80);

        playerCount = playerCount+1;
        player.index = playerCount;
        player.updateCount(playerCount);

        player.update();
    })
    this.resetButton.position(displayWidth-45,35);
    this.resetButton.hide();
    
    this.resetButton.mousePressed(()=>{
        game.update(0);
        player.updateCount(0);

    })



}



}