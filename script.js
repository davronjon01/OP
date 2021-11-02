"use strick";

const cars = {
    color: "red",
    isBay: false,
    isArmor: function() {
        console.log("Amor does not have");
    },
};

const nexia = Object.create(cars);
console.log(nexia.color);

const bmw = {
    color: "blacck",
};

Object.setPrototypeOf(bmw, cars);

bmw.isArmor();
console.log(bmw.color);

