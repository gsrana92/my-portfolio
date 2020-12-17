import React, { Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import image from '../images/male-avatar2.png'
import Education from './education';
import Experience from './experience';
import Skills from './skills';
//import {BrowserRouter, Link} from 'react-router-dom'

class Resume extends Component {
    render() {
        return (
        <div>
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                        <img 
                            src={image}
                            alt='avatar'
                            style={{height: '200px'}}
                            />
                    </div>
                    <h2 style={{paddingTop: '2em'}}>Gaurav Rana</h2>
                    <h4 style={{color: 'grey'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    <p>Hi, I am a Computer Science graduate currently looking for opportunity
                    in Software Engineering. I have worked as a Data Analyst in the past.</p>
                    <p>Available for freelance opportunities.</p>
                    <p>Enthusiastic about software development, ReactJS and cloud technology in particular AWS.
                    In my free time I like to learn new things and read fantasy and crime novels.</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    <h5>Address</h5>
                    <p>1 Hacker Way Menlo Park, 94025</p>
                    <h5>Phone</h5>
                    <p>(407) 450 9757</p>
                    <h5>Email</h5>
                    <p>gsrana480@gmail.com</p>
                    <h5>Web</h5>
                    <p>www.gsrana16.com</p>
                    {/*<h5> Download my resume</h5>
                    <BrowserRouter />
                        <Navigation>
                            <Link to="../images/avatar.jpg" download target='_blank'>Resume</Link>
                    </Navigation> */}

                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />


                </Cell>
                <Cell className='resume-right-col' col={8}>
                    <h2 >Education</h2>

                    <Education 
                        startYear={2016}
                        endYear={2018}
                        schoolName='California State University, Fresno'
                        schoolDescription='Completed Masters (MS) in Computer Science from California 
                        State University, Fresno where I took courses like AI, Computer Graphics and 
                        Human Computer Interaction.
                        '
                    />
                    <Education 
                    startYear={2010}
                    endYear={2014}
                    schoolName='Punjab Technical University'
                    schoolDescription='Completed Bachelors degree (B.Tech) in Computer Science and Engineering
                    from IET Bhaddal College.'
                />
                <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Experience</h2>
                <Experience 
                startYear={2019}
                endYear={2020}
                jobName='SQL Specialist/ Data Analyst'
                jobDescription='Worked as a SQL Specialist/Data Analyst where I worked 
                with technologies like Python, SQL, SSIS (ETL), SSRS, AWS S3, AWS EC2.'
                />
                <Experience 
                startYear={2018}
                endYear={2019}
                jobName='Data Analyst'
                jobDescription='Worked as a Data Analyst intern where I worked with tools 
                and technologies like Python, Numpy, Pandas, SQL, ETL, SSIS, Bash Scripting.'
                />
                <Experience 
                startYear={2016}
                endYear={2018}
                jobName='SQL Developer'
                jobDescription='Worked as a SQL Developer/DBA for 2 years where I worked with 
                technologies like SQL Server 2012, SSRS, SSIS, C# (Scripting).'
                />
                <hr style={{borderTop: '3px solid #e22947'}}/>
                <h2>Skills</h2>
                <Skills 
                    skill='Python'
                    progress={100}
                />
                <Skills 
                    skill='HTML/CSS'
                    progress={80}
                />
                <Skills 
                    skill='ReactJS'
                    progress={50}
                />
                <Skills 
                    skill='AWS'
                    progress={50}
                />
                </Cell>
            </Grid>
        </div>
        )}
}

export default Resume;