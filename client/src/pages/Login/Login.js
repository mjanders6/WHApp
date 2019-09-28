import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap'
import LoginForm from '../../components/LoginForm'
import User from '../../utils/user'


class AddPO extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            modal: false,
        }
        this.toggle = this.toggle.bind(this)
    }

    componentDidMount() {

    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleFormSubmit = event => {
        event.preventDefault()

        let email = this.state.email
        User.getUserName(email)
            .then(({ data }) => {
                localStorage.setItem('user', JSON.stringify(data))
                console.log(data)
                document.getElementById('loginForm').reset()
                this.setState(prevState => ({
                    modal: !prevState.modal
                }));
            })
            .catch(e => console.error(e))
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
                                <h1 className="display-3">Register or Login</h1>
                                <hr className="my-2" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button id='login' color="primary" onClick={this.toggle}>Login</Button>
                                <LoginForm
                                    handleInputChange={this.handleInputChange}
                                    handleFormSubmit={this.handleFormSubmit}
                                    email={this.email}
                                    toggle={this.toggle}
                                    modal={this.state.modal}
                                />
                            </Col>
                            {/* <Col>
                                <Button id='filter-btn' color="primary" onClick={this.clearFilter}>Clear Filter</Button>
                                <Button id='filter-btn' color="primary" onClick={this.nameFilter}>Filter by Your Name</Button>
                            </Col> */}
                        </Row>
                    </Container>
                </Jumbotron>
            </>
        )
    }
}

export default AddPO