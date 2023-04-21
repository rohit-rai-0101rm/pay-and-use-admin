import {format} from 'date-fns'
import moment from 'moment';

export const COMPLETED_LOANS_COLUMNS = [
  {
    Header: "Loan Id",
    accessor: "loanId",
    Footer: "Loan Id",

    sticky:'left'  
  
  },


  {
    Header: "Employee Name",
    Footer: "Employee Name",
    accessor: "employeeName",
    //sticky:'left'

  },


  {
    Header: "Loan Amnount",
    Footer: "Loan Amnount",
    accessor: "loanAmount",
    //sticky:'left'

  },


  {
    Header: "Date of Approval",
    Footer: "Date of Approval",
    accessor: "approvalDate",
    Cell: ({ value }) => {
      return moment().format(" Do  MMM  YYYY");
    },
  },
  {
    Header: "Date of Next Emi",
    Footer: "Date of Disbursal",
    accessor: "disbursalDate",
    Cell: ({ value }) => {
      return moment().format(" Do  MMM  YYYY");
    },
  },
];
