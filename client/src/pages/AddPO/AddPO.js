import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap'
import './AddPO.css'
import Form from '../../components/Form/Form'
import POTable from '../../components/POTable/POTable'
import PO from '../../utils/po'
import User from '../../utils/user'



class AddPO extends Component {
    constructor(props) {
        super(props)
        this.state = {
            poNumber: '',
            street: '',
            city: '',
            zip: '',
            notes: '',
            pickupdate: null,
            addPO: [],
            modal: false,
            filter: ''
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentDidMount() {
        PO.getAll()
            .then(({ data }) => {
                this.setState({ addPO: data })
            })
            .catch(e => console.error(e))

        User.getOne(1)
            .then(({ data }) => {
                localStorage.setItem('user', JSON.stringify(data))
            })
            .catch(e => console.error(e))
    }

    nameFilter = event => {
        event.preventDefault()
        let name = JSON.parse(localStorage.getItem('user')).id
        PO.getPObyUser(name)
            .then(({ data }) => {
                this.setState({ addPO: data })
            })
            .catch(e => console.error(e))
    }
    
    clearFilter = event => {
        event.preventDefault()
        PO.getAll()
            .then(({ data }) => {
                this.setState({ addPO: data })
            })
            .catch(e => console.error(e))
    }

    handleFormSubmit = event => {
        event.preventDefault()
        let pos = {
            poNumber: this.state.poNumber,
            street: this.state.street,
            city: this.state.city,
            zip: parseInt(this.state.zip),
            note: this.state.note,
            userId: JSON.parse(localStorage.getItem('user')).id,
            status: 'In Process',
            route: 'In Process',
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

    render() {
        return (
            <>
                <Jumbotron fluid>
                    <Container fluid>
                        <Row>
                            <Col>
                                <h1 className="display-3">Hello, world!</h1>
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
                <POTable addPO={this.state.addPO} />
            </>
        )
    }
}

export default AddPO