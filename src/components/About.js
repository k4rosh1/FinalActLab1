import React from 'react';
import skillsData from '../data/skills.json';

export default function About() {
  const personalInfo = {
    name: "Raymark Oronan",
    address: "Pulo Cabuyao Laguna",
    age: 22,
    favoriteColor: "Black",
    contact: "09293213281"
  };

  return (
    <section className="vh-100 bg-alt d-flex flex-column justify-content-center">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="row">
          <div className="col-md-6">
            <h5>Personal Information</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Name:</strong> {personalInfo.name}</li>
              <li className="list-group-item"><strong>Address:</strong> {personalInfo.address}</li>
              <li className="list-group-item"><strong>Age:</strong> {personalInfo.age}</li>
              <li className="list-group-item"><strong>Favorite Color:</strong> {personalInfo.favoriteColor}</li>
              <li className="list-group-item"><strong>Contact:</strong> {personalInfo.contact}</li>
            </ul>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <h5>Skills</h5>
            <div className="d-flex flex-wrap">
              {skillsData.map((skill, index) => (
                <span key={index} className="badge me-2 mb-2">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
