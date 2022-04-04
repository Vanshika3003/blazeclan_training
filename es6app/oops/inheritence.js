class Base {
  printMessage(msg) {
    return msg.toUpperCase();
  }
  add(x, y) {
    return `Base ${x + y}`;
  }
}

class Derive extends Base {
  deriveMessage(msg) {
    return this.printMessage(msg);
  }
  add(x, y) {
    return `Derive ${x + y}`;
  }
}
