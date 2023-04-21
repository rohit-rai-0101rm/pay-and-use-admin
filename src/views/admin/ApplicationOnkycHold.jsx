import GlobalFilterForAuthandSmsSent from 'components/MockData/GlobalFilterForAuthandSmsSent';
import moment from 'moment';
import React, { useMemo } from 'react'
import { CSVLink } from 'react-csv';
import { useHistory } from 'react-router';
import { useGlobalFilter, usePagination, useRowSelect, useTable } from 'react-table';
import Data from "../../components/MockData/restOf.json"
const ApplicationOnkycHold = () => {
    const color="light"
    const history=useHistory()
    
    
    const COLUMNS = [
        {
            Header: "Employee Code",
            accessor: "empCode",
        },
        {
            Header: "Employee Name",
            accessor: "empName",

        },
        {
            Header: "Buisness Unit Name",
            accessor: "buName",

        },
        {
            Header: "Loan Product",
            accessor: "loanProduct",

        },
        {
            Header: "Loan Amount",
            accessor: "loanAmount",

        },




        {
            Header: "Last Action Date",
            accessor: "lastActionDate",
            Cell: ({ value }) => {
                return moment(value).fromNow();
            },

        },
        {
            Header: " View Details",

            width: "12.5%",
            Cell: ({ row }) => {
                return <button class="bg-whiteSmoke-500 text-black active:bg-lightBlue-500 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150" onClick={() => handleProceed(row.original.id, row.original.groupCode)}>
                    View
                </button>;
            },
        },


    ]
    const handleProceed = (id, grpCode) => {
        localStorage.setItem("groupCode", grpCode)
        history.push(`/admin/companiesInAGroup/${id}`)
    }
    const columns = useMemo(() => COLUMNS, [])
    const data = Data
    console.log(data)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        selectedFlatRows,
        state,
        setGlobalFilter,
        page: pg,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        setPageSize,
        gotoPage,
        pageCount,
        prepareRow
      } = useTable({
        columns,
        data,
        initialState: {
          pageIndex: 0
        }
      },
    
        useGlobalFilter,
        usePagination,
        useRowSelect,
      )
      const { pageIndex, pageSize, globalFilter } = state
      
      return (
        <ErrorPopup title="applicationOnKycHold"/>

    
      );
}

export default ApplicationOnkycHold