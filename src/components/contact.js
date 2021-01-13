import React, { Component } from 'react';
import emailjs from 'emailjs-com';

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
      <section>
        <div class="container">
          <div class="contactinfo">
            <div>
              <h2>Contact Info</h2>
              <div>
                <ul class="info">
                  <li>
                    <span>
                      <img
                        src="location.png"
                        alt="location"
                        width="100"
                        height="50"
                      />
                    </span>
                    <span>
                      835 Pump House Ln
                      <br />
                      West Chester, PA
                      <br />
                      19382
                    </span>
                  </li>
                  <li>
                    <span>
                      <img
                        src="mail.png"
                        alt="mail"
                        width="100"
                        height="50"
                      ></img>{' '}
                    </span>
                    <span>gsrana480@gmail.com</span>
                  </li>
                  <li>
                    <span>
                      <img src="call.png" alt="call" height="40" width="100" />
                    </span>
                    <span>407-450-9757</span>
                  </li>
                </ul>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100010821227821"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="facebook.png"
                      alt="facebook"
                      width="30"
                      height="30"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/gsrana480"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="twitter.png"
                      alt="twitter"
                      width="30"
                      height="30"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gsrana1/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="linkedin.png"
                      alt="linkedin"
                      width="30"
                      height="30"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/gsrana92"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="github.png" alt="github" width="30" height="30" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form onSubmit={this.onSubmitEmail}>
            <div class="contactForm">
              <h2>Send a message</h2>
              <div class="formBox">
                <div class="inputBox w50">
                  <input type="text" name="firstName" required />
                  <span>First Name</span>
                </div>
                <div class="inputBox w50">
                  <input type="text" name="lastName" required />
                  <span>Last Name</span>
                </div>
                <div class="inputBox w50">
                  <input type="text" name="email" required />
                  <span>Email</span>
                </div>
                <div class="inputBox w50">
                  <input type="text" name="phone" required />
                  <span>Mobile Number</span>
                </div>
                <div class="inputBox w50">
                  <textarea name="message" required></textarea>
                  <span>Write your message here...</span>
                </div>
                <div class="inputBox w100">
                  <input type="submit" value="Send" />
                </div>
                {/*   <div className={this.state.sent ? 'msg msgAppear' : 'msg'}>
                  Message has been sent
    </div>*/}
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
