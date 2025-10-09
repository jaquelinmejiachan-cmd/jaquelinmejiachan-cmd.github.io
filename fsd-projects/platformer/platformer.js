$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Pltform
    createPlatform(500, 600, 80, 30, "black");
    createPlatform(1000, 600, 100, 50, "red"); //bringht green for a finished plataform
    createPlatform(300, 630, 100, 110,"black");
    createPlatform(200, 700,100, 40, "black"); 
    createPlatform(400,540, 100, 400, "black");
    createPlatform(500, 460, 100, 550, "black");
    createPlatform( )
    // TODO 3 - Create Collectables
    crateCollectable("diamant",1350,50);
    createCollectable("max", 200,170, 0.5,0.7);


    
    // TODO 4 - Create Cannons
    createCannon("top", 700, 100);
    createCannon("right", 500, 9000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
