'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Messages.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  }
  Messages.init({
    id: DataTypes.INTEGER,
    contenu: DataTypes.STRING,
    idenvoyeur: DataTypes.INTEGER,
    idreceveur: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};