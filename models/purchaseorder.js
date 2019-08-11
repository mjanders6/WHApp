module.exports = (sequelize, Sequelize) => {
    class Purchaseorder extends Sequelize.Model { }
    Purchaseorder.init(
        {
            poNumber: {
                // restrictions
                type: Sequelize.STRING,
                notNUll: true
            },
            route: {
                // restrictions
                type: Sequelize.STRING,
                notNUll: true
            },
            status: {
                type: Sequelize.STRING,
                notNUll: true
            },
            note: {
                type: Sequelize.STRING
            },
            poURL: {
                type: Sequelize.STRING
            }
        },
        {
            sequelize,
            modelName: 'purchaseorder'
        }
    )

    return Purchaseorder
}
