class Car {
    name;
    price;
    color;
    capacity;
    policeNumber;
    isEngineStarted = false;

constructor({name,price,color,capacity =4,policeNumber}) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.capacity = capacity;
    this.policeNumber = policeNumber;


    }
    engineStart() {
        this.isEngineStarted = true;
        console.info("mobil berjalan");
    }
    engineStop() {
        this.isEngineStarted = false;
        console.info("Mobil nya stop");
    }
}  


const agasCar = new Car ({
    name: `Agas Car`,
    price: 5000000,
    color: `Silver`,
    policeNumber: `B 3886 EAH`
});

console.log(agasCar);
agasCar.engineStart;