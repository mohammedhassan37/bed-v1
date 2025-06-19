import '../styles/contact.css';


function Contact() {
  return (
    <>
    <div className="contact-container">
      <div className="contact-items">
        <h1>Contact us</h1>
        <label htmlFor="email">Enter your email</label>
        <input type="text" id='email'/>
      </div>
    </div>
    </>
  );
}

export default Contact;
