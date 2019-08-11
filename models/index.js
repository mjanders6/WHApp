const Sequelize = require('sequelize')
const sequelize = require('../config')

let Purchaseorder = require('./purchaseorder.js')(sequelize, Sequelize)

// relationships
// User.hasMany(List)
// List.belongsTo(User)
// List.hasMany(Item)
// Item.belongsTo(List)

module.exports = {
  Purchaseorder
}
