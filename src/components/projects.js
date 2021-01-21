import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardActions,
  CardTitle,
  CardMenu,
  Button,
  IconButton,
  CardText,
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* project 1 */}
          <Grid>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: '100', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: '#fff',
                    height: '176px',
                    background:
                      'url(https://gsrana-aws-bucket.s3.amazonaws.com/indecision.jpg) center / cover',
                  }}
                >
                  Indecision App
                </CardTitle>
                <CardText>
                  Indecision App is a simple app which you can use to decide to
                  do daily tasks.
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/gsrana92/indecision-app"
                    target="_blank"
                  >
                    Github
                  </Button>
                  <Button
                    colored
                    href="https://master.d2to67m5isgnj4.amplifyapp.com/"
                    target="_blank"
                  >
                    Demo
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>
              {/* Project 2 */}
              <Card shadow={5} style={{ minWidth: '100', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: '#fff',
                    height: '176px',
                    background:
                      'url(https://gsrana-aws-bucket.s3.amazonaws.com/Screen+Shot+2021-01-12+at+3.37.31+PM.png) center / cover',
                  }}
                >
                  React Contact Page Form
                </CardTitle>
                <CardText>
                  A simple form for contact page for any website.
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/gsrana92/contact-page"
                    target="_blank"
                  >
                    Github
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            {/*Project 3 */}
            <Cell col={4}>
              <Card shadow={3} style={{ minWidth: '100', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: '#fff',
                    height: '176px',
                    background:
                      'url(https://gsrana-aws-bucket.s3.amazonaws.com/Expensify.png) center / cover',
                  }}
                >
                  Expensify App
                </CardTitle>
                <CardText>
                  Expensify App is a app which you can use to manage your
                  expenses.
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/gsrana92/expensify-app"
                    target="_blank"
                  >
                    Github
                  </Button>
                  {/*<Button colored>Github</Button>
                        <Button colored>Github</Button> */}
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card
                shadow={5}
                style={{
                  minWidth: '100',
                  margin: 'auto',
                }}
              >
                <CardTitle
                  style={{
                    color: '#fff',
                    height: '176px',
                    background:
                      'url(https://gsrana-aws-bucket.s3.amazonaws.com/movie-app.png) center / cover',
                  }}
                >
                  Movie App
                </CardTitle>
                <CardText>
                  An app to find out popular movies with their ratings.
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/gsrana92/movie-app"
                    target="_blank"
                  >
                    Github
                  </Button>
                  <Button
                    colored
                    href="https://main.d35znfyrcg2shl.amplifyapp.com/"
                    target="_blank"
                  >
                    Demo
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://gsrana-aws-bucket.s3.amazonaws.com/python.png) center / cover',
              }}
            >
              Python leetcode solution
            </CardTitle>
            <CardText>Python Solutions to leetcode problems.</CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/gsrana92/leetcode-python"
                target="_blank"
              >
                Github
              </Button>
              {/*<Button colored>Github</Button>
                        <Button colored>Github</Button> */}
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } //else if(this.state.activeTab===2){
    // return(
    //      <div><h1>This is leetcode problems</h1></div>
    // )
    // }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab> React Projects</Tab>
          <Tab> Other Projects</Tab>
          {/* <Tab> Python Project</Tab> */}
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
