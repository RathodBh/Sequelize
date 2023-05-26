'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      transactions.belongsTo(models.user, {
          foreignKey: "user_id",
          // as: "user",
      }); 
      // define association here
    }
  }
  transactions.init({
    trans_date: DataTypes.STRING,
    transaction_type: DataTypes.STRING,
    month_year: DataTypes.STRING,
    from_account: DataTypes.STRING,
    to_account: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    receipt: DataTypes.STRING,
    notes: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};