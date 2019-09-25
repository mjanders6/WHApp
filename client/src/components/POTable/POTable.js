import React from 'react';
import './POTable.css'
import { Table, Input, Button } from 'reactstrap';


const PickUpTable = ({ addPO, routeDD, handleRouteChange, handleStatusChange, handleDriverNote, handleInputChange, driverNote }) =>
    <Table hover responsive>
        <thead>
            <tr>
                <th>PO #</th>
                <th>Notes</th>
                <th>Route</th>
                <th>Status</th>
                <th>Drivers Notes</th>
            </tr>
        </thead>
        <tbody>
            {addPO.map(row => (
                <tr id={row.id} key={row.id}>
                    <td scope='row'>{row.poNumber}</td>
                    <td >
                        <tr>{row.note}</tr>
                        <tr>{row.street}</tr>
                        <tr>{row.city}, {row.zip}</tr>
                    </td>
                    {/* Route - dropdown if dispatch or admin */}
                    {
                        JSON.parse(localStorage.getItem('user')).admin === 1 || JSON.parse(localStorage.getItem('user')).dispatch === 1 ?
                            <td >
                                <Input type="select" name="select" id={row.id} value={routeDD} onChange={handleRouteChange}>
                                    <option value="">{row.route}</option>
                                    <option value='OC'>OC</option>
                                    <option value='LA'>LA</option>
                                    <option value='Local'>Local</option>
                                    <option value='Temecula'>Temecula</option>
                                    <option value='Riverside'>Riverside</option>
                                </Input>
                            </td> :
                            <td>{row.route}</td>
                    }
                    {/* Status - dropdown if dispatch or admin */}
                    {
                        JSON.parse(localStorage.getItem('user')).admin === 1 || JSON.parse(localStorage.getItem('user')).dispatch === 1 ?
                            <td >
                                <Input type="select" name="select" id={row.id} value={routeDD} onChange={handleStatusChange}>
                                    <option value="">{row.status}</option>
                                    <option value='Routed'>Routed</option>
                                    <option value='Next Stop'>Next Stop</option>
                                    <option value='Picked Up'>Picked Up</option>
                                    <option value='Delivered'>Delivered</option>
                                </Input>
                            </td> :
                            <td>{row.status}</td>
                    }
                    {
                            <>
                                <td>{row.notes.map(note => (
                                    <tr>{note.user.username}: {note.note}</tr>
                                ))}</td>
                                <td><Input type="text" name="search" data-id={row.id} id='driverNote' value={driverNote} onChange={handleInputChange} /></td>
                                <td><Button color="primary" id={row.id} onClick={handleDriverNote}>Add Note</Button></td>
                            </> 
                    }
                </tr>
            ))}
        </tbody>
    </Table>

export default PickUpTable