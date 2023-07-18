let passport = {
    name: "Petr",
    surname: "Petrov",
    address: {
        counry: "USA",
        city: "LA"
    }
};

let passport2 = { ...passport, address: { ...passport.address } }

passport2.address.city = 'Bobryisk'

console.log(passport.address.city);
console.log(passport2.address.city);
