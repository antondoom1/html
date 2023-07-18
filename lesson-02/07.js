let passport = {
    name: "Petr",
    surname: "Petrov",
    address: {
        counry: "USA",
        city: "Bobryisk"
    }
};

let passport2 = { ...passport, address: { ...passport.address } }

passport2.married = true

console.log(passport);
console.log(passport2);
