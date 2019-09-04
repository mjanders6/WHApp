import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap'
import './AddPO.css'
import Form from '../../components/Form/Form'
import POTable from '../../components/POTable/POTable'
import PO from '../../utils/po'
import Notes from '../../utils/drivernotes'



class AddPO extends Component {
    constructor(props) {
        super(props)
        this.state = {
            poNumber: '',
            street: '',
            city: '',
            zip: '',
            pickupdate: null,
            addPO: [],
            modal: false,
            filter: '',
            routeDD: '',
            route: '',
            driverNote: '',
            poNotes: [],
            newPO: []
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentDidMount() {
        let newPO = this.state.newPO
        newPO.notes = []

        PO.getAll()
            .then(({ data }) => {
                let poData = data
                data.map(po => {
                    po.driverNote = []
                })
                this.setState({ addPO: data })
            })
            .catch(e => console.error(e))

        Notes.getAllNotes()
            .then(({ data }) => {
                let addPO = this.state.addPO
                data.map(note => {
                    addPO.map(po => {
                        if (po.id === parseInt(note.purchaseorderId)) {
                            po.driverNote.push(note.note)
                        }
                    })
                })
                // console.log(addPO)
                this.setState({ addPO })
            })
            .catch(e => console.error(e))
    }

    nameFilter = event => {
        event.preventDefault()
        let name = JSON.parse(localStorage.getItem('user')).id
        PO.getPObyUser(name)
            .then(({ data }) => {
                data.map(po => {
                    po.driverNote = []
                })
                this.setState({ addPO: data })
            })
            .catch(e => console.error(e))

        Notes.getAllNotes()
            .then(({ data }) => {
                let addPO = this.state.addPO
                data.map(note => {
                    addPO.map(po => {
                        if (po.id === parseInt(note.purchaseorderId)) {
                            po.driverNote.push(note.note)
                        }
                    })
                })
                // console.log(addPO)
                this.setState({ addPO })
            })
            .catch(e => console.error(e))
    }

    clearFilter = event => {
        event.preventDefault()
        PO.getAll()
            .then(({ data }) => {
                data.map(po => {
                    po.driverNote = []
                })
                this.setState({ addPO: data })
            })
            .catch(e => console.error(e))

        Notes.getAllNotes()
            .then(({ data }) => {
                let addPO = this.state.addPO
                data.map(note => {
                    addPO.map(po => {
                        if (po.id === parseInt(note.purchaseorderId)) {
                            po.driverNote.push(note.note)
                        }
                    })
                })
                // console.log(addPO)
                this.setState({ addPO })
            })
            .catch(e => console.error(e))
    }

    handleFormSubmit = event => {
        event.preventDefault()
        let pos = {
            poNumber: this.state.poNumber,
            street: this.state.street,
            driverNote: [],
            city: this.state.city,
            zip: parseInt(this.state.zip),
            note: this.state.note,
            userId: JSON.parse(localStorage.getItem('user')).id,
            status: 'Pending Dispatch',
            route: 'Pending Dispatch',
            pickupDate: this.state.pickupDate
        }

        let addPO = this.state.addPO
        PO.postOne(pos) // add to DB
        addPO.push(pos) // push to state
        this.setState({ addPO }) // setState to show new addition
        // console.log(addPO)

    }

    handleInputChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleRouteChange = event => {
        this.setState({ [event.target.id]: event.target.value })
        // console.log(event.target.id)
        // console.log(event.target.value)
        PO.routeUpdate(event.target.id, { route: event.target.value })
    }

    handleStatusChange = event => {
        this.setState({ [event.target.id]: event.target.value })
        // console.log(event.target.id)
        // console.log(event.target.value)
        PO.routeUpdate(event.target.id, { status: event.target.value })
    }

    handleDriverNote = event => {
        event.preventDefault()
        let drvNote = {
            note: this.state.driverNote,
            userId: JSON.parse(localStorage.getItem('user')).id,
            purchaseorderId: event.target.id
        }
        let addPO = this.state.addPO
        Notes.postNote(drvNote)
        addPO.map(po => {
            if (po.id === parseInt(drvNote.purchaseorderId)) {
                po.driverNote.push(drvNote.note)
            }
        })
        this.setState({ addPO })
    }

    render() {
        return (
            <>
                <Jumbotron fluid>
                    <Container fluid>
                        <Row>
                            <Col>
                                <h1 className="display-3">Hello, {JSON.parse(localStorage.getItem('user')).username}</h1>
                                <hr className="my-2" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button id='modal-addPO' color="primary" onClick={this.toggle}>Add PO</Button>
                                <Form handleInputChange={this.handleInputChange}
                                    handleFormSubmit={this.handleFormSubmit}
                                    toggle={this.toggle}
                                    modal={this.state.modal}
                                    poNumber={this.poNumber}
                                    street={this.street}
                                    city={this.city}
                                    zip={this.zip}
                                    note={this.note}
                                    pickupdate={this.pickupDate}
                                />
                            </Col>
                            <Col>
                                <Button id='filter-btn' color="primary" onClick={this.clearFilter}>Clear Filter</Button>
                                <Button id='filter-btn' color="primary" onClick={this.nameFilter}>Filter by Your Name</Button>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <POTable handleRouteChange={this.handleRouteChange}
                    handleInputChange={this.handleInputChange}
                    handleStatusChange={this.handleStatusChange}
                    handleDriverNote={this.handleDriverNote}
                    addPO={this.state.addPO}
                    poNotes={this.state.poNotes}
                    routeDD={this.routeDD}
                    driverNote={this.driverNote} />
            </>
        )
    }
}

export default AddPO