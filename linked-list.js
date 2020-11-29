function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function LinkedList(head) {
  this.head = head;

  this.printList = () => {
    if (this.head === null) return "Error: LinkedList does not have a head";

    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
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

    let currentNode = this.head;
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  this.delete = (data) => {
    if (this.head === null) return;

    if (this.head !== null && this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let prevNode = null;
    let foundNode = false;

    while(!foundNode && currentNode !== null) {
      if (currentNode.data === data) {
        foundNode = true;
      } else {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }

    if (foundNode) {
      prevNode.next = currentNode.next;
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

    let currentNode = this.head.next;
    let prevNode = this.head;

    for (let linkedListPos = 1; linkedListPos <= index; linkedListPos++) {
      if (currentNode === null) {
        console.log(`index ${index} is out of bounds`)
        return;
      }

      if (linkedListPos === index) {
        prevNode.next = currentNode.next;
        return;
      } else {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }

  this.deleteLinkedList = () => this.head = null;

  this.length = () => {
    let count = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      length++;
      currentNode = currentNode.next;
    }

    return length;
  }
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

linkedList.deleteLinkedList();
linkedList.printList(); // null
