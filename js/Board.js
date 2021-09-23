class Board {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, width, height, options);

        this.width = width;
        this.height = height
        this.image = loadImage("./assets/board.png");

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }

 } for (var i = 0; i < playerArrows.length; i++) {
        if (playerArrows[i] !== undefined) {
            playerArrows[i].display();

            var board1Collision = Matter.SAT.collides(
                board1.body,
                playerArrows[i].body
            );

            var board2Collision = Matter.SAT.collides(
                board2.body,
                playerArrows[i].body
            );
        }

        if(board1Collision.collided || board2Collision.collided) {
            console.log("Collided")
        }
   
    }
