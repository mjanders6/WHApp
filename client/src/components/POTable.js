import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));


const PickUpTable = ({POs}) => {
    const classes = useStyles();

    return (

        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>PO #</TableCell>
                        <TableCell align="right">Notes</TableCell>
                        <TableCell align="right">Route</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {POs.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.poNumber}
                            </TableCell>
                            <TableCell align="right">{row.note}</TableCell>
                            <TableCell align="right">{row.route}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
export default PickUpTable