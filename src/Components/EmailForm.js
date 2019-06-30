import React, { Component, Fragment } from 'react';

class EmailForm extends Component {
  render() {
    return (
      <Fragment>
        <section className="section has-background-warning">
          <div className="container is-fluid">
            <div className="columns is-centered">
              <div className="column is-half">
                <h1 className="title is-2 has-text-centered">contact me</h1>
                <form
                  id="fs-frm"
                  name="simple-contact-form"
                  accept-charset="utf-8"
                  action="https://formspree.io/samuel.pinho@fatec.sp.gov.br"
                  method="post"
                >
                  <fieldset id="fs-frm-inputs">
                    <div className="field">
                      <label className="label" for="full-name">
                        Name
                      </label>
                      <div className="control">
                        <input
                          type="text"
                          className="input"
                          name="name"
                          id="full-name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" for="email-address">
                        Email
                      </label>
                      <div className="control">
                        <input
                          type="email"
                          className="input"
                          name="_replyto"
                          id="email-address"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="control" for="message">
                        Message
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          rows="5"
                          name="message"
                          id="message"
                          required=""
                        />
                      </div>
                    </div>
                    <input
                      type="hidden"
                      name="_subject"
                      id="email-subject"
                      value="Contact Form Submission"
                    />
                  </fieldset>
                  <input
                    type="submit"
                    value="Send Message"
                    className="button is-blue is-fullwidth"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default EmailForm;
