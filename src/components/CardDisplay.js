import React from 'react';
import "./CardDisplay.css";
import {Card , CardContent , Typography } from '@material-ui/core'

function CardDisplay(props) {
    return (
        <div>
            <Card className="card">
                <CardContent>
                    <Typography className= "card__heading" color="textSecondary" gutterBottom>
                    {props.name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                    +{props.new}
                    </Typography>
                    <Typography variant="body2" component="p">
                    <strong>Total</strong> 
                    <br />
                    {props.total}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardDisplay
