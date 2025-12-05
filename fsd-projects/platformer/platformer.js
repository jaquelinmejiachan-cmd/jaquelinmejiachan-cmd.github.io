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
    createPlatform(500, 600, 80, 20, "black");
    createPlatform(1300, 600, 100, 20, "red"); //bringht green for a finished plataform
    createPlatform(300, 620, 100, 25,"black");
    createPlatform(200, 700,100, 40, "black"); 
    createPlatform(400, 540, 100, 25, "black");
    createPlatform(500, 460, 100, 25, "black");
    createPlatform(700, 600, 90, 20, "black");
    createPlatform(850, 520, 60, 20, "black"); 
    createPlatform(1000, 550, 250, 20, "black");
    

    // TODO 3 - Create Collectables
    createCollectable("diamond",1350,50);
    createCollectable("max", 200,170, 0.5,0.7);


    
    // TODO 4 - Create Cannons
   createCannon("top", 700, 950);
    createCannon("right", 400, 950);
    createCannon("top", 150, 900);
    createCannon("right", 700, 950 );
    createCannon("top", 900, 925);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
