import React, { useEffect } from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { employeeproductFetchApi } from "actions/EmployeeActions";

export default function ProductTable({ color, empCode, buCode }) {
    const { employeeProduct } = useSelector((state) => state.employeeProduct)
    console.log("employeeProduct", employeeProduct)
    const dispatch = useDispatch()
    console.log(empCode, buCode)
    const history = useHistory();
    useEffect(() => {
        dispatch(employeeproductFetchApi(empCode, buCode));


    }, [dispatch]);
    let headerElement = ["Loan Type", "Loan NAME", "Interest Rate", "Fee","Tenure"];

    const renderHeader = () => {

        return headerElement.map((key, index) => {
            return <th className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
            } key={index}>{key.toUpperCase()}</th>
        })
    }
    const renderBody = () => {
        console.log(employeeProduct)
        return employeeProduct && employeeProduct.map((product) => {
            console.log(product)
            return (
                <tr key={product?.id}>


                    <td className="border-t-0 text-black text-center px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{product.loanTypeCode}</td>

                    <td className="border-t-0 text-black text-center px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{product?.productDescription}</td>

                    <td className="border-t-0 text-black text-center px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{product?.interestRate}%</td>
                    <td className="border-t-0 text-black text-center px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{product?.processingFee}</td>

                    
                    <td className="border-t-0 text-black text-center px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{product?.tenure}</td>


                </tr>
            )
        })
    }
    return (
        <>
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6  rounded " +
                    (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
                }
            >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4  flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg " +
                                    (color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >
                                Loan Product
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                {renderHeader()}
                            </tr>
                        </thead>
                        <tbody>
                            {renderBody()}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

ProductTable.defaultProps = {
    color: "light",
};

ProductTable.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
