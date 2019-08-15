const db = require('../models')

module.exports = app => {
    app.get('/users', (req, res) => {
        db.User.findAll()
            .then(r => res.json(r))
            .catch(e => console.error(r))
    })
    app.get('/users/:id', (req, res) => {
        db.User.findOne({where: {id: req.params.id}})
            .then(r => res.json(r))
            .catch(e => console.error(r))
    })
    app.post('/users', (req, res) => {
        db.User.create(req.body)
            .then(_ => res.sendStatus(200))
            .catch(e => console.error(e))
    })
    app.put('/users/loggedin/:id', (req, res) => {
        db.User.update(req.body, {where: { id: req.params.id } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.error(e))
    })
}