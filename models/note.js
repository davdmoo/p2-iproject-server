'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Note.hasMany(models.NoteLabel, { foreignKey: 'NoteId' });
      Note.belongsTo(models.User, { foreignKey: 'UserId' });
    }
  };
  Note.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    status: DataTypes.STRING,
    label: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Note;
};