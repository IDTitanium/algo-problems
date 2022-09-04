class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(1)
const b = new Node(6)
const c = new Node(7)
// const d = new Node(9)

a.next = b;
b.next = c;
// c.next = d;

module.exports = a