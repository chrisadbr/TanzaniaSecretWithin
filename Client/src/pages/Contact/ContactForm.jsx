import React, { useState } from 'react';
import './ContactForm.css';
import Button from '../../components/Button/Button';
import SnackBar from '../../components/components/Snackbar';
const baseUrl = "http://localhost:8000";


const ContactForm = () => {
    const [open, setOpen] = useState(false);
    const [errorSending, setErrorSending] = useState(false);
    //
    const [data, setData] = useState({
        fullname: '',
        email: '',
        message: ''
    })
    // 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // 
        setOpen(true);

        let formJson = Object.fromEntries(formData.entries())
        setData({
            fullname: null,
            email: null,
            message: null
        })
        // 
        let dataSend = {
            from: formJson.fullname,
            email: formJson.email,
            message: formJson.message
        };
        if (data.fullname && data.email && data.message) {
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
                    if (res.status > 199 && res.status < 300) {
                        alert("Send Successfully !");
                    }
                });
        } else {
            setErrorSending(true);
        }
    }
    return (
        <div className='contactForm__container'>
            <div className="contactForm">
                <div className="form">
                    <div className="contactForm-header">Contact us</div>
                    <div className="contactForm-para">
                        <p>Our team is ready to assist you with any inquiries or feedback</p>
                    </div>
                    <form className="form-content" onSubmit={handleSubmit}>
                        <div className="form-input">
                            <input
                                type="text"
                                name='fullname'
                                placeholder='Enter your name'
                                onChange={(e) => setData({ ...data, fullname: e.target.value })}
                                value={data.fullname}
                                autoComplete='off'
                            />
                        </div>
                        <div className="form-input">
                            <input
                                type="email"
                                name='email'
                                placeholder='Enter your email'
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                value={data.email}
                                autoComplete='off'
                            />
                        </div>
                        <div className="form-text">
                            <textarea
                                type="text"
                                name='message'
                                placeholder='Message'
                                onChange={(e) => setData({ ...data, message: e.target.value })}
                                value={data.message}
                            />
                        </div>
                        <div className="contact-btn__container">
                            <Button content='Send' />
                        </div>
                    </form>
                </div>
            </div>
            {open && <SnackBar onSetOpen={setOpen} onOpen={open} message={errorSending ? 'Fill all the fields' : 'Email sent successfully'} />}
            <div className="contactForm-Img">
            </div>
        </div>
    )
}

export default ContactForm