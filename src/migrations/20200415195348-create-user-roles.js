'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userRoles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      codeRole: {
        type: Sequelize.STRING(5),
        allowNull: false,
        unique: true
      },
      isDelete: {
        type: Sequelize.SMALLINT,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userRoles')
  }
}
