import React, { useEffect } from 'react';

const ListingShow = (props) => {
  const {
    title,
    company,
    description,
    experience_level,
    location,
    position_type,
    skills,
    work_experience,
  } = props.attributes;

  useEffect(() => {
    console.log(props);
  });

  return (
    <div>
      <div id="listing-show">
        <div>{title}</div>
        <div>{company}</div>
        <div>{description}</div>
        <div>{experience_level}</div>
        <div>{location}</div>
        <div>{position_type}</div>
        <div>{skills}</div>
        <div>{work_experience}</div>
      </div>
    </div>
  );
};

export default ListingShow;
