class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(1)
const b = new Node(1)
const c = new Node(1)
const d = new Node(1)

a.next = b;
b.next = c;
c.next = d;

module.exports = a