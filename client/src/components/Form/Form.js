import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import moment from 'moment';

const POForm = ({ poNumber, handleInputChange, handleFormSubmit, street, city, zip, note, pickupDate }) => {



  return (
    <Form>
      <FormGroup row>
        <Col xs={12} sm={6} lg={6}>
          <Label htmlFor="POPick">PO Pickup:</Label>
          <Input id="poNumber" type="text" name="search" value={poNumber} onChange={handleInputChange} />
        </Col>
        <Col xs={12} sm={4} lg={3}>
          <Label for="exampleSelect">Pickup Date</Label>
          <Input type="select" name="select" id="pickupDate" value={pickupDate} onChange={handleInputChange}>
            <option value="">Select a Date</option>
            <option value={moment().format("MM-DD-YYYY")}>Today</option>
            <option value={moment().add(1, 'days').format("MM-DD-YYYY")}>Tomorrow</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col xs={12} sm={4} lg={4}>
          <Label htmlFor="street">Street:</Label>
          <Input id="street" type="text" name="search" value={street} onChange={handleInputChange} />
        </Col>
        <Col xs={6} sm={4} lg={4}>
          <Label htmlFor="city">City:</Label>
          <Input id="city" type="text" name="search" value={city} onChange={handleInputChange} />
        </Col>
        <Col xs={6} sm={4} lg={4}>
          <Label htmlFor="zip">Zip Code:</Label>
          <Input id="zip" type="text" name="search" value={zip} onChange={handleInputChange} />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col xs={12} sm={12} lg={12}>
          <Label htmlFor="note">Notes:</Label>
          <Input id="note" type="textarea" name="search" value={note} onChange={handleInputChange} />
        </Col>
      </FormGroup>

      <Button onClick={handleFormSubmit}>Schedule Your PO</Button>
    </Form>
  );
}

export default POForm 