import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.onSubmitEmail = this.onSubmitEmail.bind(this);
  }

  onSubmitEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_kren1yf',
        'template_tsomqb9',
        e.target,
        'user_TidLj0qzWYcbKwfKAED9y',
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Gaurav Rana </h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Hi, I am a Computer Science graduate currently looking for
              opportunity in Software Engineering. I have worked as a Data
              Analyst in the past. Available for freelance opportunities.
              Enthusiastic about software development, ReactJS and cloud
              technology in particular AWS. In my free time I like to learn new
              things and read fantasy and crime novels.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <form onSubmit={this.onSubmitEmail}>
              <div className="contact-div"></div>
              <div style={{ fontSize: '10px', fontFamily: 'Arian' }}>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="input-field"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="input-field-message"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                  style={{ font: 'Arial' }}
                ></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto">
                <button className="button-send">Send</button>
              </div>
            </form>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
