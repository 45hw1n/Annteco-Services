import React, { useState } from "react"
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const [ok, setOk] = useState(false)

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_sgpe03r', 'template_ruj1bhq', e.target, 'user_dIsfbBnnjdvslNTOdQ7ch')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setOk(true)
        e.target.reset()
    }

    const back = () => {
        setOk(false)
        console.log(ok)
    }

    return (
        // <form >

        <div className="cn-form">
            {
                ok === false ? <form onSubmit={sendEmail}>

                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter your name" required="required" />
                    </div>

                    <div className="form-group">
                        <label required="required">Email address</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label >Mobile No.</label>
                        <input type="text" name="mobile" className="form-control" placeholder="Enter your Mobile No." required="required" />
                    </div>


                    <div className="form-group">
                        <label >Comment</label>
                        <input type="text" name="message" className="form-control" placeholder="Comment" required="required" style={{ height: "100px" }} />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>

                </form> :

                    <div class="main-container">
                        <div class="check-container">
                            <div class="check-background">
                                <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 25L27.3077 44L58.5 7" stroke="white" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="check-shadow"></div>
                            <button className="btn btn-primary mt-4" onClick={back}>Go Back</button>
                        </div>
                    </div>
            }
        </div>


        // </form>
    )

}
export default ContactForm;