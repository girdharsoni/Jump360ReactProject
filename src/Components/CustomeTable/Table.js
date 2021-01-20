import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { CSVLink } from 'react-csv';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popover from '../CustomeTable/Popover'

import {
    Button,
    Toolbar,
    Typography,
    Checkbox,
    TablePagination
} from '@material-ui/core';
import { ScaleLoader } from 'react-spinners';

const useStyles = theme => ({
    root: {
        width: '100%',
        overflowX: 'auto'
    },
    table: {
        minWidth: 650
    },
    title: {
        flex: '1 1 100%'
    },
    toolbar: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1)
    },
    colvisible: {
        display: 'table-cell'
    },
    colhide: {
        display: 'none'
    },
    tabcell: {
        padding: '2px 10px',
        fontSize: '0.8rem',
        whiteSpace: 'nowrap',
        width: '90px'
    },
    notificationButton: {
        marginBottom: '0%',
        marginTop: '1%',
        marginLeft: '2%'
    }
});
class CustomTable extends Component {
    constructor(props) {
        super(props);
        console.log({ props });

        this.state = {
            selectedRows: [],
            data: props.data,
            classes: props.classes
        };
        this.parameters = {}
        this.tableLoader = (
            <TableRow style={{ height: '300px', position: 'relative' }}>
                <TableCell colSpan={100}>
                    <ScaleLoader
                        color={'#3F75B3'}
                        css={{
                            textAlign: 'center'
                        }}
                    ></ScaleLoader>
                </TableCell>
            </TableRow>
        );

        this.numericIndex = false;
        this.headerChecked = false;
        this.getRoWData = this.getRoWData.bind(this);
       // this.getTableCellElement = this.getTableCellElement.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    }

    getRoWData(data, cols, classes) {
        console.log(data)
        console.log(cols)
        const rowData = data.map((row, index) => {
            return (
                <TableRow
                    key={row[this.props.name] ? row[this.props.name] : index + 1}

                    style={
                        index % 2 ? { background: '#f2f2f2' } : { background: 'white' }
                    }>
                    {this.getTableCellElement(row, cols)}
                </TableRow>
            );
        });
        return rowData;
    }

    getTableHeaderCols(cols) {
        const classes = this.state.classes;
        // console.log(cols)
        const colData = cols.map(col => {
            return (
                <TableCell
                    style={col.name === '' || col.name === '' || col.name === '' ?
                        {
                            position: 'sticky',
                            left: '0px',
                            zIndex: '1070',
                            backgroundColor: 'inherit'
                        } : col.name === '' || col.name === '' ?
                            col.name === '' ?
                                {
                                    position: 'sticky',
                                    left: '70px',
                                    zIndex: '1070',
                                    backgroundColor: 'inherit'
                                } :
                                {
                                    position: 'sticky',
                                    left: '90px',
                                    zIndex: '1070',
                                    backgroundColor: 'inherit'
                                } : null
                    }
                    key={col.id}
                    align='center'
                    className={`${col.isColumnVisible ? classes.colvisible : classes.colhide
                        } ${classes.tabcell}`}>
                    {col.label}
                </TableCell>
            );
        });
        return colData;
    }

    getTableCellElement(row, cols) {
        console.log(row, cols);
        const classes = this.state.classes;
        const lastColumn = cols.length - 1;
        let count = 0;
        const Tablecells = cols.map((column, index) => {

            count++;
            if (column.name === 'invoiceUrl') {
                return (<Link target='_blank' href={row[column.name]}>
                    {row[column.name]}
                </Link>)
            }

            return index !== lastColumn ? (
                <TableCell
                    style={column.name === '' || column.name === '' || column.name === '' ?
                        {
                            position: 'sticky',
                            left: '0px',

                            backgroundColor: 'inherit',

                            width: '30px',

                        } : column.name === '' || column.name === '' ?
                            {
                                position: 'sticky',
                                left: '75px',

                                backgroundColor: 'inherit',

                                width: '30px',
                            } : null
                    }
                    key={column.id}
                    align='center'
                    className={`${column.isColumnVisible ? classes.colvisible : classes.colhide
                        } ${classes.tabcell}`}>


                    {column.name === 'view' && row[column.name] != '--' ? (<Link >view</Link>
                    ) : ('')}

                    {column.name === "edit" && row[column.name] != '--' ? (<Link  >edit</Link>
                    ) : ('')}


                    {column.name != 'detail' ? row[column.name] : ''}

                </TableCell>
            ) : (
                    <TableCell
                        style={{ whiteSpace: 'wrap' }}

                        key={column.id}
                        className={`${column.isColumnVisible ? classes.colvisible : classes.colhide
                            } ${classes.tabcell}`}
                    >

                    {column.isColumnVisible ? (
                    <Popover
                        data={row}
                        links={this.props.links}
                    ></Popover>
                    ) : null}

                    </TableCell>
                );
        });
        return Tablecells;
    }

    handleChangePage(nextPage) {
        this.props.tablePagination.changePage(
            this.props.tablePagination.rowsPerPage,
            nextPage
        );
    }



    handleChangeRowsPerPage(event) {
        const newrowsPerPage = parseInt(event.target.value, 10);
        if (newrowsPerPage !== this.props.tablePagination.rowsPerPage) {
            this.props.tablePagination.changePage(newrowsPerPage, 0);
        }
    }

    componentDidMount() {
        console.log(this.props);
        const rowData = this.getRoWData(
            this.props.data,
            this.props.columns,
            this.state.classes
        );
        this.setState({ rowData: rowData })
    }

    render() {
        console.log(this.props.data);
        const classes = this.state.classes;
        const colms = this.getTableHeaderCols(this.props.columns);

        return (
            <div>
                <ToastContainer
                    position='top-right'
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    autoClose={4000}
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover>
                </ToastContainer>

                <Paper className={classes.root} style={{ height: '73vh', width: '100%' }}>
                    {this.props.title ? (
                        <Toolbar className={classes.toolbar}>
                            <Typography variant='h6' id='tableTitle' className={classes.title}>
                                {this.props.title}
                                {/* <IconButton variant="contained" color="primary" >
                                    <AddCircleIcon />
                                </IconButton> */}
                            </Typography>
                        </Toolbar>
                    ) : null}
                    <Table className={classes.table} stickyHeader aria-label='sticky table'>
                        <TableHead>
                            <TableRow>
                                {colms}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.rowData
                            }
                        </TableBody>
                    </Table>
                    <div style={{marginBottom:"15px"}}>
                    <Button
                        className={classes.notificationButton}
                        style={{ backgroundColor: '#3D4977', color: 'white' }}>
                        <CSVLink
                            data={this.props.data}
                            filename={`${this.props.title}.csv`}
                            className='btn btn-primary'
                            target='_blank'
                            style={{
                                color: 'inherit',
                                textDecoration: 'none',
                                fontWeight: '500'
                            }}>
                            Export To Excel
                        </CSVLink>
                    </Button>
                    </div>

                    {/* <TablePagination
                        rowsPerPageOptions={this.props.tablePagination.rowsOptions}
                        component='div'
                        count={this.props.tablePagination.count}
                        rowsPerPage={this.props.tablePagination.rowsPerPage}
                        page={this.props.tablePagination.currentPage}
                        onChangePage={(event, nextPage) => {
                            this.handleChangePage(nextPage);
                        }}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    /> */}
                </Paper>
            </div>
        );
    }
}
export default withStyles(useStyles)(CustomTable);
