import React, { useState } from "react";
import styled from "styled-components";
import "./ContactPage.css";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const response = await fetch("https://formsubmit.co/ajax/agonzalezperez2020@gmail.com", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" },
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Form Submission Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="form-container">
        
        {!isSubmitted ? (
          <>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />

              <Select name="message_type" required>
                <option value="">Select Message Type</option>
                <option value="Internship">Internship</option>
                <option value="Co-op">Co-op</option>
                <option value="Full-Time Job">Full-Time Job</option>
                <option value="Seasonal Job">Seasonal Job</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Other">Other</option>
              </Select>

              <textarea name="message" placeholder="Your Message" required></textarea>

              {/* Hidden Fields for FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </>
        ) : (
          <SuccessMessage>Thank you! Your message has been sent.</SuccessMessage>
        )}
      </div>
    </div>
  );
};

const SuccessMessage = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: lightgrey;
  text-align: center;
  padding: 20px;
`;
const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;
`;
export default ContactPage;
