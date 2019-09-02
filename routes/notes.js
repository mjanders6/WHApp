const db = require('../models')

module.exports = app => {
    app.get('/notes', (req, res) => {
        db.Notes.findAll()
            .then(r => res.json(r))
            .catch(e => console.error(r))
    })
    app.get('/notes/po/:poId', (req, res) => {
        db.Notes.findAll({ where: { purchaseorderId: req.params.poId } })
            .then(r => res.json(r))
            .catch(e => console.error(r))
    })
    // app.get('/notes/:id', (req, res) => {
    //     db.Notes.findOne({ where: { id: req.params.id } })
    //         .then(r => res.json(r))
    //         .catch(e => console.error(r))
    // })
    app.post('/notes', (req, res) => {
        db.Notes.create(req.body)
            .then(_ => res.sendStatus(200))
            .catch(e => console.error(e))
    })

}