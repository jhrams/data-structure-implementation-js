function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function LinkedList(head) {
  this.head = head;

  this.printList = () => {
    if (this.head === null) return "Error: LinkedList does not have a head";

    let currNode = this.head;
    while (currNode !== null) {
      console.log(currNode.data);
      currNode = currNode.next;
    }
  }

  this.insertAtFront = (newData) => {
    const newHead = new Node(newData, this.head);
    this.head = newHead;
  }

  this.insertAfter = (prevNode, newData) => {
    const newNode = new Node(newData, prevNode.next);
    prevNode.next = newNode;
  }

  this.insertAtEnd = (newData) => {
    const newNode = new Node(newData);

    if (this.head === null) this.head = newNode;

    let currNode = this.head;
    while(currNode.next !== null) {
      currNode = currNode.next;
    }

    currNode.next = newNode;
  }

  this.delete = (data) => {
    if (this.head === null) return;

    if (this.head !== null && this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let prevNode = null;
    let foundNode = false;

    while(!foundNode && currNode !== null) {
      if (currNode.data === data) {
        foundNode = true;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }

    if (foundNode) {
      prevNode.next = currNode.next;
    } else {
      console.log("no node with that data");
      return;
    }
  }

  this.deleteAtIndex = (index) => {
    if (this.head === null) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head.next;
    let prevNode = this.head;

    for (let linkedListPos = 1; linkedListPos <= index; linkedListPos++) {
      if (currNode === null) {
        console.log(`index ${index} is out of bounds`)
        return;
      }

      if (linkedListPos === index) {
        prevNode.next = currNode.next;
        return;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
  }

  this.deleteLinkedList = () => this.head = null;

  this.length = () => {
    let count = 0;
    let currNode = this.head;

    while (currNode !== null) {
      length++;
      currNode = currNode.next;
    }

    return length;
  }

  this.search = (key) => {
    let currNode = this.head;

    while(currNode !== null) {
      if (currNode.data === key) {
        return true;
      }

      currNode = currNode.next;
    }

    return false;
  }

  this.getNth = (index) => {
    if (index < 0) return "You must pass an index greater than or equal to 0";

    let currNodeIndex = 0;
    let currNode = this.head;

    while (currNode !== null) {
      if (currNodeIndex === index) {
        return currNode;
      }

      currNodeIndex++;
      currNode = currNode.next;
    }
  }

  return "Out of bounds";
}

// create 3 nodes
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

// link nodes together
node1.next = node2;
node2.next = node3;

// make node1 the head of the linked list
const linkedList = new LinkedList(node1);

linkedList.printList(); // 1 2 3

linkedList.insertAtFront(0);
linkedList.printList(); // 0 1 2 3

linkedList.insertAtEnd(7);
linkedList.printList(); // 0 1 2 3 7


linkedList.insertAfter(node3, 4);
linkedList.printList(); // 0 1 2 3 4 7

linkedList.delete(2);
linkedList.printList(); // 0 1 3 4 7

linkedList.deleteAtIndex(0);
linkedList.printList(); // 1 3 4 7

linkedList.deleteAtIndex(3);
linkedList.printList(); // 1 3 4

linkedList.deleteAtIndex(1);
linkedList.printList(); // 1 4

linkedList.deleteAtIndex(3); // index 3 is out of bounds
linkedList.printList(); // 1 4

console.log(linkedList.length()); // 2

console.log(linkedList.search(1)); // true

console.log(linkedList.search(5)); // false

console.log(linkedList.getNth(-1));
console.log(linkedList.getNth(0));
console.log(linkedList.getNth(1));
console.log(linkedList.getNth(2));

linkedList.deleteLinkedList();
linkedList.printList(); // null
