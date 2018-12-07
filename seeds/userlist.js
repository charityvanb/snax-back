
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          fname: 'Ben',
          lname: 'Falafal',
          email: 'ben_email@gmail.com', 
          hashed_password:'Password'
      },
      {
          fname: 'Andrew',
          lname: 'Peterson',
          email: 'andrew_email@gmail.com', 
          hashed_password:'sickBro'
      },
      {
          fname: 'Peggy',
          lname: 'Smith',
          email: 'peggy_email@gmail.com', 
          hashed_password:'potatoShoe'
      },
      {
          fname: 'Allie',
          lname: 'Thompson',
          email: 'allie_email@gmail.com', 
          hashed_password:'dumplingtoes'
      },
      {
          fname: 'Robert',
          lname: 'Smith',
          email: 'robert_email@gmail.com', 
          hashed_password:'stinkyCheese'
      },
      {
          fname: 'Albert',
          lname: 'Doyle',
          email: 'albert_email@gmail.com', 
          hashed_password:'fishStick'
      },
      {
          fname: 'Matthew',
          lname: 'Chong',
          email: 'matthew_email@gmail.com', 
          hashed_password:'oopsChicken'
      },
      {
          fname: 'Sallie',
          lname: 'Valdez',
          email: 'sallie_email@gmail.com', 
          hashed_password:'sparkleCakes'
      },
      {
          fname: 'Sam',
          lname: 'Ussery',
          email: 'sam_email@gmail.com', 
          hashed_password:'pricklyPomogranite'
      },
      {
          fname: 'Astrid',
          lname: 'Lewis',
          email: 'astrid_email@gmail.com', 
          hashed_password:'milkTea'
      }
      ]);
    });
};
