import React, { Component } from 'react'
import Form from '../../components/Form/Form'
import POTable from '../../components/POTable/POTable'
import PO from '../../utils/po'


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
            addPO: []
        }
    }

    componentDidMount() {
        PO.getAll()
            .then(({ data }) => {
                let addPO = this.state.addPO
                data.forEach(po => {
                    addPO.push(po)
                })
                this.setState({ addPO })
                console.log(addPO)
            })
            .catch(e => console.error(e))
    }

    handleFormSubmit = event => {
        event.preventDefault()
        let addPO = this.state.addPO
        addPO.push({
            poNumber: this.state.poNumber,
            street: this.state.street,
            city: this.state.city,
            zip: parseInt(this.state.zip),
            note: this.state.note,
            userId: JSON.parse(localStorage.getItem('user')).id,
            status: 'In Process',
            route: 'In Process',
            pickupDate: this.state.pickupDate
        })
        PO.postOne(addPO)
        this.setState({ addPO })
        console.log(addPO)

    }

    handleInputChange = event => {
        this.setState({ [event.target.id]: event.target.value })
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
                    pickupdate={this.pickupDate}
                />
                <POTable addPO={this.state.addPO} />
            </>
        )
    }
}

export default AddPO