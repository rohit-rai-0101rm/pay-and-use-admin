import React from "react";
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
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },
}));

const PostBuForm1 = () => {
  const history=useHistory()
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    sessionStorage.setItem("postBuData", JSON.stringify(data));
    history.push("/admin/postBu2")
  }
  console.log(errors);
  return (
    <div className="box">
      <div className="box-primary">
      </div>
      <div className="box-secondary">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 1) TextField */}
          <FormControl
            fullWidth
            className={classes.inputField}
            error={Boolean(errors.course)}
          >
            <InputLabel id="demo-simple-select-label">
              Select Your Financial Year
            </InputLabel>
            {/* <Controller
              as={
                <Select>
                  <MenuItem value="">Choose your course</MenuItem>
                  <MenuItem value="Web Development">Web Development</MenuItem>
                  <MenuItem value="App Development">App Development</MenuItem>
                  <MenuItem value="UI/UX">UI/UX</MenuItem>
                </Select>
              }
              name="course"
              control={control}
              defaultValue=""
            /> */}
            <Controller
              render={(props) => (
                <Select value={props.value} onChange={props.onChange}>
                  <MenuItem value="2022-23">2022-23</MenuItem>
                  <MenuItem value="2023-24">2023-24</MenuItem>
                  <MenuItem value="2024-25">2024-25</MenuItem>
                </Select>
              )}
              name="financialYear"
              control={control}
              defaultValue=""
              rules={{
                required: "please choose your financialYear.",
              }}
            />
            <FormHelperText>{errors.financialYear?.message}</FormHelperText>
          </FormControl>



          {/* Radio Buttons */}
          <FormControl
            className={classes.inputField}
            error={Boolean(errors.salaryProcessingType)}
          >
            <FormLabel>Choose Your Salary Processing Type</FormLabel>
            <RadioGroup row name="salaryProcessingType">
              <FormControlLabel
                value="weekly"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your Salary processing type",
                    })}
                  />
                }
                label="weekly"
              />
              <FormControlLabel
                value="biweekly"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your Salary processing type",
                    })}
                  />
                }
                label="biweekly"
              />
              <FormControlLabel
                value="monthly"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your Salary processing type",
                    })}
                  />
                }
                label="monthly"
              />
              
            </RadioGroup>
            <FormHelperText>{errors.salaryProcessingType?.message}</FormHelperText>
          </FormControl>

          {/* Select */}
              

          <Button variant="contained" color="primary" type="submit">
            create new account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PostBuForm1;