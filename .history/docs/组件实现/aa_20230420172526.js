function Parent(age) {
    this.age  = age;
}

function Child(...args) {
    Parent.call(this, ...args);
}