export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach((character) => this.members.add(character));
    }

    toArray() {
        return [...this.members];
    }

    * [Symbol.iterator]() {
        let index = 0;
        const chars = [...this.members];

        while (index < chars.length) {
            yield chars[index];
            index += 1;
        }
    }
}
