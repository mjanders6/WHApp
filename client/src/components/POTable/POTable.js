import React from 'react';
import { Table } from 'reactstrap';


const PickUpTable = ({ addPO }) => 
        <Table hover>
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
                        <td key={row.id}  scope='row'>{row.poNumber}</td>
                        <td key={row.id} >{row.note}</td>
                        <td key={row.id} >{row.route}</td>
                        <td key={row.id} >{row.status}</td>
                    </tr>
                ))}
            </tbody>
        </Table>

export default PickUpTable