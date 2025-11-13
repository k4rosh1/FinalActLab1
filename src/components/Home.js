import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="vh-100 bg-home d-flex flex-column justify-content-center text-center">
      <div className="container">
        <h1 className="display-4 fw-bold">Hello, I'm Raymark Oronan</h1>
        <p className="lead">A passionate developer building modern web applications.</p>
        <Link to="/about" className="btn btn-primary btn-lg mt-3">Learn More About Me</Link>
      </div>
    </section>
  );
}
