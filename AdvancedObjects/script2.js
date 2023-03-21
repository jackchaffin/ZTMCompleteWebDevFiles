class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Cow extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound() {
    console.log(
      `Mooooo! My name is ${this.name}. I am a ${this.type}. I am ${this.color}.`
    );
  }
}

const cow1 = new Cow("bessy", "type", "brown");
cow1.sound();
