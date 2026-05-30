import { Node } from "./Node";

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
        findIndex
    }
}