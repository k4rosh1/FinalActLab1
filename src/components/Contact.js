import React from 'react';

export default function Contact() {
  return (
    <section className="vh-100 bg-alt d-flex flex-column justify-content-center">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
