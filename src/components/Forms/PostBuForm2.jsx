import {
    TextField,
    FormControlLabel,
    Checkbox,
    FormLabel,
    FormControl,
    FormHelperText,
    RadioGroup,
    Radio,
    InputLabel,
    Switch,
    Select,
    MenuItem,
    Button,
  } from "@material-ui/core";import React, { useState } from 'react'
  import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import { Controller, useForm } from "react-hook-form";
  const useStyles = makeStyles((theme) => ({
    inputField: {
      width: "100%",
      margin: theme.spacing(1, 0),
    },
  }));
const PostBuForm2 = () => {
    const [isDaySpecific, setIsDaySpecific] = useState('false')
    const [isDateSpecific, setIsDateSpecific] = useState('false')

    const history=useHistory()
    const classes = useStyles();
    const biweeklyTypeData=JSON.parse(sessionStorage.getItem("postBuData2"))
    const { register, handleSubmit, control, errors } = useForm();
    const prevData=JSON.parse(sessionStorage.getItem("postBuData"))
    console.log(prevData.financialYear)
    const {financialYear,salaryProcessingType}=prevData
    console.log(financialYear,salaryProcessingType)
    const onSubmit = (data) => {
        console.log(data.biweeklyType);
        if(data.biweeklyType==='daySpecific'){
history.push('/admin/daySpecific')   
     }
        if(data.biweeklyType==='dateSpecific'){
history.push('/admin/dateSpecific')
        }
        sessionStorage.setItem("postBuData2", JSON.stringify(data));
      }
    console.log(isDaySpecific,isDateSpecific)
if(salaryProcessingType==="monthly"){
    return(
        <h1>monthly</h1>
    )
}
if(salaryProcessingType==="weekly"){
    return(
        <h1>weekly</h1>
    )
}
if(salaryProcessingType==="biweekly"){
    return(
        <div className="box">
      <div className="box-primary">
      </div>
      <div className="box-secondary">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 1) TextField */}
         



          {/* Radio Buttons */}
          <FormControl
            className={classes.inputField}
            error={Boolean(errors.biweeklyType)}
          >
            <FormLabel>Choose Your biweekly type</FormLabel>
            <RadioGroup row name="biweeklyType">
              <FormControlLabel
                value="daySpecific"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your  biweekly type",
                    })}
                  />
                }
                label="daySpecific"
              />
              <FormControlLabel
                value="dateSpecific"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your Salary processing type",
                    })}
                  />
                }
                label="dateSpecific"
              />
              
              
            </RadioGroup>
            <FormHelperText>{errors.biweeklyType?.message}</FormHelperText>
          </FormControl>

          {/* Select */}
              

          <Button variant="contained" color="primary" type="submit">
           Confirm
          </Button>
        </form>
      </div>
    </div>
      

    )
}

    
  return (
    <div>
    {isDaySpecific ? (
    <h1>asxasx</h1>
    ) : (
      <h1>dateSpecific</h1>
    )}
  </div>
  )
}

export default PostBuForm2