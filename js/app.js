'use strict'

let hour = ['6 a.m.','7 a.m.','8 a.m.','9 a.m.','10 a.m.','11 a.m.','12 p.m.','1 p.m.','2 p.m.','3 p.m.','4 p.m.','5 p.m.','6 p.m.','7 p.m.'];

let Seattle = {
  name: 'seattleStore',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHour: [],

  getRandomCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  },

  calculateCookiesSoldPerHour: function() {
  let numberOfCustomers = this.getRandomCustomersPerHour();

    
  }

  render: function(){
    this.calculateCookiesSoldPerHour
    console.log('the render');
  }
}

Seattle.render();



console.log(Seattle.getRandomCustomersPerHour());

// let Tokyo = {
//   name: tokyoStore,
//   min: 3,
//   max: 24,
//   avg: 1.2,

//   getRandomCustomersPerHour: function rndmPerHr(){
//     return math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }

// }

// let Dubai = {
//   min: 11,
//   max: 38,
//   avg: 3.7,

//   getRandomCustomersPerHour: function rndmPerHr(){
//     return math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }

// }

// let Paris = {
//   min: 20,
//   max: 38,
//   avg: 2.3,
  
//   getRandomCustomersPerHour: function rndmPerHr(){
//     return math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }

// }

// let Lima = {
//   min: 2,
//   max: 16,
//   avg: 4.6,

//   getRandomCustomersPerHour: function rndmPerHr(){
//     return math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }

// }


  



