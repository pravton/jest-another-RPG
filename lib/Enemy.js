const Character = require('./Character');
const Potion = require('./Potion');

class Enemy extends Character {
    constructor (name, wepon) {
        super(name);

        this.wepon = wepon;
        this.potion = new Potion();  
    }

    getDescription() {
        return `A ${this.name} holding a ${this.wepon} has appeared!`; 
    }
}

Enemy.prototype = Object.create(Character.prototype);

module.exports = Enemy;