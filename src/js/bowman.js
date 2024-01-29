import Character from "./character";


export default class Bowman extends Character {
    constructor(name) {
        super(name);
        this.type = 'Bowman';
        this.health = 100;
        this.level = 1;
        this.attack = 25;
        this.defence = 25;
    }
    levelUp() {
        const bonus = super.levelUp(this.health, this.level, this.attack, this.defence);
        return bonus;
    }
}
