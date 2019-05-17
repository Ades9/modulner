var LivingCreature = require("./LivingCreature.js");
module.exports = class Gishatich extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index);
         this.energy = 12;
    }

    move() {
        var newCord = random(this.chooseCell(0));
        if (this.acted == false) {
            if (newCord) {
                var newX = newCord[0];
                var newY = newCord[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.acted = true;
                this.energy--;
                if (this.energy <= 0) {
                    this.die();
                }
            }
        }
    }
    mul() {
        this.multiply++;
        var newCord = random(this.chooseCell(0));

        if (newCord && this.multiply >= 8) {
            var newX = newCord[0];
            var newY = newCord[1];

            matrix[newY][newX] = new Gishatich(newX, newY, 3);
            this.multiply = 0;
        }
    }
    eat() {
        var newCord = random(this.chooseCell(2));
        if (this.acted == false) {
            if (newCord) {
                var newX = newCord[0];
                var newY = newCord[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;

                this.energy++;
                this.acted = true;
                if (this.energy >= 16) {
                    this.mul();
                }
            }
            else {
                this.move();
            }

        }

    }
    die() {

        matrix[this.y][this.x] = 0;
    }
}
