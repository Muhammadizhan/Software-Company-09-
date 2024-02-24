// Object representing a software company
const softwareCompany = {
    name: "Tech Innovators Inc.",
    founder: "John Smith",
    yearFounded: 2005,
    products: ["InnoSoft", "DataInsight", "CloudConnect"]
  };
  
  // Accessing and logging some properties of the software company
  const softwareCompanyDetails = document.getElementById("softwareCompanyDetails");
  softwareCompanyDetails.innerHTML = `
    <p>Software Company Name: ${softwareCompany.name}</p>
    <p>Founder: ${softwareCompany.founder}</p>
    <p>Year Founded: ${softwareCompany.yearFounded}</p>
    <p>Products: ${softwareCompany.products.join(", ")}</p>
  `;
  
  // Object representing a car
  const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    drive: function() {
      return `The ${this.brand} ${this.model} is being driven.`;
    }
  };
  
  // Accessing and logging properties of the car
  const carDetails = document.getElementById("carDetails");
  carDetails.innerHTML = `
    <p>Car Brand: ${car.brand}</p>
    <p>Car Model: ${car.model}</p>
    <p>Year: ${car.year}</p>
  `;
  
  // Calling the drive method on the car object and logging the result
  carDetails.innerHTML += `<p>${car.drive()}</p>`;
  