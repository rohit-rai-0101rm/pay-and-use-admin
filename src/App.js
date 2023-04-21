import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import {useSelector,useDispatch} from "react-redux"
// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import CreateLegalEntity from "views/admin/CreateLegalEntity/CreateLegalEntity";
import { getCompanyMasterList } from "actions/companyMasterActions";
import CompanyMasterList from "views/admin/CompanyMasterList";
import { getCompanyMasterDetails } from "actions/legalEntityActions";
import CompanyMasterDeails from "views/admin/CompanyMasterDeails";
import CreateBuisnessUnit from "views/admin/CreateBuisnessUnit/CreateBuisnessUnit";
import Redirectd from "components/Cards/Redirectd/Redirectd";
import DragnDrop from "components/DragnDrop";
import DataCompare from "views/DataCompare";
import EmployerLayout from "layouts/Employer";
function App(){
  
const dispatch=useDispatch()

  
return <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/employer" component={EmployerLayout} />
      <Route path="/redirects" component={Redirectd}/>
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />

      <Route path="/admin/employeedd" exact component={Profile} />
      <Route path="/" exact component={Index} />
      <Route path="/create/legalEntity" exact component={CreateLegalEntity} />
      <Route path="/create/buisnessUnit" exact component={CreateBuisnessUnit} />

      <Route path="/companyMaster/:id" exact component={CompanyMasterDeails} />
      <Route path="/dnd" exact component={DragnDrop} />



      {/* add redirect for first page */}
      <Redirect from="*" to="/auth/login" />
    </Switch>
  </BrowserRouter>

}
export default App