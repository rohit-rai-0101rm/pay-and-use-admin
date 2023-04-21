/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { Redirect } from "react-router-dom";

export default function Index() {
  return (
    <>
    <Redirect to="/auth/login"/>
      
    </>
  );
}
