import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import image from '../images/male-avatar2.png';
import { SocialIcon } from 'react-social-icons';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={image} alt="avatar" className="avatar-img" />
            <div className="banner-text">
              <h1>Hi ! I'm Gaurav</h1>
              <hr />
              <p> Python | ReactJS | HTML/CSS | SQL | Data Analysis | AWS </p>
              <div className="social-links">
                <SocialIcon
                  url="https://www.linkedin.com/in/gsrana1/"
                  className="social-links i"
                  target="_blank"
                  fgColor="#fff"
                  style={{ height: 70, width: 70 }}
                />
                <SocialIcon
                  url="https://www.facebook.com/profile.php?id=100010821227821"
                  className="social-links i"
                  target="_blank"
                  fgColor="#fff"
                  style={{ height: 70, width: 70 }}
                />
                <SocialIcon
                  url="https://github.com/gsrana92"
                  className="social-links i"
                  target="_blank"
                  fgColor="#fff"
                  style={{ height: 70, width: 70 }}
                />
                <SocialIcon
                  url="https://twitter.com/gsrana480"
                  className="social-links i"
                  target="_blank"
                  fgColor="#fff"
                  style={{ height: 70, width: 70 }}
                />
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
