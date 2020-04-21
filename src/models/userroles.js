'use strict'
module.exports = (sequelize, DataTypes) => {
  const userRoles = sequelize.define('userRoles', {
    name: DataTypes.STRING,
    codeRole: DataTypes.STRING,
    isDelete: DataTypes.SMALLINT
  }, {})
  userRoles.associate = function (models) {
    userRoles.hasMany(models.users, { foreignKey: 'roleId' })
  }
  return userRoles
}
