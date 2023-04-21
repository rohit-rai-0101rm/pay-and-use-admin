import React, { Fragment } from "react";
import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";

import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import DateRangeIcon from '@mui/icons-material/DateRange';import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import "./CheckoutSteps.css";
import { useDispatch } from "react-redux";

const CheckoutSteps3 = ({ activeStep }) => {
  const dispatch=useDispatch()


  const steps = [
    {
      label: <Typography>Pay Day Selection</Typography>,
      icon: <HelpCenterIcon />,
    },
    {
      label: <Typography>Pay Day Selection Breakup</Typography>,
      icon: <CurrencyRupeeIcon />,
    },
    {
      label: <Typography>Short term Selection</Typography>,
      icon: <DateRangeIcon />,
    },
    {
        label: <Typography>Short term Selection Breakup</Typography>,
        icon: <DateRangeIcon />,
      },
  ];

  const stepStyles = {
    boxSizing: "border-box",
  };

  return (
    <Fragment>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "#2E3192" : "rgba(0, 0, 0, 0.649)",
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Fragment>
  );
};

export default CheckoutSteps3;