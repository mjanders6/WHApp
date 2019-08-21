import React, { Component } from 'react'
import Form from '../../components/Form'
import POTable from '../../components/POTable'
import PO from '../../utils/po'


class AddPO extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // }

    state = {
        poNumber: '',
        street: '',
        city: '',
        zip: '',
        notes: '',
        POs: [],
        pickupdate: ''
    }

    componentDidMount() {
        PO.getAll()
            .then(({ data }) => {
                let POs = this.state.POs
                data.forEach(po => {
                    POs.push({
                        id: po.id,
                        note: po.note,
                        poNumber: po.poNumber,
                        status: po.status,
                        route: po.route
                    })
                })
                console.log(data)
            })
            .catch(e => console.error(e))
    }


    handleFormSubmit = event => {
        event.preventDefault()
        let addPO = {
            poNumber: this.poNumber,
            street: this.state.street,
            city: this.state.city,
            zip: parseInt(this.state.zip),
            note: this.state.note,
            userId: JSON.parse(localStorage.getItem('user')).id,
            status: 'In Process',
            route: 'In Process',
            pickupdate: this.state.pickupdate
        }
        console.log(addPO)
        // PO.postOne(addPO)
    }

    handleInputChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleGetPOData = event => {
        event.preventDefault()
        PO.getAll()
            .then(({ data }) => {
                let POs = this.state.POs
                data.forEach(po => {
                    POs.push({
                        id: po.id,
                        note: po.note,
                        poNumber: po.poNumber,
                        status: po.status,
                        route: po.route
                    })
                })
                this.setState(POs)
                console.log(POs)
            })
            .catch(e => console.error(e))
    }

    render() {
        return (
            <>
                <Form handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    poNumber={this.poNumber}
                    street={this.street}
                    city={this.city}
                    zip={this.zip}
                    note={this.note}
                    pickupdate={this.pickupdate}
                />
                <POTable POs={this.state.POs} />
            </>
        )
    }
}

export default AddPO