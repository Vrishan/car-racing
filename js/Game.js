class Game
{
 constructor()
 {}
getState()
{
    var gamestateRef = database.ref("gameState");
    gamestateRef.on("value",function(data){
    gameState = data.val();
    })
}
update(state)
{
    database.ref("/").update({
    gameState: state
    })

}
start()
{
    if(gameState == 0)
    {
        form = new Form();
        player = new Player();
        form.display();
        player.getCount();
    }
    car1 = createSprite(100,200,100,100);
    car1.addImage(car1Image);
    car2 = createSprite(300,200,100,100);
    car2.addImage(car2Image);
    car3 = createSprite(500,200,100,100);
    car3.addImage(car3Image);
    car4 = createSprite(700,200,100,100);
    car4.addImage(car4Image);
    cars = [car1,car2,car3,car4];



}
play()
{
    form.hide();
    form.resetButton.show();
    Player.getPlayerInfo();
   //textSize(30);
    //text("GAME START", displayWidth/2-40,displayHeight/2);
    background(ground);

    if(allPlayers!=undefined)
    {
        var index = 0;
        var carXPos = 175;
        var carYPos = 0;
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
       // var displayPosition = 200;
        for(var plr in allPlayers)
        {
            index = index+1;
            carXPos = carXPos+200;
            carYPos = displayHeight - allPlayers[plr].distance;
            cars[index-1].x = carXPos;
            cars[index-1].y = carYPos;

            /*if(plr === "player" + player.index)
            {
               fill("red");
            }
            else
            {
                fill("black");
            }
            textSize(15);
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance,100,displayPosition);
            displayPosition = displayPosition+20;

        }
        */
        if(index === player.index)
        {
            //cars[index-1].shapeColor = "red";
            fill("red");
            stroke(10);
            ellipse(carXPos,carYPos,75,75);
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
        }
    }
    }
        if(keyDown("up") && player.index != null)
        {
            player.distance = player.distance + 50;
            player.update();
        }
        if(player.distance >= displayHeight*5)
        {
            gameState = 2;
        }

    drawSprites();


}

end()
{
    alert("You have reached the end!");
}
}
