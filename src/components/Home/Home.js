import React from 'react'

import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import './Home.css'
const useStyles = makeStyles((theme) => ({
    picture: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
    picContainer: {
        alignItems: "center",
        justify: "center"

    },

}));



const Home = () => {
    const classes = useStyles()
    return (
        <div>
            
            <div className="HomeBody">
                <div className="HomeTitle">
                    <Typography variant="h1">
                        THE PORTFOLIO OF CORTLAND ERVINS
                    </Typography>

                </div>


                <div className="picContainer">

                    <div className="MyPic">
                        <Avatar alt="Cortland Ervins" src={process.env.PUBLIC_URL + './portrait.jpg'} className={classes.picture} />
                    </div>
                </div>

                <div className="summary">
                    <Typography variant="h4">
                        Hello!<br></br>I am a recent graudate of Northern Illinois University and full stack developer looking to start my career in the field of software development.
                        
                    </Typography>


                </div>


            </div>
        </div>
    )
}

export default Home