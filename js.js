function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

let obj = generator();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
