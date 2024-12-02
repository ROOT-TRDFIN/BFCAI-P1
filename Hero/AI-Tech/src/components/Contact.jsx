import React, { useState } from "react";
import { submitContactForm } from '../../apiService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: '', // Corrected this field name
  });

  const [status, setStatus] = useState(""); // To track success or error message
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await submitContactForm(formData);
      setStatus(" 💌 We’ve received your message and will be in touch soon!"); // Set success message
      setIsSent(true); // Change button text
      // Clear form data after success
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        message: '', // Reset the correct field name
      });
    } catch (error) {
      setStatus(" 💔 There was an error sending your message.");
    }
  };

  return (
    <div className="container-fluid contact min-vh-100 d-flex flex-column align-items-center justify-content-center text-white p-4 mt-5">
      <div className="col-lg-6 col-md-8 col-sm-10">
        <h1 className="text-left contact-text">
          <span>Hey there,</span> innovator! <br /> You dream it, we tech it. Ready to build something extraordinary?
        </h1>
        <form onSubmit={handleSubmit} className="needs-validation" noValidate autoComplete='off'>
          <div className="form row mb-3">
            <div className="col-md-6 mb-3 contact-field">
              <label htmlFor="name">Your name:</label>
              <input
                type="text"
                className="form-control bg-dark text-white border-secondary"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3 contact-field">
              <label htmlFor="phone">Phone:</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text text-white">🇮🇳 +91</span>
                </div>
                <input
                  type="tel"
                  className="form-control bg-dark text-white"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="123 4567 890"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form row mb-3 contact-field">
            <div className="col-md-6 mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control text-white"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3 contact-field">
              <label htmlFor="location">Country/City:</label>
              <input
                type="text"
                className="form-control text-white"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group mb-3 contact-field">
            <label htmlFor="projectDetails">Project details:</label>
            <textarea
              className="form-control text-white"
              id="projectDetails"
              name="message"
              rows="4"
              value={formData.message} // Corrected value binding
              onChange={handleChange}
            />
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <button
              type="submit"
              className="contact-btn btn btn-sm"
              disabled={isSent} // Disable button after sending
            >
              {isSent ? 'Sent' : 'Send request'}
            </button>
          </div>
        </form>

        {status && <div className=" contactapi alert alert-info mt-3">{status}</div>} {/* Show status message */}
      </div>
    </div>
  );
};

export default Contact;
