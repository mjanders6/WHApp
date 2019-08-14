const Sequelize = require('sequelize')
const sequelize = require('../config')

let Purchaseorder = require('./Purchaseorder.js')(sequelize, Sequelize)
let User = require('./User.js')(sequelize, Sequelize)

// relationships
// User.hasMany(List)
// List.belongsTo(User)
// List.hasMany(Item)
// Item.belongsTo(List)

User.hasMany(Purchaseorder)
Purchaseorder.belongsTo(User)

module.exports = {
  Purchaseorder, User
}
