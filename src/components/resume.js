import React, { Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import image from '../images/male-avatar2.png'
import Education from './education';
import Experience from './experience';
import Skills from './skills';

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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text 
                    ever since the 1500s, when an unknown printer took a galley of type 
                    and scrambled it to make a type specimen book. It has survived not 
                    only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged.</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    <h5>Address</h5>
                    <p>1 Hacker Way Menlo Park, 94025</p>
                    <h5>Phone</h5>
                    <p>(407) 450 9757</p>
                    <h5>Email</h5>
                    <p>gsrana480@gmail.com</p>
                    <h5>Web</h5>
                    <p>mywebsite.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

                </Cell>
                <Cell className='resume-right-col' col={8}>
                    <h2>Education</h2>

                    <Education 
                        startYear={2016}
                        endYear={2018}
                        schoolName='CSU Fresno'
                        schoolDescription='This is where you describe about the degree and courses you completed and 
                        something like that. A bit of a short summary.'
                    />
                    <Education 
                    startYear={2010}
                    endYear={2014}
                    schoolName='Punjab Technical University'
                    schoolDescription='This is where you describe about the degree and courses you completed and 
                    something like that. A bit of a short summary.'
                />
                <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Experience</h2>
                <Experience 
                startYear={2019}
                endYear={2020}
                jobName='SQL Specialist/ Data Analyst'
                jobDescription='A brief job description of duties and responsibilities'
                />
                <Experience 
                startYear={2018}
                endYear={2019}
                jobName='Data Analyst'
                jobDescription='A brief job description of duties and responsibilities'
                />
                <Experience 
                startYear={2016}
                endYear={2018}
                jobName='SQL Developer'
                jobDescription='A brief job description of duties and responsibilities'
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