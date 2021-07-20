/* eslint-disable no-underscore-dangle */
import Character from './main';

export default class Support extends Character {
    set attack(value) {
        this._attack = value;
    }

    get attack() {
        const k = 1 - (this.distance - 1) * 0.1;

        let modAttack = this._attack * k;
        if (this.stoned) {
            const debuff = Math.log2(this.distance) * 5;
            modAttack -= debuff;
        }
        if (modAttack < 0) {
            return 0;
        }
        return modAttack;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }
}
