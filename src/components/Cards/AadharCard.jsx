import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAlert } from "react-alert";

export default function ImgMediaCard() {
    const alert = useAlert();
    return (
        <div className='flex flex:row justify-evenly'>
            <div>
                <Typography>Existing Records</Typography>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://5.imimg.com/data5/TP/LM/MY-10051335/pre-printed-aadhar-card-250x250.jpg"
                    />
                   
                </Card>
            </div>
            <div className='px-12'>
                <Typography>Submitted Records</Typography>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://5.imimg.com/data5/TP/LM/MY-10051335/pre-printed-aadhar-card-250x250.jpg"
                    />
                   
                </Card>
            </div>

        </div>

    );
}