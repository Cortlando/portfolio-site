import React from 'react'

import { Button } from '@material-ui/core'
import { Typography } from '@material-ui/core'

import './Experience.css'
const Experience = () => {

    return (
        <div>
            <div className="ExperienceHeader">
                <Typography variant="h2">
                    Work Experience
                </Typography>
            </div>
            <div className="ExperienceBody">
                <div className="WorkOne">
                    <div className="WorkOneText">
                        <div className="WorkOneTextTitle">
                            <Typography variant="h3">
                                Full Stack Developer Internship with Discover Financial Services
                            </Typography>
                            <div className="WorkOneTextTitleDate">
                                <Typography variant="h4">
                                    January - August 2020
                                </Typography>
                            </div>

                        </div>


                        <Typography variant="h6">
                            Worked with a team of developers and a scrum master creating applications using React.js and SpringBoot. <br></br>
                        </Typography>



                        <div className="Projects">
                            <div className="ProjectOne">
                                <div className="ProjectOneHeader">
                               
                                        <Typography variant="h4" style={{fontWeight: 600}}>
                                            Covid-19 Tracker
                                        </Typography>
                              

                                </div>
                                <div className="ProjectOneImg">
                                    <img id="ProjectOneImg" src={process.env.PUBLIC_URL + '/ProjectOneImage.png'} alt="Covid-19Tracker" />
                                </div>
                                <div className="ProjectOneText">
                                    <Typography variant="h5">
                                        <ul>
                                            <li>My Team and I created a web application that allowed the user to track Covid-19 cases across the world. When looking at cases within the United States, cases could be sorted by state.</li>
                                            <li>The data needed for the site was obtained through various APIs and was displayed with charts and graphs</li>
                                            <li>The application was developed using React.js and Node.js along with Chart.js and Material-Ui</li>
                                        </ul>


                                    </Typography>
                                </div>
                                <div className="ProjectOneButtons">
                                    <div className="ProjectOneRepo">
                                        <Button href="https://github.com/Cortlando/Covid-19-Tracker" variant="contained" color="secondary" size="large" target="_blank" style={{backgroundColor: "#463728"}}>
                                            Repo
                                        </Button>
                                    </div>
                                </div>

                            </div>

                            <div className="ProjectTwo">
                                <div className="ProjectTwoHeader">
                                    <Typography variant="h4" style={{fontWeight: 600}}>
                                        Intern Database Manager
                                    </Typography>
                                </div>
                                <div className="ProjectTwoImg">
                                    <img id="ProjectTwoImg" src={process.env.PUBLIC_URL + '/ProjectTwoImage.png'} alt="Intern Database Manager" />
                                </div>

                                <div className="ProjectTwoText">
                                    <Typography variant="h5">
                                        <ul>
                                            <li>This application was made to allow a user to quickly view and edit a database containing the information of every Discover intern in the Code_Orange program.</li>
                                            <li>Interns were displayed using tables</li>
                                            <li>Users could:</li>
                                            <ul>
                                                <li>Add interns to the database</li>
                                                <li>Sort through the interns in various ways (alphabetically, by location, amount of years in program, etc...)</li>
                                                <li>Edit the information of an intern</li>
                                                <li>Delete interns from the database</li>
                                            </ul>
                                        </ul>

                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Experience

