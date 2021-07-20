import Support from '../classes/support';

export default class Daemon extends Support {
    constructor(name) {
        super(name, 'Daemon');
        this.defence = 40;
        this.attack = 10;
    }
}
