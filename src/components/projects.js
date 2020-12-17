import React, { Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardActions, CardTitle, CardMenu, Button, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }
    toggleCategories(){
        if (this.state.activeTab === 0){
            return (
                <div className='projects-grid'>
                {/* project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', 
                    background:'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'}}>
                        Indecision App
                    </CardTitle>
                    <CardText>
                    Indecision App is a simple app which you can use to decide to do daily tasks.
                    </CardText>
                    <CardActions border>
                        <Button colored  href='https://github.com/gsrana92/indecision-app' target='_blank'>
                        Github
                        </Button>
                        {/*<Button colored>Github</Button>
                        <Button colored>Github</Button> */}
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>

                {/* Project 2 */}
 { /*              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px', 
                background:'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'}}>
                    Expensify App
                </CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share' />
                </CardMenu>
                    </Card> */}

        
 
                </div>

                
            )
        }else if(this.state.activeTab ===1){
            return(
                <div className='projects-grid'>
                {/* project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', 
                    background:'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'}}>
                        Indecision App
                    </CardTitle>
                    <CardText>
                    Expensify App is a app which you can use to manage your expenses.
                    </CardText>
                    <CardActions border>
                        <Button colored  href='https://github.com/gsrana92/my-expensify-app' target='_blank'>
                        Github
                        </Button>
                        {/*<Button colored>Github</Button>
                        <Button colored>Github</Button> */}
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
                </div>
            )
        }//else if(this.state.activeTab===2){
           // return(
          //      <div><h1>This is leetcode problems</h1></div>
           // )
       // }

    }
  
    render() {
        return(
        <div className='category-tabs'>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                <Tab> Indecision App</Tab>
                <Tab> Expensify App</Tab>
                {/* <Tab> Python Project</Tab> */}
            </Tabs>
            <Grid >
                <Cell col={12}>
                    <div className='content'>{this.toggleCategories()}</div>
                </Cell>
            </Grid>
                
        </div>
        )}
}

export default Projects;