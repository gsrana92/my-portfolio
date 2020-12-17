import React, { Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import image from '../images/male-avatar2.png'

//import {BrowserRouter, Link} from 'react-router-dom'

class Resume extends Component {
    render() {
        return (
        <div >
            <Grid className='about-me-left-col'>
                <Cell col={12}>
                    <div style={{textAlign:'cell'}}>
                        <img 
                            src={image}
                            alt='avatar'
                            style={{height: '200px'}}
                            />
                    </div>
                    <h2 style={{paddingTop: '2em', color:'silver'}}>Hi! I am Gaurav</h2>
                    {/*<hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />*/}
                    <h3 style={{color:'silver'}}>I'm a computer science graduate experienced in Python, SQL, HTML/CSS. 
                    I'm interested in all kinds of visual communication, but my major focus is on 
                    software development. I also have skills in other fields 
                    like data analysis, data science.

                    Earlier I was a full-time Data Analyst/SQL Developer for a small time law firm in Florida.</h3>
                    {/*<h5> Download my resume</h5>
                    <BrowserRouter />
                        <Navigation>
                            <Link to="../images/avatar.jpg" download target='_blank'>Resume</Link>
                    </Navigation> */}


                </Cell>
              
            </Grid>
        </div>
        )}
}

export default Resume;