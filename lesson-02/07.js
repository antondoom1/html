let passport5 = {
    name: "Petr",
    surname: "Petrov",
    address: {
        counry: "USA",
        city: "Bobryisk"
    }
};

let passport6 = { ...passport5, address: { ...passport5.address } }

passport6.married = true

console.log(passport5);
console.log(passport6);
