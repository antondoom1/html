let passport3 = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passport4 = { ...passport3, address: { ...passport3.address } }

passport4.address.city = 'Bobryisk'

console.log(passport3.address.city);
console.log(passport4.address.city);
