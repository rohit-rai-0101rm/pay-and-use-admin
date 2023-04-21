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

export default function Action() {
  return (
    <div className=" rounded-lg bg-teal-500">
      {" "}
      <Card sx={{ minWidth: 75 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <div className="flex text-lg text-purpleTheme-600 py-6 text-center flex:row justify-between">
              
                <button
                  type="button"
                  class="py-2 px-4 text-white text-xs bg-theme font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  Call Applicant
                </button>
                <button
                  type="button"
                  class="py-2 px-4 text-white bg-theme text-xs font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  VIEW EMI SCHEDULE
                </button>
                <button
                  type="button"
                  class="py-2 text-white px-4 text-xs bg-theme font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  SEND TO HR
                </button>
              
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
