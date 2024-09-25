class Cars {
  constructor(Model, Engine, year, img) {
    this.model = Model;
    this.engine = Engine;
    this.year = year;
    this.img = img;
  }
}

class Car extends Cars {
  constructor(Model, Engine, year, img) {
    super(Model, Engine, year, img);
  }
}

let image1 = document.getElementById("image1");

let Bmw = new Car('i8', "B38K15T0 1.5L", 2014, 'i8.jpg');
let Mercedes = new Car('C-Class', "twin-turbo", 2011, "mercedes.jpg");
let Audi1 = new Car('A7', "Benzin", 2024, "A7.jpg");
let Audi2 = new Car('Q3', "Diesel", 2024, "Q3.jpg");
let Audi3 = new Car('Q5', "Diesel", 2024, "Q5.jpg");

let vehicles = [Bmw, Mercedes, Audi1, Audi2, Audi3];

// Display the list of vehicles with corresponding buttons
vehicles.forEach((vehicle) => {
  image1.innerHTML += `
    <div class="card"  style="width: 18rem;">
      <img src="${vehicle.img}" class="card-img-top" alt="${vehicle.model}">
      <div class="card-body">
        <h5 class="card-title">${vehicle.model}</h5>
        <p class="card-text">The ${vehicle.model} has an engine of ${vehicle.engine}, and was originally built in ${vehicle.year}.</p>
        <button class="button">More</button>
      </div>
    </div>
  `;
});

// Select all buttons and use for...of to iterate over them
let btns = document.querySelectorAll(".button");
let output = document.getElementById("output");

// Using for...of to iterate over the buttons and for...in to index vehicles
for (let btn of btns) {
  btn.addEventListener("click", () => {
    // Using for...in to get the index from vehicles
    for (let index in vehicles) {
      if (btn === btns[index]) {
        let vehicle = vehicles[index];

        // Display the selected vehicle's details
        output.innerHTML = `
          <div class="card" style="width: 18rem;">
            <img src="${vehicle.img}" class="card-img-top" alt="${vehicle.model}">
            <div class="card-body">
              <h5 class="card-title">${vehicle.model}</h5>
              <p class="card-text">The ${vehicle.model} has an engine of ${vehicle.engine}, and was originally built in ${vehicle.year}.</p>
            </div>
          </div>
        `;
        break; // Exit the loop once we find the matching vehicle
      }
    }
  });
}