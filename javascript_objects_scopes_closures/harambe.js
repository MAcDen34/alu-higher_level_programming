class Animal {
    constructor(leg_count, nutrition, habitat, age, name, sex) {
        this.leg_count = leg_count,
        this.nutrition = nutrition,
        this.habitat = habitat,
        this.age = age,
        this.name = name,
        this.sex = sex
    }

    eat(a) {
        return `${this.name} is eating ${a}`;
    } 
}

const harambe1 = new Animal(2, "herbivore", "forest", 17, "Harambe", "male");


function print_details(emna) {
    for (const [key, value] of Object.entries(emna)) {
        console.log(`${key}: ${value}`);
    }
}

// print_details(harambe1);

class Human extends Animal {
    constructor(leg_count, nutrition, habitat, age, name, sex, nationality, faith, address) {
        super(leg_count, nutrition, habitat, age, name, sex);
        this.nationality = nationality,
        this.faith = faith,
        this.address = address
    }

    speak() {
        return `This Human is speaking.`;
    }
}

const human = new Human(2, "omnivore", "urban", 30, "John Doe", "male", "Rwandan", "Christian", {city: "Kigali", country: "Rwanda"});

process.stdin.resume();

console.log(human.speak());

process.on('SIGINT', () => {
  process.exit(0);
});
