import Character from '../classes/main';

export default class Swordman extends Character {
    constructor(name) {
        super(name, 'Swordman');
        this.attack = 40;
        this.defence = 10;
    }
}
