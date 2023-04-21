import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from './CheckoutSteps'
import { useAlert } from "react-alert";

import { OutTable, ExcelRenderer } from 'react-excel-renderer';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
import { uploadExcelApi } from 'actions/excelActions';
import { DataGrid } from '@mui/x-data-grid';
import { isTemplateMiddle } from 'typescript';
import EmployeeExcelTable from 'components/Cards/EmployeeExcelTable';
import EmployeeSheetTable from 'components/Cards/EmployeeSheetTable';
const EmployeesRecord = () => {
    const { excelUploadResponse } = useSelector((state) => state.uploadExcel)
    const { zipUploadResponse } = useSelector((state) => state.zip)
    console.log(zipUploadResponse)
    console.log(excelUploadResponse)
    const file = localStorage.getItem('fileObj')
    console.log(file)
    return (
        <>
            <div className="relative items-stretch flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">ADMIN</h6>

                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <EmployeeSheetTable data={excelUploadResponse} />




                </div>
                <div className="relative w-full mb-3">



                </div>
            </div>
        </>
    )
}

export default EmployeesRecord