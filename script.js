class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newnode = new Node(value);
    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
  }

  prepend(value) {
    const newnode = new Node(value);
    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      newnode.next = this.head;
      this.head = newnode;
    }
  }
  getsize() {
    let count = 0;
    let currentnode = this.head;
    while (currentnode) {
      count++;
      currentnode = currentnode.next;
    }
    return count;
  }
  gethead() {
    return this.head;
  }
  gettail() {
    return this.tail;
  }
  at(index) {
    if (index < 0 || index >= this.getsize()) {
      return null;
    }
    let currentindex = 0;
    let temp = this.head;
    while (currentindex < index) {
      temp = temp.next;
      currentindex++;
    }
    return temp;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    if (!temp.next) {
      this.head = null;
      this.tail = null;
      return temp.value;
    }
    while (temp.next !== this.tail) {
      temp = temp.next;
    }
    let store = temp.next;
    temp.next = null;
    this.tail = temp;
    return store.value;
  }
  contains(value) {
    if (!this.head) {
      return false;
    }
    let temp = this.head;
    let flag = 0;
    while (temp !== null) {
      if (temp.value == value) {
        flag = 1;
        break;
      } else {
        temp = temp.next;
      }
    }
    return flag == 1;
  }

  find(value) {
    if (!this.head) {
      return null;
    }
    let index = 0;
    let temp = this.head;
    while (temp) {
      if (temp.value == value) {
        return index;
      } else {
        index++;
        temp = temp.next;
      }
    }
    return null;
  }

  tostring() {
    if (!this.head) {
      return null;
    }
    let result = "";
    let temp = this.head;
    while (temp !== this.tail) {
      result += temp.value + "-->";
      temp = temp.next;
    }
    result += temp.value;
    return result;
  }

  insertat(index, value) {
    if (!this.head || index >= this.getsize() || index < 0) {
      return null;
    }
    let findindex = 0;
    let current = this.head;
    let previous = null;
    while (findindex !== index) {
      findindex++;
      previous = current;
      current = current.next;
    }
    let newnode = new Node(value);
    newnode.next = previous.next;
    previous.next = newnode;

    if (index === 0) {
      this.head = newnode;
    }

    // Handle inserting at the end
    if (index === this.getsize()) {
      this.tail = newnode;
    }
  }

  removeat(index) {
    if (!this.head || index >= this.getsize() || index < 0) {
      return null;
    }
    if (index == 0) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return;
    }
    let count = 0;
    let current = this.head;
    let previous = null;
    while (count !== index) {
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    if (index === this.getsize()) {
      this.tail = previous;
    }
  }
}

const myList = new linkedList();

// Append nodes to the LinkedList
myList.append(10);
myList.append(20);
myList.append(30);

// Prepend nodes to the LinkedList
myList.prepend(5);
myList.prepend(2);

// Get the size of the LinkedList
console.log("Size:", myList.getsize());
console.log("LinkedList:", myList.tostring());

// Get the head and tail of the LinkedList
console.log("Head:", myList.gethead());
console.log("Tail:", myList.gettail());

// Access a node at a specific index
console.log("Node at index 2:", myList.at(2));
console.log("LinkedList:", myList.tostring());

// Pop a node from the LinkedList
console.log("Popped value:", myList.pop());
console.log("LinkedList:", myList.tostring());

// Check if a value exists in the LinkedList
console.log("Contains 20:", myList.contains(20));
console.log("Contains 40:", myList.contains(40));

// Find the index of a value in the LinkedList
console.log("Index of 20:", myList.find(20));
console.log("Index of 40:", myList.find(40));

// Print the LinkedList as a string
console.log("LinkedList:", myList.tostring());
myList.insertat(2, 25);
console.log("LinkedList after insertion:", myList.tostring());

// Remove at a specific index
myList.removeat(2);
console.log("LinkedList after removal:", myList.tostring());
