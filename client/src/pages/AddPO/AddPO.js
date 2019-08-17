import React, { Component } from 'react'
import Form from '../../components/Form'
import PO from '../../utils/po'


class AddPO extends Component {
    state = {
        poNumber: '',
        street: '',
        city: '',
        zip: '',
        notes: '',
    }

    componentDidMount() {

    }


    handleFormSubmit = event => {
        event.preventDefault()
        let addPO = {
            poNumber: this.state.poNumber,
            street: this.state.street,
            city: this.state.city,
            zip: parseInt(this.state.zip),
            note: this.state.note,
            userId: JSON.parse(localStorage.getItem('user')).id,
            status: 'In Process',
            route: 'In Process'
        }

        PO.postOne(addPO)
        this.setState({ poNumber: '', street: '', city: '', zip: '', note: '' })
    }

    handleInputChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    render() {
        return (
            <Form handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                poNumber={this.poNumber}
                street={this.street}
                city={this.city}
                zip={this.zip}
                note={this.note}
            />
        )
    }
}

export default AddPO