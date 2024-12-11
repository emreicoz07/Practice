import React from 'react';
import PageLayout from '../components/PageLayout';

const Contact: React.FC = () => {
  return (
    <PageLayout>
      <h1>Contact Us</h1>
      <p>Feel free to reach out for any queries. We're here to help!</p>
      <form>
        <label>
          Your Name:
          <input type="text" placeholder="Enter your name" />
        </label>
        <label>
          Your Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <button type="submit">Send</button>
      </form>
    </PageLayout>
  );
};

export default Contact;
