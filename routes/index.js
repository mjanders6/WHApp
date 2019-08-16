module.exports = (app) => {
    require('./poroute.js')(app)
    require('./users.js')(app)
    require('./notes.js')(app)
}