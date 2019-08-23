import React from 'react';
import { Table } from 'reactstrap';


const PickUpTable = ({ POs }) => {


    return (
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
                {POs.map(row => (
                    <tr key={row.id}>
                        <td scope='row'>{row.poNumber}</td>
                        <td>{row.note}</td>
                        <td>{row.route}</td>
                        <td>{row.status}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
export default PickUpTable