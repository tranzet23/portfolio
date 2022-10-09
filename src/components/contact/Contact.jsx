import React from 'react';
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_04ojfdc', 'template_05hr1sp', form.current, 'e-kc0So6t9Cykcf-y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Связаться</h5>
            <h2>со мной</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>vladislavzyuzyukov@gmail.com</h5>
                        <a href="mailto:vladislavzyuzyukov@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FaTelegramPlane className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Telegram</h5>
                        <a href="https://t.me/anzett" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <SiWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+380662660530</h5>
                        <a href="https://api.whatsapp.com/send?phone=380662660530" target="_blank">Send a message</a>
                    </article>
                </div>
                {/*END OF CONTACT OPTIONS*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Ваше имя' required/>
                    <input type="email" name='email' placeholder='Email' required/>
                    <textarea name="message" rows="7" placeholder='Ваше сообщение' required/>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;