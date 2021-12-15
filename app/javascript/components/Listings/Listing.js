import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Listing = (props) => {
  return (
    <Link to={`/listings/${props.attributes.id}`}>
      <div className="listing-item">
        <div className="listing-item-recruiter">
          <div className="listing-item-recruiter-picture"></div>
          <p>John Doe</p>
        </div>
        <div className="listing-item-description">
          <div className="listing-item-header">
            <h1>
              {`${props.attributes.experience_level}-level`}{' '}
              {props.attributes.title} {props.attributes.position_type}{' '}
              {props.attributes.location}
            </h1>
          </div>
          {props.attributes.skills.map((skill) => {
            return <p>{skill}</p>;
          })}
          <p>{props.attributes.work_experience}</p>
          <p>{props.attributes.description}</p>
        </div>
        <div className="listing-item-company">{props.attributes.company}</div>
      </div>
    </Link>
  );
};

export default Listing;
