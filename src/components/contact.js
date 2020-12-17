import React, { Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Gaurav Rana </h2>
                        <img src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
                        alt='avatar'
                        style={{height:'250px'}} 
                        />
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
                        Hi, I am a Computer Science graduate currently looking for opportunity
                        in Software Engineering. I have worked as a Data Analyst in the past.
                        Available for freelance opportunities.
                        Enthusiastic about software development, ReactJS and cloud technology in particular AWS.
                        In my free time I like to learn new things and read fantasy and crime novels.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>

                        <hr />
                        <div className='contact-list'>
                        <List>
                            <ListItem>
                                <ListItemContent  style={{fontSize:'30px', fontFamily:'Anton'}}>
                                    <i className='fa fa-phone-square' aria-hidden='true' />
                                    (407) 450 9757
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                    <i className='fa fa-envelope' aria-hidden='true' />
                                    gsrana480@gmail.com
                                </ListItemContent>
                            </ListItem>

                        </List>
                        </div>
                      
                    </Cell>
                </Grid>
            </div>
       
        )}
}

export default Contact;