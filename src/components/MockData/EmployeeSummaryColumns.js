import { format } from "date-fns";
import moment from "moment";

export const EMPLOYEE_SUMMARY_COLUMNS = [
  {
    Header: "Employee Code",
    accessor: "empCode",
    Footer: "Employee Code",

    sticky: "left",
  },

  {
    Header: "Employee Name",
    Footer: "Employee Name",
    accessor: "empName",
    //sticky:'left'
  },

  {
    Header: "Amount To Be Recovered",
    Footer: "Amount To Be Recovered",
    accessor: "amountToBeRecovered",
    Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>

  },
  //sticky:'left'

  {
    Header: "Amount Recovered",
    Footer: "Amount Recovered",
    accessor: "amountRecovered",
    Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>

  },
  {
    Header: "Recovery Pending",
    Footer: "Recovery Pending",
    accessor: "recoveryPending",
    Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>

  },
];
