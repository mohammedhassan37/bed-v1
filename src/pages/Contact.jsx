import { useState } from 'react';
import '../styles/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) tempErrors.lastName = 'Last Name is required';
    if (!formData.email.trim()) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.category.trim()) tempErrors.category = 'Please select a topic';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    return tempErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Your email has been sent.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        category: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Have a question?</h2>
        <p>
          we're here to help. Fill in the form for technical support. Via phone or Email. Our team is here to help you. We will provide you support,
          whatever your inquiry is.
        </p>
        <p>
          To ensure that our clients' needs are met, please allow us 24hrs. From the start of the next business day to ensure we can properly
          specialise our help to you. Our working business hours are 9-5. M-F.
        </p>
        <p>helpline@gmail.com</p>
        <p>07213 132111</p>
      </div>

      <div className="contact-right">
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            placeholder="*First Name"
            id="name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}

          <input
            type="text"
            placeholder="*Last Name"
            id="name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}

          <div className="contact-right-itmes">
            <input
              type="email"
              placeholder="*Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

            <input
              type="text"
              placeholder="Phone Number (optional)"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">*Select your topic</option>
              <option value="Beds">Beds</option>
              <option value="Billings">Billings</option>
              <option value="Refunds">Refunds</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
            {errors.category && <div style={{ color: 'red' }}>{errors.category}</div>}

            <textarea
              placeholder="*Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
          </div>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
