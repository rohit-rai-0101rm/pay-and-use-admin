import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function LoanCard() {
  return (
    <div className=" rounded-lg bg-teal-500">
      {" "}
      <Card sx={{ minWidth: 75 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <div className="flex text-lg text-purpleTheme-600 py-6 text-center flex:row justify-between">
              <div>₹ 10000</div>
              <div>36%</div>
              <div>₹5000</div>
            </div>
            <div className="flex text-lg text-purpleTheme-600 py-6 text-lg text-center flex:row justify-between">
              <div>Loan</div>
              <div>Intrest</div>
              <div>Fee</div>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
