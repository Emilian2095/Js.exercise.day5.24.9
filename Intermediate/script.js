class Objects {
    constructor(name, year, hobbies){
     
    this.name = name;
    this.year = year;
    this.hobbies = hobbies;
    
}
}

// let car = new Objects('Bmw', 2017, ['blue', 'red', 'black']);
// let animal =  new Objects('Tom', 2, ['hide', 'eat', 'sleep']);
// let person = new Objects('Jhon', 20, ['Football', 'Dance', 'Gym']);

// let container = document.getElementById("container").innerHTML = `${car.name}</br>
//  ${animal.year} </br> ${person.hobbies}`

 class Car extends Objects {
    constructor(name, year, hobbies, color){
        super(name, year, hobbies);
        this.color = color;
    }
     
 }
 let car1 = new Car('Bmw', 2017, ['blue', 'red', 'black'],'red');
 let animal =  new Car('Tom', 2, ['hide', 'eat', 'sleep' ],"white");
 let person = new Car('Jhon', 20, ['Football', 'Dance', 'Gym'], "black");


 let container = document.getElementById("container").innerHTML = `${car1.name}</br>
  ${animal.year} </br> ${person.hobbies} ${car1.color}`


 
 
 