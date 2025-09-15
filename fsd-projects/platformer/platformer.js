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
    //toggleGrid();


  // Create Platforms
createPlatform(250, 650, 20, 40);

createPlatform(600, 500, 20, 700);

createPlatform(400, 600, 20, 700);
 createPlatform(800, 600, 20, 700);
createPlatform(400, 370, 60, 20);

createPlatform(300,300, 60, 20);

createPlatform(400,170, 60, 20);

createPlatform(500,100, 60, 20);

createPlatform(650,150, 60, 20);

createPlatform(800,200, 60, 20);

createPlatform(950,200, 60, 20);

createPlatform(1150,200, 60, 20);

createPlatform(1300,200, 100, 20);




   //  TODO 3 - Create Collectables
createCollectable("database", 400, 550, 0.7, 1)
createCollectable("steve", 650, 100)
createCollectable("kennedi", 1300, 150)



    
    // TODO 4 - Create Cannons
createCannon("top", 250, 600);
createCannon("right", 150, 3000);
createCannon("bottom", 450, 1000);
 
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
