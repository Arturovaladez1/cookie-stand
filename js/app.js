'use strict'
// Global value outside of method
let hours = ['6 a.m.','7 a.m.','8 a.m.','9 a.m.','10 a.m.','11 a.m.','12 p.m.','1 p.m.','2 p.m.','3 p.m.','4 p.m.','5 p.m.','6 p.m.','7 p.m.'];

let stores = []

// WINDOW TO DOM
// let storeContainer = document.querySelector('salesTable');
let storeTbody = document.querySelector('tbody');
let storeThead = document.querySelector('thead');
let storeTfoot = document.querySelector('tfoot');

// Constructor Function
function Store (location, min, max, avg,) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesPerHour = [];
  this.total = 0;
  // Random Number Generator
  this.randomNumber = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

   // for loop to obtain cookies sold by hour 
  this.cookiesSoldByHour = function () {
   
    for (let i = 0; i < hours.length; i ++) {
      let total = Math.ceil (this.randomNumber() * this.avg);
      this.cookiesPerHour.push(total);
      this.total += total;
      
    }
    
  
  }
  this.renderStore = function (){
    let row = document.createElement('tr');
    storeTbody.appendChild(row);
    
    let cityName = document.createElement('th');
    cityName.innerText = this.location;
    row.appendChild(cityName);
    
    for (let i = 0; i < hours.length; i++) {
      let storeSales = document.createElement('td');
      storeSales.innerText = this.cookiesPerHour[i];
      row.appendChild(storeSales);
    }
    
    let cityTotal = document.createElement('th');
    cityTotal.innerText = this.total;
    row.appendChild(cityTotal);
  }
  stores.push(this);
}

// Header Function

  function tableHeader() {

    let row1 = document.createElement('tr');
    storeThead.appendChild(row1);
    let cityHead = document.createElement('th');
    cityHead.innerText = 'City';
    row1.appendChild(cityHead);
    
    for (let i = 0; i < hours.length; i ++) {
      let thElement = document.createElement('th');
      thElement.innerText = hours[i];
      row1.appendChild(thElement);
    }

    let totalSales = document.createElement('th');
    totalSales.innerText = 'Daily Total';
    row1.appendChild(totalSales);
  }


//Footer function 

function tableFooter() {
  

  let footer = document.createElement('th');
  footer.innerText = 'Totals';
  storeTfoot.appendChild(footer)
  let grandTotal = 0
  for (let i = 0; i < hours.length; i++){
    let hourlyTotal = 0;
    // console.log(stores.length);
    for (let j = 0; j < stores.length; j++){
      hourlyTotal += stores[j].cookiesPerHour[i];
    } console.log(hourlyTotal);
      grandTotal += hourlyTotal 

    
      let cell = document.createElement('td');
        cell.innerText = hourlyTotal;
        storeTfoot.appendChild(cell);

  } 
      let cell = document.createElement('td');
      cell.innerText = grandTotal;
      storeTfoot.appendChild(cell);
}



// Function to render data

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);
console.log(stores);

for (let i = 0; i < stores.length; i++){
  stores[i].cookiesSoldByHour();
  stores[i].renderStore();
}
tableHeader();
tableFooter();


let form = document.querySelector('form');
let handleSubmit = function(event){
  event.preventDefault();
let storeName = event.target.Add.value;
let storeMin = parseInt(event.target.Min.value);
let storeMax = parseInt(event.target.Max.value);
let storeAvg = parseInt(event.target.Avg.value);

let newStoreLocation = new Store( storeName,storeMin,storeMax,storeAvg);
stores.push(newStoreLocation);
newStoreLocation.randomNumber();
newStoreLocation.cookiesSoldByHour();
newStoreLocation.renderStore();
};
form.addEventListener('submit', handleSubmit);

console.log(stores[5]);



// console.log(seattle.salesByHourArray);


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