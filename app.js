class Node {
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value){
        let node = new Node(value);
        let current;

        // if list is empty, make it head
        if (!this.head){
            this.head = node;
        } else {
            current = this.head;

            while(current.nextNode){
                current = current.nextNode;
            }
            current.nextNode = node;
        }
        this.size++;
    }
    
    prepend(value){
        this.head = new Node(value, this.head);
        this.size++;
    }

    printSize(){
        console.log(this.size);
    }

    printHead(){
        console.log(this.head);
    }

    printTail(){
        let current;
        if (!this.head) {
            console.log(this.head);
        } else {
            current = this.head;

            while(current.nextNode){
                current = current.nextNode;
            }
            console.log(current);
        }
    }

    getAtIndex(index){
        let current = this.head;
        let counter = 0;

        while(current) {
            if(counter == index) {
                console.log(current.value);
            }
            counter++;
            current = current.nextNode;
        }
        return null;
    }

    removeTail(){
        let current = this.head;
        let previous;
        while(current.nextNode){
            previous = current;
            current = current.nextNode;
        }
        previous.nextNode = previous;
        this.size--;
        console.log(current);
    }

    contains(value) {
        let current = this.head;
        while(current) {
            if(current.value === value){
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let counter = 0;
        while (current) {
            if(current.value === value) {
                return counter;
            }
            current = current.nextNode;
            counter++
        }
        return false;
    }


    toString(){
        if(!this.head){
            return null
        }
        let current = this.head;
        let desc = '';
        while(current.nextNode !== null){
            desc = desc.concat(`( ${current.value} ) ---> `);
            current = current.nextNode;
        }
        desc = desc.concat(`( ${current.value} ) ---> null`);
        console.log(desc);
        return current;
    }

    insertAt(value, index){
        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.head = new Node(value, this.head);
            return;
        }

        const node = new Node(value);
        let current;
        let previous;

        current = this.head;
        let counter = 0;

        while(counter < index) {
            previous = current;
            counter++;
            current = current.nextNode;
        }

        node.nextNode = current;
        previous.nextNode = node;

        this.size++;
    }

    removeAt(index) {
        if (index < 0 || index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let counter = 0;

        if (index === 0) {
            this.head = current.nextNode;
        } else {
            while (count < index) {
                counter++;
                previous = current;
                current = current.nextNode;
            }
            previous.nextNode = current.nextNode;
        }
        this.size--;
    }

}

// const linkedList = new LinkedList();

// linkedList.prepend(100);
// linkedList.append(300);
// linkedList.prepend(200);
// linkedList.append(400);
// linkedList.append(900);
// linkedList.append(500);

// linkedList.removeTail();
// console.log(linkedList.contains(100));
// console.log(linkedList.find(600));
// linkedList.toString();
// console.log(linkedList);