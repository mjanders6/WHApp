const db = require('../models')

module.exports = app => {
    app.get('/purchaseorder', (req, res) => {
        db.Purchaseorder.findAll({
            include: [
                {
                    model: db.User
                },
                {
                    model: db.Notes,
                    include: [
                        {
                            model: db.User
                        }
                    ]
                }
            ]
        })
            .then(r => res.json(r))
            .catch(e => console.error(r))
    })
    app.get('/purchaseorder/:uId', (req, res) => {
        db.Purchaseorder.findAll({
            where: { userId: req.params.uId },
            include: [
                {
                    model: db.User
                },
                {
                    model: db.Notes,
                    include: [
                        {
                            model: db.User
                        }
                    ]
                }
            ]
        })
            .then(r => res.json(r))
            .catch(e => console.error(r))
    })
    app.post('/purchaseorder', (req, res) => {
        db.Purchaseorder.create(req.body)
            .then(_ => res.sendStatus(200))
            .catch(e => console.error(e))
    })
    app.put('/purchaseorder/route/:id', (req, res) => {
        db.Purchaseorder.update(req.body, { where: { id: req.params.id } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.error(e))
    })
    app.put('/purchaseorder/status/:id', (req, res) => {
        db.Purchaseorder.update(req.body, { where: { id: req.params.id } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.error(e))
    })
    app.put('/purchaseorder/notes/:id', (req, res) => {
        db.Purchaseorder.update(req.body, { where: { id: req.params.id } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.error(e))
    })
}