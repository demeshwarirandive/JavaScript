 class Vehicle {
    constructor(name, price, colour, engine, mileage) {
      this.name = name;
      this.price = price;
      this.colour = colour;
      this.engine = engine;
      this.mileage = mileage;
    }
    showDetails() {
      console.log(`Car Name: ${this.name}, Price: ${this.price}, Colour : ${this.colour}, Engine: ${this.engine}, Mileage : ${this.mileage} `);
    }
  }
  const toyotaFortuner = new Vehicle( "Toyota Fortuner", "₹ 37.79 lakh","White","2694cc","10.01kpl");
  const mahindraThar = new Vehicle("Mahindra Thar","₹ 15.56 lakh","Black","2184cc","9.0kmpl");
  const tataTigor = new Vehicle("Tata Tigor","₹ 8.90 lakh","Red","1199cc","19.2 km/kg");
  const jaguar = new Vehicle("Toyota Fortuner","₹ 77.41 lakh","blue","4999cc","19.3kmpl");
  const mahindraScorpio = new Vehicle("Mahindra Scorpio","₹ 16.81 lakh","Grey","2184cc","10.01kpl");
  
  toyotaFortuner.showDetails();
  mahindraThar.showDetails();
  tataTigor.showDetails();
  jaguar.showDetails();
  mahindraScorpio.showDetails();
  
  console.log(" ");
  
  console.log(`------------ Step.1: Travrse the Vehicle class objects-----------`);
  const arrayOfVehicle = [toyotaFortuner,mahindraThar,tataTigor,jaguar,mahindraScorpio];
  
  
  for (const element of arrayOfVehicle) {
    element.showDetails();
  }
  
  console.log(" ");
  
  class College {
    constructor(collegeName, department, city) {
      this.collegeName = collegeName;
      this.department = department;
      this.city = city;
    }
  }
  const sGBU = new College("Santa Gadge Baba University","Dr.Ambedkar Thought","Amravati");
  const hvpm = new College("HVPM College of Engineering and Technology","Engineering and Technology","Amravati");
  const pote = new College("P.R.Pote,Patil,Group,Of Edutional,Institudes","Engineering","Amravati");
  const panjabraoDeshmukh = new College("Dr. Panjabrao Deshmukh Girls Polytechnic","Polytechnic","Amravati");
  console.log(`----------------------------Step.3: Traverse object of College-----------------------`);
  
  travrse(sGBU);
  console.log(`-------------------------------------------------------`);
  travrse(hvpm);
  console.log(`-------------------------------------------------------`);
  travrse(pote);
  console.log(`-------------------------------------------------------`);
  travrse(panjabraoDeshmukh);
  
  // console.log(`----------------------------Step.2,3: Traverse object of College-----------------------`);
  function travrse(collegeObject) {
    for (const key in collegeObject) {
      if (Object.hasOwnProperty.call(collegeObject, key)) {
        const element = collegeObject[key];
        console.log(`${key} : ${element}`);
      }
    }
  }
