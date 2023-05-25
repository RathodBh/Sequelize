"use strict";

const user = require("../models/user").default;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users',[
            {
                email: "111rathodbhavesh@test.com",
                password: "Bhavesh111",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: "rathodjaspalsinh@test.com",
                password: "Jassi111",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
    },

    async down(queryInterface, Sequelize) {
      return queryInterface.bulkDelete("users", null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
