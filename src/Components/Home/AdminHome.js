import React, { useState,useEffect } from 'react'
import CustomTable from '../CustomeTable/Table.js'
import { Container } from '@material-ui/core';
import restorentData from "../Data/RestorentData/RestorentData.json"
import CircularProgress from '@material-ui/core/CircularProgress';
import PopoverMenu from '../CustomeTable/Menu';
const AdminHome = (props) => {

    // const [rowsOptions, setRowsOptions] = useState([5, 10, 50, 100, 250, 500]);
    // const [isTableUpdating, setIsTableUpdating] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState()
    // const [currentPage, setCurrentPage] = useState();
    // const [count, setCount] = useState(0);
    const [Data, setData] = useState([])
    //const [change, setChange] = useState(0);
    
    const column = [
        {
          id: '1',
          name: 'id',
          label: "Id",
          isColumnVisible: true
        },
        {
          id: '2',
          name: 'restaurantName',
          label: "Restaurant's Name",
          isColumnVisible: true
        },
        {
          id: '3',
          name: 'address',
          label: "Address",
          isColumnVisible: true
        },
        {
          id: '4',
          name: 'contactName',
          label: "Contact Name",
          isColumnVisible: true
        },
        {
            id: '5',
            name: 'contactNumber',
            label: "Contact Number",
            isColumnVisible: true
        },
        {
            id: '6',
            name: 'view',
            label: 'View',
            isColumnVisible: false  
        },
        {
          id: '7',
          name: 'edit',
          label: 'Edit',
          isColumnVisible: false
        },
        {
          id: '8',
          name: 'action',
          label: 'Action',
          isColumnVisible: true
        }
    ]

    const getData = () => {
 
      setData(restorentData);
      setIsLoading(false)
      setRowsPerPage(rowsPerPage)
      setIsLoading(false)
    }

    useEffect(() => {
      getData()
    },[isLoading]);


    return(
        isLoading ?
        (
            <CircularProgress
            style={{
              position: 'absolute',
              // display: 'flex',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              width: '3em',
              height: '3em',
              margin: 'auto'
            }}>
          </CircularProgress>
        ):
        (
            <div>
                <Container>
                    <CustomTable
                    columns={column}
                    data={Data}
                    numericIndex={true}
                    title="Restorent's"
                    links={PopoverMenu}
                    >
                    </CustomTable>
                </Container>
            </div>
        )
    )
}

export default AdminHome;