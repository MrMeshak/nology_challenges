class Dog {
  static instances = [];
  static __typename = 'Dog';

  constructor() {
    this.walks = [];
    Dog.instances.push(this);
  }

  totalDist() {
    return this.walks.reduce((sum, walk) => sum + walk);
  }

  walk(distance) {
    this.walks.push(distance);
  }
  walkSummary() {
    console.log(this.walks.length);
    console.log(this.totalDist());
    return;
  }
  walkAvg() {
    return this.totalDist() / this.walks.length;
  }

  static greatestDistance(dog1, dog2) {
    return dog1.totalDist() > dog2.totalDist() ? dog1 : dog2;
  }

  static walkAvg() {
    const totalDist = this.instances.reduce((sum, dog) => sum + dog.totalDist(), 0);
    return totalDist / this.instances.length;
  }
}

const daisy = new Dog();
const bob = new Dog();

bob.walk(3);
daisy.walk(5);
daisy.walk(10);
daisy.walk(3);
daisy.walkSummary();
console.log(daisy.walkAvg());
console.log(Dog.__typename);
console.log(Dog.instances);
console.log(Dog.walkAvg());
