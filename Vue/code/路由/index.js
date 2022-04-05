class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new LinkedList(0);
head.next = new LinkedList(1);
head.next.next = new LinkedList(2);
