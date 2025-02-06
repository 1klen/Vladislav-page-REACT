import './Contact-item.scss'

function ContactItem({ src, text }) {
    return (
        <div className="item-contact">
            <div className="item-contact__image">
                <img src={src} alt="icon" />
            </div>
            <div className="item-contact__text">
                {text.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    )
}

export default ContactItem