// фігурні дужки щ стоять після знаку = це обєеке
let product = {};
product.name = 'Ferrari laFerrari';
product.price = 300000;


let student = {};
student.name = 'Jon';
student.scolarship = 100;


// метод це функція
function sayMyName(){
    console.log(this.name);
}

product.say = sayMyName;
student.say = sayMyName;


product.say();
student.say();

// анонімні функції
product.showPrice = function () {
    console.log(this.price);
}

product.showPrice();

let lambo = {
    name: 'lamborgini diablo ',
    price: 50000,
    say: sayMyName;
    showPrice(){
         console.log(this.name + ':  ' + this.price);
}

lambo.say();
lambo.showPrice();


    }
}


// asociate dictionary map()
// пишемо з великої букви
let students = new Map ();
students.set('ivan' 'ivanov ivan');
students.set('petro' 'vasylenko petro');
console.logconsole.log(student.get('Ivan'));

let studentsObj = {
    Ivan: 'Ivanov Ivan',
    Petro: 'Vasylenko Petro'
}

studentsObj['Ivan'] // studentsObj.Ivan

// функція конструктор/Функція конструктор починається з великої букви. ключеве слово new
function Car(name, price) {
    this.name = name;
    this.price = price;
    this.say = sayMyName;
    // return this; спір писати чи не писати. Ментор каже не писати. 
    // This буде дорівнювати поточному обєкту в якому функція виконується
    // допомагає виявити помилку якщо забудеш написати new
}
// створює пустий обєкт
let chevy = new Car('Chevrolet Corvette', 50000);
let mustang = new Car('Ford Mustang', 45000);

// TEMPLATE LITERAL


// зявилося ключове слово клас
class SuperCar {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    say()
    {
        sayMyName
    }
}
let teslaRoadster = new SuperCar('Tesla Roadster', 200000);
teslaRoadster.say();



// прототипне  наслідування
let teslaRoadsterExclusive = Object.create(teslaRoadster);
teslaRoadsterExclusive.price = 250000;
teslaRoadsterExclusive.say();

// json не йде по прототипному звязку.  наслідуванняю не містить методів. лише дані
const teslaExclusiveString = JSON.stringify(teslaRoadsterExclusive);
console.log(teslaExclusiveString);

const porsche = JSON.parse('{"name":"Porsche 911","price":275000}')








