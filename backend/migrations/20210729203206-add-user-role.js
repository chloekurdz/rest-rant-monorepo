'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.addColumn('users', 'role', {
            type: Sequelize.DataTypes.ENUM,
            values: [
                'reviewer',
            admin,
        ],
        defaultValue: 'reviewer'
        })
    }
}