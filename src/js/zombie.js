import Character from './character';


export default class Zombie extends Character {
    constructor(name) {
        super(name);
        this.type = 'Zombie';
        this.health = 100;
        this.level = 1;
        this.attack = 40;
        this.defence = 10;
    }

    levelUp() {
        const bonus = super.levelUp(this.health, this.level, this.attack, this.defence);
        return bonus;
    }
}
