'use strict'
// Global value outside of method
let hours = ['6 a.m.','7 a.m.','8 a.m.','9 a.m.','10 a.m.','11 a.m.','12 p.m.','1 p.m.','2 p.m.','3 p.m.','4 p.m.','5 p.m.','6 p.m.','7 p.m.'];

let cookieSalesTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


// Constructor Function
function Store (location, min, max, avg,) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;

  // Deafaults
  

  // Random Number Generator
  this.randomNumber = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }

   // for loop to obtain cookies sold by hour 
  this.cookiesSoldByHour = function () {
    let total = 0;
    let salesByHourArray = [];
    let dailyTotal = 0;

    for (let i = 0; i < 15; i ++) {
      total = Math.ceil (this.randomNumber() * this.avg);
      salesByHourArray[i] = total;
      cookieSalesTotal[i] += total;
      dailyTotal += total;
      }
      cookieSalesTotal[14] += dailyTotal;
      salesByHourArray.push(dailyTotal);

      }
  }

  
  


// Create a way to get totals


let seattle = new Store('Seattle', 23, 65, 6.3);
seattle.cookiesSoldByHour();
// console.log(seattle.salesByHourArray);

// let tokyo = new Store('Tokyo', 3, 24, 1.2);
// tokyo.cookiesSoldByHour();

// let dubai = new Store('Dubai', 11, 38, 3.7);
// dubai.cookiesSoldByHour();

// let paris = new Store('Paris', 20, 38, 2.3);
// dubai.cookiesSoldByHour();

// let lima = new Store('Lima', 2, 16, 4.6);
// lima.cookiesSoldByHour();

// Methods


































// // Object literal
// let seattle = {
// // key value pairs
//   name: 'seattleStore',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   salesByHourArray: [],
//   dailyTotal: 0,
  
// // Random number generator
//   calculateRandomNumberOfCustomers: function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
// // 
//   generateCookiesPerHour: function() {
//     for (let i = 0; i < hours.length; i++){
//       let customers = this.calculateRandomNumberOfCustomers();
//       console.log(customers);
//       let cookiesSoldThisHour = Math.ceil(customers * this.avg);
//       this.salesByHourArray.push(cookiesSoldThisHour);
//       this.dailyTotal += (cookiesSoldThisHour);
//     }

//     console.log(this.salesByHourArray);
//   },

//   render: function () {
  
//     this.generateCookiesPerHour();
//     let salesContainer = document.getElementById('seattleSales');
//     let seattleStore = document.createElement('h2');
//     seattleStore.textContent = 'Seattle';
//     salesContainer.appendChild(seattleStore);
//     let ulElement = document.createElement('ul');
//     salesContainer.appendChild(ulElement);
    
//     for (let i= 0; i < hours.length; i++){
//       let liElement = document.createElement('li');
//       liElement.textContent = `${hours[i]}; ${this.salesByHourArray[i]} cookies`;
//       ulElement.appendChild(liElement);
//     }

//       let totalLiElement = document.createElement('li');
//       totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
//       ulElement.appendChild(totalLiElement);
    
//   },

// }

// // Object literal
// let tokyo = {
// // key value pairs
//   name: 'tokyoStore',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   salesByHourArray: [],
//   dailyTotal: 0,
  
// // Random number generator
//   calculateRandomNumberOfCustomers: function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
// // 
//   generateCookiesPerHour: function() {
//     for (let i = 0; i < hours.length; i++){
//       let customers = this.calculateRandomNumberOfCustomers();
//       console.log(customers);
//       let cookiesSoldThisHour = Math.ceil(customers * this.avg);
//       this.salesByHourArray.push(cookiesSoldThisHour);
//       this.dailyTotal += (cookiesSoldThisHour);
//     }

//     console.log(this.salesByHourArray);
//   },
// //  To display on the image
//   render: function () {
//     this.generateCookiesPerHour();
//     let salesContainer = document.getElementById('tokyoSales');
//     let tokyoStore = document.createElement('h2');
//     tokyoStore.textContent = 'Tokyo';
//     salesContainer.appendChild(tokyoStore);
//     let ulElement = document.createElement('ul');
//     salesContainer.appendChild(ulElement);
    
//     for (let i= 0; i < hours.length; i++){
//       let liElement = document.createElement('li');
//       liElement.textContent = `${hours[i]}; ${this.salesByHourArray[i]} cookies`;
//       ulElement.appendChild(liElement);
//     }
    
//       let totalLiElement = document.createElement('li');
//       totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
//       ulElement.appendChild(totalLiElement);
    
//   },

// }

// // Object literal
// let dubai = {
//   // key value pairs
//     name: 'dubaiStore',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     salesByHourArray: [],
//     dailyTotal: 0,
    
//   // Random number generator
//     calculateRandomNumberOfCustomers: function() {
//       return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },
//   // 
//     generateCookiesPerHour: function() {
//       for (let i = 0; i < hours.length; i++){
//         let customers = this.calculateRandomNumberOfCustomers();
//         console.log(customers);
//         let cookiesSoldThisHour = Math.ceil(customers * this.avg);
//         this.salesByHourArray.push(cookiesSoldThisHour);
//         this.dailyTotal += (cookiesSoldThisHour);
//       }
  
//       console.log(this.salesByHourArray);
//     },
  
//     render: function () {
//       this.generateCookiesPerHour();
//       let salesContainer = document.getElementById('dubaiSales');
//       let dubaiStore = document.createElement('h2');
//       dubaiStore.textContent = 'Dubai';
//       salesContainer.appendChild(dubaiStore);
//       let ulElement = document.createElement('ul');
//       salesContainer.appendChild(ulElement);
      
//       for (let i= 0; i < hours.length; i++){
//         let liElement = document.createElement('li');
//         liElement.textContent = `${hours[i]}; ${this.salesByHourArray[i]} cookies`;
//         ulElement.appendChild(liElement);
//       }
  
//         let totalLiElement = document.createElement('li');
//         totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
//         ulElement.appendChild(totalLiElement);
      
//     },

//   }
  
// // Object literal
// let paris = {
//   // key value pairs
//     name: 'parisStore',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     salesByHourArray: [],
//     dailyTotal: 0,
    
//   // Random number generator
//     calculateRandomNumberOfCustomers: function() {
//       return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },
//   // 
//     generateCookiesPerHour: function() {
//       for (let i = 0; i < hours.length; i++){
//         let customers = this.calculateRandomNumberOfCustomers();
//         console.log(customers);
//         let cookiesSoldThisHour = Math.ceil(customers * this.avg);
//         this.salesByHourArray.push(cookiesSoldThisHour);
//         this.dailyTotal += (cookiesSoldThisHour);
//       }
  
//       console.log(this.salesByHourArray);
//     },
  
//     render: function () {
//       this.generateCookiesPerHour();
//       let salesContainer = document.getElementById('parisSales');
//       let parisStore = document.createElement('h2');
//       parisStore.textContent = 'Paris';
//       salesContainer.appendChild(parisStore);
//       let ulElement = document.createElement('ul');
//       salesContainer.appendChild(ulElement);
    

//       for (let i= 0; i < hours.length; i++){
//         let liElement = document.createElement('li');
//         liElement.textContent = `${hours[i]}; ${this.salesByHourArray[i]} cookies`;
//         ulElement.appendChild(liElement);
//       }
  
//         let totalLiElement = document.createElement('li');
//         totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
//         ulElement.appendChild(totalLiElement);
      
//     },
  
//   }
//   // Object literal
// let lima = {
//   // key value pairs
//     name: 'limaStore',
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     salesByHourArray: [],
//     dailyTotal: 0,
    
//   // Random number generator
//     calculateRandomNumberOfCustomers: function() {
//       return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },
//   // 
//     generateCookiesPerHour: function() {
//       for (let i = 0; i < hours.length; i++){
//         let customers = this.calculateRandomNumberOfCustomers();
//         console.log(customers);
//         let cookiesSoldThisHour = Math.ceil(customers * this.avg);
//         this.salesByHourArray.push(cookiesSoldThisHour);
//         this.dailyTotal += (cookiesSoldThisHour);
//       }
  
//       console.log(this.salesByHourArray);
//     },
  
//     render: function () {
  
//       this.generateCookiesPerHour();
//       let salesContainer = document.getElementById('limaSales');
//       let limaStore = document.createElement('h2');
//       limaStore.textContent = 'Lima';
//       salesContainer.appendChild(limaStore);
//       let ulElement = document.createElement('ul');
//       salesContainer.appendChild(ulElement);
      
//       for (let i= 0; i < hours.length; i++){
//         let liElement = document.createElement('li');
//         liElement.textContent = `${hours[i]}; ${this.salesByHourArray[i]} cookies`;
//         ulElement.appendChild(liElement);
//       }
  
//         let totalLiElement = document.createElement('li');
//         totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
//         ulElement.appendChild(totalLiElement);
      
//     },
  
//   }
  
// // console.log(seattle.getRandomCustomersPerHour());
// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();



  



