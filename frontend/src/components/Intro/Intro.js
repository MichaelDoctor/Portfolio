import React, { useState, useEffect } from 'react';
import DjangoCSRFToken from 'django-react-csrftoken';
import axios from 'axios';

const Intro = () => {
  const [inputs, setInputs] = useState({});
  const [contactResult, setContactResult] = useState(null);
  useEffect(() => {
    setInputs({
      csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0]
        .value,
    });
  }, []);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { csrfmiddlewaretoken, name, email, subject, message } = inputs;
    setInputs({ csrfmiddlewaretoken });
    contact({ name, email, subject, message, csrfmiddlewaretoken });
  };

  // const baseUrl = 'http://0.0.0.0:5000';
  const baseUrl = 'https://michael-doctor.me';

  const contact = ({ name, email, subject, message, csrfmiddlewaretoken }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFTOKEN': csrfmiddlewaretoken,
      },
    };

    const body = JSON.stringify({ name, email, subject, message });

    axios
      .post(`${baseUrl}/api/contact/`, body, config)
      .then(res => {
        setContactResult(true);
      })
      .catch(err => {
        setContactResult(false);
      });
  };

  return (
    <div className="intro" id="intro">
      <div className="intro-headers">
        <div
          data-w-id="4fd5e6bb-fcca-cf65-a65c-b63fb2bddcd8"
          className="intro-left"
        >
          <h3 className="intro-heading slider-name">Michael Doctor</h3>
          <div className="hr slider-hr"></div>
          <h6 className="intro-heading sub-text">
            Not A Real Doctor. <br />A Calgary Based Software Developer.
            <br />
            <span className="slider-desc">
              <br />I can&#x27;t save a life
              <br />
              But I can code!{' '}
            </span>
            <br />
          </h6>
          <h6 className="intro-heading slider-icon">
            <span className="text-span-2">
              <i className="fas fa-laptop-code" />
            </span>
          </h6>
          <a
            data-w-id="864c17c6-f601-4ed6-4f78-27458c8446eb"
            href="#projects"
            className="slider-btn hover1 main w-button jiggle pop"
          >
            Check out my projects
          </a>
        </div>
      </div>
      <div className="contact-container">
        {contactResult === null ? (
          <div
            data-w-id="90d4d6af-99d2-01e0-d7aa-e624b32ba2ea"
            className="intro-right"
          >
            <section id="contact-form" className="contact-form">
              <div className="form-container w-container">
                <h4 className="intro-heading">Contact Me</h4>
                <div className="contact-block w-form">
                  <form
                    name="contact-form"
                    id="contactform"
                    onSubmit={handleSubmit}
                  >
                    <DjangoCSRFToken />
                    <div className="contact-form-grid">
                      <div
                        id="w-node-_3eab9ac5-2a77-c5c9-e70d-25c5fe1a622d-92169540"
                        className="input-container"
                      >
                        <input
                          type="text"
                          className="intro-form w-input"
                          maxLength="256"
                          name="name"
                          placeholder="Name"
                          id="input"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div
                        id="w-node-_3eab9ac5-2a77-c5c9-e70d-25c5fe1a6231-92169540"
                        className="input-container"
                      >
                        <input
                          type="email"
                          className="intro-form w-input"
                          maxLength="256"
                          name="email"
                          placeholder="Email"
                          id="input"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div
                        id="w-node-_3eab9ac5-2a77-c5c9-e70d-25c5fe1a6235-92169540"
                        className="input-container"
                      >
                        <input
                          type="text"
                          className="intro-form w-input"
                          maxLength="256"
                          name="subject"
                          placeholder="Subject"
                          id="input"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div
                        id="w-node-_3eab9ac5-2a77-c5c9-e70d-25c5fe1a6239-92169540"
                        className="input-container"
                      >
                        <textarea
                          maxLength="5000"
                          id="comments"
                          name="message"
                          placeholder="Message"
                          required
                          className="intro-form w-input"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div
                        id="w-node-_790286dd-0c84-9803-c390-f5352b0e60c0-92169540"
                        className="input-container"
                      >
                        <input
                          type="submit"
                          name="submit"
                          value="Submit"
                          className="slider-btn hover1 proj-btn w-button"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        ) : contactResult ? (
          <div className="contact-result">
            <h3 className="contact-msg">Message Sent successfully</h3>
            <h1>
              <i className="fas fa-check-circle" />
            </h1>
            <DjangoCSRFToken />
          </div>
        ) : (
          <div className="contact-result">
            <h3 className="contact-msg">Internal Error: Failed to send</h3>
            <h1>
              <i className="fas fa-times-circle" />
            </h1>
            <DjangoCSRFToken />
          </div>
        )}
      </div>
    </div>
  );
};
export default Intro;
