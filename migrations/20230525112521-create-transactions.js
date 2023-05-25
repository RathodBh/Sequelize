"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("transactions", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            trans_date: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            transaction_type: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            month_year: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            from_account: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            to_account: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            amount: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            receipt: {
                type: Sequelize.STRING,
            },
            notes: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("transactions");
    },
};
