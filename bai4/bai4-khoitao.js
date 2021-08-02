 class Animal {
    name;
    weight;

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    toString() {
        return document.write(" tên là : " + this.getName() + ", cân nặng là : " + this.getWeight());
    }
}