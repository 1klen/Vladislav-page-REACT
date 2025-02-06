import './Contact.scss'
import ContactItem from './Contact-item';

function Contact() {
    const contactsData = [
        {
          src: '../../icons/contact/img1.png',
          text: ['220089', 'Maskouskaja St. 17', 'Minsk, Belarus'],
        },
        {
          src: '../../icons/contact/img2.png',
          text: ['info@gmail.com'],
        },
        {
          src: '../../icons/contact/img3.png',
          text: ['+375 (25) 123 4567'],
        },
    ];
    return (
        <div className="contact" id="contact">
            <div className="contact__container container">
                <h2 className="contact__title title title_white"><span>Contact</span></h2>
                <div className="contact__row">
                    {contactsData.map((contact, index) => (
                        <div className="contact__column" key={index}>
                            <ContactItem 
                                src={contact.src} 
                                text={contact.text} 
                            />
                        </div>
                    ))}
                </div>
                <form action="" className="form">
                    <div>
                        <label htmlFor="login">Name</label>
                        <input type="text" id="login" name="login" /> 
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" /> 
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message"></textarea>
                    </div>
                    <button type="submit" className="form__btn link">Submit</button>
                </form>
            </div>
        </div>    
    )
}

export default Contact