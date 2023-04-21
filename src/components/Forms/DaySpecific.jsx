import React, { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { saveSalaryInfo } from "actions/formActions";

export default function DaySpecific({buCode}) {
    const dispatch=useDispatch()
    const history = useHistory()
    const [dropVal1, setDropVal1] = useState('')
    const [dropVal2, setDropVal2] = useState('')
    const [dropVal3, setDropVal3] = useState('')
    const [dropVal4, setDropVal4] = useState('')
    const handleChange = (event) => {
        setDropVal1(event.target.value)
    };

    const handleChange2 = (event) => {
        setDropVal2(event.target.value)
    };
    const handleChange3 = (event) => {
        setDropVal3(event.target.value)
    };
    const handleChange4 = (event) => {
        setDropVal4(event.target.value)
    };
    console.log("dropVal1", dropVal1)
    console.log("dropVal2", dropVal2)

    console.log("dropVal3", dropVal3)

    console.log("dropVal4", dropVal4)


const handleSubmit=()=>{
    const biweeklyDaySpecificDate1=dropVal1+dropVal2
    const biweeklyDaySpecificDate2=dropVal3+dropVal4
    dispatch(saveSalaryInfo({biweeklyDaySpecificDate1,biweeklyDaySpecificDate2}))
history.push(`/admin/salarySchedule/${buCode}`)
}



    return (
        <div>
            <div className='flex flex-row justify-between	'>
                <h1 className='mt-4'>Day Specific Date 1</h1>
                <div>
                    <FormControl sx={{ m: 1, minWidth: 180 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Drop Val 1</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            onChange={handleChange}
                            autoWidth
                            label="dropVal1"
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value={"everyFirst"}>Every First</MenuItem>
                            <MenuItem value={"everySecond"}>Every Second</MenuItem>
                            <MenuItem value={"everyThird"}>Every Third</MenuItem>
                            <MenuItem value={"everyFourth"}>Every Fourth</MenuItem>

                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 180 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Drop Val 2</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            onChange={handleChange2}
                            autoWidth
                            label="dropVal2"
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value={"Monday"}>Monday</MenuItem>
                            <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                            <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                            <MenuItem value={"Thursday"}>Thursday</MenuItem>
                            <MenuItem value={"Friday"}>Friday</MenuItem>
                            <MenuItem value={"Saturday"}>Saturday</MenuItem>

                        </Select>
                    </FormControl>

                </div>

                <h1 className='mt-4 mx-4'>Day Specific Date 2</h1>
                {
                    dropVal1 === "everyFirst" &&
                    <div className="mx-4">
                        <FormControl sx={{ m: 1, minWidth: 180 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Drop Val 3</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                onChange={handleChange3}
                                autoWidth
                                label="dropVal3"
                            >
                                <MenuItem value="">
                                </MenuItem>
                                <MenuItem value={"everyThird"}>Every Third</MenuItem>

                            </Select>
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: 180 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Drop Val 4</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                onChange={handleChange4}
                                autoWidth
                                label="dropVal4"
                            >
                                <MenuItem value="">
                                </MenuItem>
                                <MenuItem value={"Monday"}>Monday</MenuItem>
                                <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                                <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                                <MenuItem value={"Thursday"}>Thursday</MenuItem>
                                <MenuItem value={"Friday"}>Friday</MenuItem>
                                <MenuItem value={"Saturday"}>Saturday</MenuItem>

                            </Select>
                        </FormControl>

                    </div>


                }

                {
                    dropVal1 === "everySecond" &&
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 180 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Drop Val 3</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                onChange={handleChange3}
                                autoWidth
                                label="dropVal1"
                            >
                                <MenuItem value="">
                                </MenuItem>
                                <MenuItem value={"everyFourth"}>Every Fourth</MenuItem>

                            </Select>
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: 180 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Drop Val 4</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                onChange={handleChange4}
                                autoWidth
                                label="dropVal2"
                            >
                                <MenuItem value="">
                                </MenuItem>
                                <MenuItem value={"Monday"}>Monday</MenuItem>
                                <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                                <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                                <MenuItem value={"Thursday"}>Thursday</MenuItem>
                                <MenuItem value={"Friday"}>Friday</MenuItem>
                                <MenuItem value={"Saturday"}>Saturday</MenuItem>

                            </Select>
                        </FormControl>

                    </div>


                }
                <div>




                </div>



            </div>
            <div className='mt-16 mx-4'>
                    <Button onClick={handleSubmit}  variant="contained" color="primary" type="submit">
                        Confirm
                    </Button>
                </div>

        </div>


    );
}