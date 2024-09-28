import React from 'react';
import './ContactForm.css';
import Button from '../../components/Button/Button';
import { BsMailboxFlag } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneEnabled } from "react-icons/md";
const baseUrl = "http://localhost:8000";


const ContactForm = () => {
    // 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // 
        const formJson = Object.fromEntries(formData.entries())
        // 
        let dataSend = {
            from: formJson.fullname,
            email: formJson.email,
            message: formJson.message
        };
        await fetch(`${baseUrl}/email/sendEmail`, {
            method: "POST",
            body: JSON.stringify(dataSend),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            // HANDLING ERRORS
            .then((res) => {
              console.log(res);
              if (res.status > 199 && res.status < 300) {
                alert("Send Successfully !");
              }
            });
    }

  return (
    <div className='contactForm__container'>
        <div className="contactForm">
            <div className="contactForm-header">Contact us</div>
            <div className="form">
                <form className="form-content" onSubmit={handleSubmit}>
                    <div className="form-input">
                        <input type="text" name='fullname' placeholder='Jane Doe'/>
                    </div>
                    <div className="form-input">
                        <input type="email" name='email' placeholder='jane@email.com'/>
                    </div>
                    <div className="form-text">
                        <textarea type="text" name='message' placeholder='Message'/>
                    </div>
                    <div className="contact-btn__container">
                        <Button content='Send' />
                    </div>
                </form>
            </div>
        </div>
        <div className="contactForm-Img">
            <div className="contactForm-contacts">
                <div className="contactForm-contacts_Img" />
                <div className="contactForm-contacts-details">
                    <div className="contactForm-mail">
                        <BsMailboxFlag className='bsMailBox' /> 
                        <span className="mail">P.O.Box 59, Lushoto, Tanzania</span>
                    </div>
                    <div className="contactForm-email">
                        <CiMail className='MdAlternateEmail' /> 
                        <span className="email">info@tanzaniasecretwithin.co.tz</span>
                    </div>
                    <div className="contactForm-phonenumber">
                        <MdOutlinePhoneEnabled className='MdOutlinePhone' />
                        <span className="phone">+255 786908123</span>
                    </div>
                    {/* <div className="contactForm-scMedias">
                        <div className="facebook">
                            <FiFacebook className='FiFacebook' />
                            <span className="facebook-text">@TanzaniaSecretWithin</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm