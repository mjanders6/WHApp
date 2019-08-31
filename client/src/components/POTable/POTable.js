import React from 'react';
import { Table, Input } from 'reactstrap';


const PickUpTable = ({ addPO, routeDD, handleRouteChange, handleStatusChange }) =>
    <Table hover responsive>
        <thead>
            <tr>
                <th>PO #</th>
                <th>Notes</th>
                <th>Route</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {addPO.map(row => (
                <tr key={row.id}>
                    <td scope='row'>{row.poNumber}</td>
                    <td >{row.note}</td>
                    {/* <td >{row.route} <RouteDropDown /></td> */}
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
                    {/* <td >{row.status}</td> */}
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
                </tr>
            ))}
        </tbody>
    </Table>

export default PickUpTable