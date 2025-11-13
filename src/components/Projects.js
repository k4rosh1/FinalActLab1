import React from 'react';
import projectsData from '../data/projects.json';

export default function Projects() {
  return (
    <section className="vh-100 bg-home d-flex flex-column justify-content-center">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row g-4">
          {projectsData.map((proj, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text">{proj.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
