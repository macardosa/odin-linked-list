import { createLinkedList } from "./LinkedList";

describe('append', () => {
    const list = createLinkedList();

    it('should exist', () => {
        expect(list.append).toBeDefined();
    });

    it('should add a first value', () => {
        list.append(1);
        expect(list.toString()).toBe('( 1 ) -> null');
    });

    it.each([
        {
            input: 2,
            expected: '( 1 ) -> ( 2 ) -> null'
        },
        {
            input: 3,
            expected: '( 1 ) -> ( 2 ) -> ( 3 ) -> null'
        }
    ])('should add more values', ({ input, expected }) => {
        list.append(input);
        const received = list.toString();
        expect(received).toBe(expected);
    });
});

describe('prepend', () => {
    const list = createLinkedList();

    it('should exist', () => {
        expect(list.prepend).toBeDefined();
    });

    it('should add a first value', () => {
        list.prepend(1);
        expect(list.toString()).toBe('( 1 ) -> null');
    });

    it.each([
        {
            input: 0,
            expected: '( 0 ) -> ( 1 ) -> null'
        },
        {
            input: -1,
            expected: '( -1 ) -> ( 0 ) -> ( 1 ) -> null'
        },
        {
            input: -2,
            expected: '( -2 ) -> ( -1 ) -> ( 0 ) -> ( 1 ) -> null'
        }
    ])('should add more values', ({ input, expected }) => {
        list.prepend(input);
        const received = list.toString();
        expect(received).toBe(expected);
    });
});

describe('size', () => {
    const list = createLinkedList();

    it('should exist', () => {
        expect(list.size).toBeDefined();
    });

    it('should return 0 if list is empty', () => {
        expect(list.size()).toBe(0);
    });

    it('should correct size for list with 1 element', () => {
        list.append(1);
        expect(list.size()).toBe(1);
    });

    it('should correct size for list with several elements', () => {
        list.append(2);
        list.prepend(0);
        expect(list.size()).toBe(3);
    });
});

describe('headValue', () => {
    const list = createLinkedList();

    it('should exist', () => {
        expect(list.headValue).toBeDefined();
    });

    it('should throw if list is empty', () => {
        expect(() => list.headValue()).toThrow();
    });

    it('should get correct head when list has one element appended', () => {
        list.append(0);
        expect(list.headValue()).toBe(0);
    });

    it('should get correct head when prepending', () => {
        list.prepend(-1);
        expect(list.headValue()).toBe(-1);
    });
});

describe('tailValue', () => {
    const list = createLinkedList();

    it('should exist', () => {
        expect(list.tailValue).toBeDefined();
    });

    it('should throw if list is empty', () => {
        expect(() => list.tailValue()).toThrow();
    });

    it('should get correct tail when list has one element appended', () => {
        list.append(0);
        expect(list.tailValue()).toBe(0);
    });

    it('should get correct tail when prepending', () => {
        list.prepend(-1);
        expect(list.tailValue()).toBe(0);
    });

    it('should get correct tail when appending another value', () => {
        list.append(1);
        expect(list.tailValue()).toBe(1);
    });
});

describe('at', () => {
    const list = createLinkedList();

    it('should exist', () => {
        expect(list.at).toBeDefined();
    });

    it('should return undefined list is empty', () => {
        expect(list.at(0)).toBeUndefined();
    });

    it('should return element at location 0', () => {
        list.append('shirt');
        list.prepend('shoes');
        expect(list.at(0)).toBe('shoes');
    });

    it('should return element at location 1', () => {
        expect(list.at(1)).toBe('shirt');
    });

    it('should return element at location 2', () => {
        list.append('house');
        expect(list.at(2)).toBe('house');
    });

    it('should return last tail element if index is -1', () => {
        list.append('chair');
        expect(list.at(-1)).toBe('chair');
    });

    it('should return element before last if index is -2', () => {
        expect(list.at(-2)).toBe('house');
    });

    it('should return undefined if there is no node at given index', () => {
        expect(list.at(10)).toBeUndefined();
        expect(list.at(-10)).toBeUndefined();
    });
});

describe('pop', () => {
    const list = createLinkedList();

    it('should exist', () => {
        expect(list.pop).toBeDefined();
    });

    it('should return undefined if list is empty', () => {
        expect(list.pop()).toBeUndefined();
    });

    it('should remove head and return its value', () => {
        // add some elements
        [4, 3, 2, 1, 0].forEach(item => list.prepend(item));
        expect(list.pop()).toBe(0);
        expect(list.headValue()).toBe(1);
    });
});

describe('contains', () => {
    const list = createLinkedList();
    ['shoe', 'linaza', 'building', 'sailor', 'cloud'].forEach(item => list.append(item));

    it('should exist', () => {
        expect(list.contains).toBeDefined();
    });

    it('should return true if passed value is in the list', () => {
        expect(list.contains('shoe')).toBeTruthy();
        expect(list.contains('linaza')).toBeTruthy();
        expect(list.contains('cloud')).toBeTruthy();
        expect(list.contains('sailor')).toBeTruthy();
        expect(list.contains('building')).toBeTruthy();
    });

    it('should return false if passed value is not in the list', () => {
        expect(list.contains('iguana')).toBeFalsy();
        expect(list.contains('tinte')).toBeFalsy();
        expect(list.contains('river')).toBeFalsy();
    });
});

describe('findIndex', () => {
    const list = createLinkedList();
    ['shoe', 'linaza', 'building', 'sailor', 'cloud'].forEach(item => list.append(item));

    it('should exist', () => {
        expect(list.findIndex).toBeDefined();
    });

    it('should return the index of the node containing the given value', () => {
        expect(list.findIndex('shoe')).toBe(0);
        expect(list.findIndex('linaza')).toBe(1);
        expect(list.findIndex('cloud')).toBe(4);
        expect(list.findIndex('sailor')).toBe(3);
        expect(list.findIndex('building')).toBe(2);
    });

    it('should return -1 if passed value is not in the list', () => {
        expect(list.findIndex('iguana')).toBe(-1);
        expect(list.findIndex(null)).toBe(-1);
    });
});