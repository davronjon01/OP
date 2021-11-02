"use strick";


const mashinalar = {
    rang: "qora",
    sotilganmi: false,
    sozlanmasi: function()  {
        console.log("Sozlanmalari joyida");
    }
}
const spark = Object.create(mashinalar);
console.log(spark.rang);

const matiz = {
    rang: "oq",
};

Object.setPrototypeOf(matiz, mashinalar);

matiz.sozlanmasi();
console.log(matiz.rang);