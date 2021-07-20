import Support from '../classes/support';

export default class Magician extends Support {
    constructor(name) {
        super(name, 'Magician');
        this.defence = 40;
        this.attack = 40;
    }
}
