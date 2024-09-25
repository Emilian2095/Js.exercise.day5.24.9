car = {
brand: "Mercedes",
year: 1999,
color: ['blue', 'red', 'black']
};
animal={
type: 'Cat',
age: '2',
name: 'Tom'
};
person ={
name: 'Jhon',
age: 34,
hobbies: ['Fishing', 'Football', 'Hiking']
};


let container = document.getElementById('container').innerHTML = `${car.brand} ${animal.name} ${person.name}`
