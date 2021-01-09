//import axios from 'axios';
import React, { Component} from 'react';
import emailjs from 'emailjs-com';
import { Grid, Cell} from 'react-mdl';

class Contact extends Component {
        constructor(props){
        super(props);

         this.submitEmail = this.submitEmail.bind(this);
     }

    submitEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kren1yf', 'template_tsomqb9', e.target, 'user_TidLj0qzWYcbKwfKAED9y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            });
            e.target.reset()

    }
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
                    <div>
                    <div className="container">
                    <form onSubmit={this.submitEmail}>
                            <div className="row pt-5 mx-auto">
                                <div className="col-8 form-group mx-auto">
                                    <input type="text" className="form-control" placeholder="Name" name="name"/>
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                </div>
                                <div className="col-8 pt-3 mx-auto">
                                    <input type="submit" className="btn btn-info" value="Send Message"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                      
                    </Cell>
                </Grid>
            </div>
       
        )}
}

export default Contact;


// class Contact extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             name:'',
//             email: '',
//             subject: '',
//             message: ''
//         }
//         this.onNameChange = this.onNameChange.bind(this);
//         this.onEmailChange = this.onEmailChange.bind(this);
//         this.onSubjectChange = this.onSubjectChange.bind(this);
//         this.onMessageChange = this.onMessageChange.bind(this);
//         this.submitEmail = this.submitEmail.bind(this);
//        // this.resetForm = this.resetForm.bind(this);
//     }

//     onNameChange =(e) => {
//         this.setState({name: e.target.value})
//     }

//     onEmailChange = (e) => {
//         this.setState({email: e.target.value})
//     }

//     onSubjectChange = (e) => {
//         this.setState({subject: e.target.value})
//     }

//     onMessageChange = (e) => {
//         this.setState({message: e.target.value})
//     }

//     submitEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_kren1yf', 'template_tsomqb9', e.target, 'user_TidLj0qzWYcbKwfKAED9y')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text)
//             });
//             e.target.reset()

//     }

//     // resetForm(){
//     //     this.setState({
//     //         name:'',
//     //         email:'',
//     //         subject:'',
//     //         message:''
//     //     })
//     // }


//     render(){
//         return(
//         <div className=''>
//             <div className=''>
//                 <div className=''>
//                     <div className=''>
//                         <div className=''>
//                             <h2 className=''>Contact Me</h2>
//                             <p>Leave your message!</p>
//                             <form id='' onSubmit={this.submitEmail} method='POST'>
//                             <div className=''>
//                             <div className=''>
//                             <div className=''>
//                                 <input placeholder='Name' id='name' type='text' className=''
//                                 required value={this.state.name} onChange={this.onNameChange} />
//                             </div>
//                             <div className=''>
//                                 <input placeholder='Email' id='email' type='email' className='' 
//                                 aria-describedby='' required value={this.state.email} onChange={this.onEmailChange} />
//                             </div>
//                             </div>
//                             </div>
//                             <div>
//                                 <input placeholder='Subject' id='subject' type='text' className=''
//                                 required value={this.state.subject} onChange={this.onSubjectChange} />
//                             </div>
//                             <div>
//                                 <textarea placeholder='Message' id='message' className=''
//                                 rows='1' required value={this.state.message} onChange={this.onMessageChange}  />
//                             </div>
//                             <button type='submit' className=''>Submit</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         )}
// }