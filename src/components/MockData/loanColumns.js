import {format} from 'date-fns'
import moment from 'moment';

export const LOAN_COLUMNS = [
  {
    Header: "Employee Code",
    accessor: "empCode",
    Footer: "Employee Code",

    sticky:'left'  
  
  },


  {
    Header: " Name",
    Footer: "Name",
    accessor: "employeeName",
    //sticky:'left'

  },


  {
    Header: "Loan Amount",
    Footer: "Last Name",
    accessor: "loanAmount",
    //sticky:'left'

  },


  {
    Header: "Date of Pre-Approval",
    Footer: "Date of Approval",
    accessor: "approvalDate",
    Cell: ({ value }) => {
      return moment().format(" Do  MMM  YYYY");
    },

  },


  {
    Header: "Emi",
    Footer: "Emi",
    accessor: "emi",
  },

  
  
 
];
