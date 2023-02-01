'use strict'
// Global value outside of method
let hours = ['6 a.m.','7 a.m.','8 a.m.','9 a.m.','10 a.m.','11 a.m.','12 p.m.','1 p.m.','2 p.m.','3 p.m.','4 p.m.','5 p.m.','6 p.m.','7 p.m.'];

// Object literal
let seattle = {
// key value pairs
  name: 'seattleStore',
  min: 23,
  max: 65,
  avg: 6.3,
  salesByHourArray: [],
  dailyTotal: 0,
  
// Random number generator
  calculateRandomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
// 
  generateCookiesPerHour: function() {
    for (let i = 0; i < hours.length; i++){
      let customers = this.calculateRandomNumberOfCustomers();
      console.log(customers);
      let cookiesSoldThisHour = Math.ceil(customers * this.avg);
      this.salesByHourArray.push(cookiesSoldThisHour);
      this.dailyTotal += (cookiesSoldThisHour);
    }

    console.log(this.salesByHourArray);
  },

  render: function () {
    this.generateCookiesPerHour()
    let salesContainer = document.getElementById('seattleSales');
    let ulElement = document.createElement('ul');
    salesContainer.appendChild(ulElement);
    
    for (let i= 0; i < hours.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}; ${this.salesByHourArray[i]} cookies`;
      ulElement.appendChild(liElement);
    }

      let totalLiElement = document.createElement('li');
      totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
      ulElement.appendChild(totalLiElement);
    
  },

}

// Object literal
let tokyo = {
// key value pairs
  name: 'seattleStore',
  min: 3,
  max: 24,
  avg: 1.2,
  salesByHourArray: [],
  dailyTotal: 0,
  
// Random number generator
  calculateRandomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
// 
  generateCookiesPerHour: function() {
    for (let i = 0; i < hours.length; i++){
      let customers = this.calculateRandomNumberOfCustomers();
      console.log(customers);
      let cookiesSoldThisHour = Math.ceil(customers * this.avg);
      this.salesByHourArray.push(cookiesSoldThisHour);
      this.dailyTotal += (cookiesSoldThisHour);
    }

    console.log(this.salesByHourArray);
  },

  render: function () {
    this.generateCookiesPerHour()
    let salesContainer = document.getElementById('seattleSales');
    let ulElement = document.createElement('ul');
    salesContainer.appendChild(ulElement);
    
    for (let i= 0; i < hours.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}; ${this.salesByHourArray[i]} cookies`;
      ulElement.appendChild(liElement);
    }

      let totalLiElement = document.createElement('li');
      totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
      ulElement.appendChild(totalLiElement);
    
  },

}

// Object literal
let dubai = {
  // key value pairs
    name: 'seattleStore',
    min: 11,
    max: 38,
    avg: 3.7,
    salesByHourArray: [],
    dailyTotal: 0,
    
  // Random number generator
    calculateRandomNumberOfCustomers: function() {
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
  // 
    generateCookiesPerHour: function() {
      for (let i = 0; i < hours.length; i++){
        let customers = this.calculateRandomNumberOfCustomers();
        console.log(customers);
        let cookiesSoldThisHour = Math.ceil(customers * this.avg);
        this.salesByHourArray.push(cookiesSoldThisHour);
        this.dailyTotal += (cookiesSoldThisHour);
      }
  
      console.log(this.salesByHourArray);
    },
  
    render: function () {
      this.generateCookiesPerHour()
      let salesContainer = document.getElementById('seattleSales');
      let ulElement = document.createElement('ul');
      salesContainer.appendChild(ulElement);
      
      for (let i= 0; i < hours.length; i++){
        let liElement = document.createElement('li');
        liElement.textContent = `${hours[i]}; ${this.salesByHourArray[i]} cookies`;
        ulElement.appendChild(liElement);
      }
  
        let totalLiElement = document.createElement('li');
        totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
        ulElement.appendChild(totalLiElement);
      
    },
  
  }
// Object literal
let paris = {
  // key value pairs
    name: 'seattleStore',
    min: 20,
    max: 38,
    avg: 2.3,
    salesByHourArray: [],
    dailyTotal: 0,
    
  // Random number generator
    calculateRandomNumberOfCustomers: function() {
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
  // 
    generateCookiesPerHour: function() {
      for (let i = 0; i < hours.length; i++){
        let customers = this.calculateRandomNumberOfCustomers();
        console.log(customers);
        let cookiesSoldThisHour = Math.ceil(customers * this.avg);
        this.salesByHourArray.push(cookiesSoldThisHour);
        this.dailyTotal += (cookiesSoldThisHour);
      }
  
      console.log(this.salesByHourArray);
    },
  
    render: function () {
      this.generateCookiesPerHour()
      let salesContainer = document.getElementById('seattleSales');
      let ulElement = document.createElement('ul');
      salesContainer.appendChild(ulElement);
      
      for (let i= 0; i < hours.length; i++){
        let liElement = document.createElement('li');
        liElement.textContent = `${hours[i]}; ${this.salesByHourArray[i]} cookies`;
        ulElement.appendChild(liElement);
      }
  
        let totalLiElement = document.createElement('li');
        totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
        ulElement.appendChild(totalLiElement);
      
    },
  
  }
  // Object literal
let Lima = {
  // key value pairs
    name: 'seattleStore',
    min: 2,
    max: 16,
    avg: 4.6,
    salesByHourArray: [],
    dailyTotal: 0,
    
  // Random number generator
    calculateRandomNumberOfCustomers: function() {
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
  // 
    generateCookiesPerHour: function() {
      for (let i = 0; i < hours.length; i++){
        let customers = this.calculateRandomNumberOfCustomers();
        console.log(customers);
        let cookiesSoldThisHour = Math.ceil(customers * this.avg);
        this.salesByHourArray.push(cookiesSoldThisHour);
        this.dailyTotal += (cookiesSoldThisHour);
      }
  
      console.log(this.salesByHourArray);
    },
  
    render: function () {
      this.generateCookiesPerHour()
      let salesContainer = document.getElementById('seattleSales');
      let ulElement = document.createElement('ul');
      salesContainer.appendChild(ulElement);
      
      for (let i= 0; i < hours.length; i++){
        let liElement = document.createElement('li');
        liElement.textContent = `${hours[i]}; ${this.salesByHourArray[i]} cookies`;
        ulElement.appendChild(liElement);
      }
  
        let totalLiElement = document.createElement('li');
        totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
        ulElement.appendChild(totalLiElement);
      
    },
  
  }
  
// console.log(seattle.getRandomCustomersPerHour());
seattle.render();



  



