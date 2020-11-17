import React, { Component } from 'react'
import { AppBar,Toolbar,Typography } from '@material-ui/core'

export default class Navigationbar extends Component {
    render() {
        return (
            <div className="navbar">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className="navbar__title">
                        COVID-19 tracker
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
