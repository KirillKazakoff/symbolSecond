/* eslint-disable no-restricted-syntax */
import Team from '../js/app';
import Person from '../js/mainClasses/person';

let team;

beforeEach(() => {
    team = new Team();
    team.add(new Person('Лучник'));
    team.add(new Person('Лучник'));
});

test('successful characters output', () => {
    const expected = [new Person('Лучник'), new Person('Лучник')];
    const result = [];

    for (const char of team) {
        result.push(char);
    }

    expect(result).toEqual(expected);
});
