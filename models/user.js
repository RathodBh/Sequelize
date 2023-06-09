"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            user.hasMany(models.transactions, {
                foreignKey: "user_id",
                // as: "user",
            }); 
            // define association here
        }
    }
    user.init(
        {
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "user",
            // freezeTableName: true,
        }
    );
    return user;
};
