class RegBulb {
  constructor() {
    this.lumen = "60 Watt";
    this.age = "1 year";
    this.color = "none";
  }
}
class EneSaver {
  constructor(color) {
    this.lumen = "35 Watt";
    this.age = "10 year";
    this.color = color;
  }
}

class Factory {
  createBulb(type, color) {
    let bulbtype;
    if (type === "regular") {
      bulbtype = new RegBulb();
    } else if (type === "energy") {
      bulbtype = new EneSaver(color);
    }
    bulbtype.type = type;
    bulbtype.show = function () {
      console.log(
        this.type +
          " :lumen " +
          this.lumen +
          " Last " +
          this.age +
          " " +
          this.color
      );
    };
    return bulbtype;
  }
}

const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));

for (let i = 0, len = bulbs.length; i < len; i++) {
  console.log(bulbs[i].show());
}
/**
 * ## Exercise 02
Implement Decorator pattern to add a logger to any object (additional class is needed). A logger method will log a message to the `console`.

**When you finish, you can use the code below to test:**
```javascript
const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();
 */

class User {
  constructor(name) {
    this.name = name;
  }
  log() {
    console.log("User: " + this.name);
  }
}

class DecoratedUser {
  constructor(user, street, city) {
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;
  }
  logger() {
    console.logger(
      "Decorated User: " + this.name + ", " + this.street + ", " + this.city
    );
  }
}
const user = new User("Kelly");
const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();

/**
 * ## Exercise 03
Implement Strategy pattern to choose between different logging algorithms, choosing between:
* `console.info()`
* `console.warn()`
* `console.error()`
* `console.table()`  *accepts an array of objects*


**When you finish, you can use the code below to test:**
```javascript*/

class Info {
  logging(text) {
    console.log("This information come form Info class :" + text);
  }
}
class Warn {
  logging(text) {
    console.log("This information come form Warrnig  class:" + text);
  }
}
class Error {
  logging(message) {
    console.log("This information come form Error class: " + message);
  }
}
class Table {
  logging(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
}

class Strategy {
  stratagyinfo = "";
  setStrategy(stratagyinfo) {
    this.stratagyinfo = stratagyinfo;
  }

  logging(message) {
    console.log(this.stratagyinfo.logging(message));
  }
}

const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging("info....");

strategy.setStrategy(new Warn());
strategy.logging("warn....");

strategy.setStrategy(new Error());
strategy.logging("error....");

strategy.setStrategy(new Table());
strategy.logging(["table", "table"]);

/**
 * Create a memoized version of the following `fibonacci()` recursive method to improve its performance.
```javascript
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
 */

const fibo = (function () {
  const memo = {};

  const calcFibo = function (n) {
    let fib;

    if (n in memo) {
      fib = memo[n];
    } else {
      if (n == 0 || n == 1) fib = n;
      else fib = calcFibo(n - 1) + calcFibo(n - 2);
      memo[n] = fib;
    }
    return fib;
  };
  return calcFibo;
})();

const n = 0;

console.time("Excution time");
console.log(`recursively: the ${n}th fibonnaci is: ${fibo(n)}`);

class Regular {
  constructor() {
    this.lumen = "60 Watt";
    this.age = "1 year";
    this.color = "none";
  }
}
