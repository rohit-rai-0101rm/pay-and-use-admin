import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import * as XLSX from "xlsx";

import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeData } from "actions/EmployeeActions";
import EmployeeSheetTable from "./Cards/EmployeeSheetTable";
import { useHistory } from "react-router";
const fileTypes = ["xlsx", "xls", "csv"];
const DragnDrop = () => {
  const employeeData  = useSelector((state) => state.employee.employeeData);

  const history=useHistory()
  const dispatch = useDispatch()
  const [items, setItems] = useState([]);
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);


    });
  };
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState();
  const [fileSize, setFileSize] = useState()
  const handleChange = (file) => {
    setFile(file);
    setFileName(file.name)
    setFileSize(file.size)
    console.log(file.size)
    readExcel(file);
  };
  const handleUploadError = (e) => {
    console.log(e)
  }
  console.log(file)
  console.log(items)
  useEffect(()=>{
    dispatch(getEmployeeData(items))

  },[items])
console.log(items)

  return (
    <div className="pt-24  h-96">
      <FileUploader onTypeError={handleUploadError} handleChange={handleChange} name="file" types={fileTypes} />
      <p>{fileName}{" "}{fileSize * 0.001}MB</p>
      <EmployeeSheetTable data={employeeData}/>
    </div>
  );
}




export default DragnDrop