"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("transactions", [
            {
                trans_date: "25/05/2023",
                transaction_type: "Home Expense",
                month_year: "2023 May",
                from_account: "Personal Account",
                to_account: "Real Living",
                amount: 5000,
                notes: "First note",
                user_id: "11",
                createdAt: new Date(),
                updatedAt:new Date(),
            },
            {
                trans_date: "24/04/2023",
                transaction_type: "Home Expense",
                month_year: "2023 April",
                from_account: "Personal Account",
                to_account: "Real Living",
                amount: 1000,
                notes: "First note",
                user_id: "12",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
       return queryInterface.bulkDelete("transactions")
    },
};
