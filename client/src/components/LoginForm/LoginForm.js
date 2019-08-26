import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

const LoginForm = ({ handleInputChange, handleFormSubmit, email, toggle, modal }) => {
  return (
    <>
    {/* <Button color="primary" onClick={toggle}>Add PO</Button> */}
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader>Add a PO</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup row>
            <Col xs={12} sm={4} lg={4}>
              <Label htmlFor="email">Email:</Label>
              <Input id="email" type="text" name="search" value={email} onChange={handleInputChange} />
            </Col>
          </FormGroup>

          <Button color="primary"onClick={handleFormSubmit}>Login</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </Form>
      </ModalBody>
    </Modal>
    </>
  )
}
export default LoginForm 