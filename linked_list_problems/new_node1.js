class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const q = new Node(1)
const w = new Node(1)
const e = new Node(1)
// const r = new Node(11)
// const t = new Node(12)
// const y = new Node(19)
// const u = new Node(19)
// const i = new Node(19)
// const o = new Node(5)

q.next = w;
w.next = e;
// e.next = r
// r.next = t;
// t.next = y;
// y.next = u;
// u.next = i;
// i.next = o;

module.exports = q