import { Node } from "./Node.js";

export function createLinkedList() {
    let head = null;

    function append(value) {
        const newNode = new Node(value);

        if (head === null) { // add first
            head = newNode;
            return;
        }

        let ptr = head;
        while (ptr.nextNode !== null) {
            ptr = ptr.nextNode;
        }

        ptr.nextNode = newNode;
    }

    function prepend(value) {
        const newNode = new Node(value);

        if (head === null) { // add first
            head = newNode;
            return;
        }

        newNode.nextNode = head;
        head = newNode;
    }

    function toString() {
        let str = "";

        let ptr = head;
        while (ptr !== null) {
            str += `( ${ptr.value} ) -> `;
            ptr = ptr.nextNode;
        }

        str += 'null';

        return str;
    }

    function size() {
        let ptr = head;
        let count = 0;

        while (ptr !== null) {
            ptr = ptr.nextNode;
            count++;
        }

        return count;
    }

    function headValue() {
        if (head === null) {
            throw new Error("can't get head because list is empty");
        }
        return head.value;
    }

    function tailValue() {
        if (head === null) {
            throw new Error("can't get head because list is empty");
        }

        let ptr = head;
        while (ptr.nextNode !== null) {
            ptr = ptr.nextNode;
        }
        return ptr.value;
    }

    function at(index) {
        if (index < 0) {
            index += size();
        }

        let ptr = head;
        let i = 0;
        while (ptr !== null) {
            if (i === index) return ptr.value;
            i++;
            ptr = ptr.nextNode;
        }

        return undefined;
    }

    function pop() {
        if (head === null) return undefined;

        const value = head.value;
        head = head.nextNode;

        return value;
    }

    function contains(value) {
        for (let ptr = head; ptr !== null; ptr = ptr.nextNode) {
            if (ptr.value === value) return true;
        }

        return false;
    }

    const findIndex = (value) => {
        let index = 0;
        for (let ptr = head; ptr !== null; ptr = ptr.nextNode) {
            if (ptr.value === value) {
                return index;
            };
            index++;
        }

        return -1;
    }

    const insertAt = (index, ...values) => {
        let i = 0;
        let ptr = head;
        let prev = null;
        while (ptr !== null) {
            if (i === index) break;
            i++;
            prev = ptr;
            ptr = ptr.nextNode;
        }

        if (ptr === null) {
            throw new RangeError('Index is out of bounds');
        }

        values.forEach(item => {
            const itemNode = new Node(item);
            itemNode.nextNode = ptr;
            prev.nextNode = itemNode;
            prev = prev.nextNode;
        });
    }

    const removeAt = (index) => {
        if (index === 0) {
            head = head.nextNode;
            return;
        }

        let i = 0;
        let ptr = head;
        let prev = null;
        while (ptr !== null) {
            if (i === index) break;
            i++;
            prev = ptr;
            ptr = ptr.nextNode;
        }

        if (ptr === null) {
            throw new RangeError('Index is out of bounds');
        }

        prev.nextNode = ptr.nextNode;
    }

    return {
        append,
        prepend,
        toString,
        size,
        headValue,
        tailValue,
        at,
        pop,
        contains,
        findIndex,
        insertAt,
        removeAt
    }
}