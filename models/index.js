const Sequelize = require('sequelize')
const sequelize = require('../config')

let Purchaseorder = require('./Purchaseorder.js')(sequelize, Sequelize)
let User = require('./User.js')(sequelize, Sequelize)
let Notes = require('./Notes.js')(sequelize, Sequelize)

User.hasMany(Purchaseorder)
Purchaseorder.belongsTo(User)

User.hasMany(Notes)
Notes.belongsTo(User)

Purchaseorder.hasMany(Notes)
Notes.belongsTo(Purchaseorder)

module.exports = {
  Purchaseorder, User, Notes
}
