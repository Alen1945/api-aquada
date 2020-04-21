'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      roleId: {
        type: Sequelize.BIGINT,
        references: {
          model: 'userRoles',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION',
        allowNull: false,
        defaultValue: 3
      },
      username: {
        type: Sequelize.STRING(80),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      status: {
        type: Sequelize.SMALLINT,
        defaultValue: 0
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
    return queryInterface.dropTable('users')
  }
}
