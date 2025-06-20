import '../styles/contact.css';


function Contact() {
  return (
    <>
    <div className="contact-container">
    <div className="contact-left">
          <h2>Have a question?</h2>
          <p>
          we're here to help. Fil in the form for technical support. Via phone 
          or Email. Our team is here to help you. We will provide you support,
          whatever your inquiry is.
          </p>
          <p>
          To ensure that our clinets needs are met, please allow us 24hrs.
          From the start of the next business day to ensure we can properly
          specialise our help to you. Our working business hours are 9-5. M-F.
          </p>
          <p>helpline@gmail.com</p>
          <p>07213 132111</p>
    </div>
    <div className="contact-right">
        <form action="">
              <input type="text"  placeholder='*First Name' id='name' required/>
          <input type="text" placeholder='*Last Name' id='name' required/>
    <div className="contact-right-itmes">
          <input type="Email" placeholder='*Email' required/>
          <input type="text" placeholder='Phone Number (optional)'/>
          <select name="category" id="" required>
            <option value="">*Select your topic</option>
            <option value="">Beds</option>
            <option value="">Billings</option>
            <option value="">Refunds</option>
            <option value="">General Inquiry</option>
          </select>
          <textarea name="" id="" placeholder='*Message' required></textarea>
    </div>
      <button>SUBMIT</button>
        </form>
    </div>
    </div>
    </>
  );
}

export default Contact;
