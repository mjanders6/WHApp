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
            POs: [],
            pickupdate: null,
            addPO: '',
            POs: []
        }
        // this.handleInputChange = this.handleInputChange.bind(this)
        // this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    componentDidMount() {
        PO.getAll()
            .then(({ data }) => {
                let POs = this.state.POs
                data.forEach(po => {
                    POs.push(po)
                })
                this.setState({ POs })
                console.log(POs)
            })
            .catch(e => console.error(e))
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
            route: 'In Process',
            pickupDate: this.state.pickupDate
        }
        // console.log(addPO)
        PO.postOne(addPO)
        this.setState({addPO, poNumber: '', street: '', city: '', zip: '', note: '', pickupDate: ''})
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
                <POTable POs={this.state.POs} />
            </>
        )
    }
}

export default AddPO