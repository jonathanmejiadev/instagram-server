'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
      {
        uuid: uuidv4(),
        username: 'Jhon_Doe',
        email: 'jhon@doe.com',
        password: '123456',
        profilePhoto: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: uuidv4(),
        username: 'Jose_Doe',
        email: 'jose@doe.com',
        password: '123456',
        profilePhoto: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
