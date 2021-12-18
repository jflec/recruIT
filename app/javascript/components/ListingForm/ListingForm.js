import React from 'react';

const ListingForm = (props) => {
  return (
    <div className="listing-form">
      <form onSubmit={props.handleSubmit}>
        <div id="title-buttons">
          <input
            type="radio"
            value={'Frontend'}
            name="title"
            onChange={props.handleChange}
          ></input>
          <p>Frontend</p>
          <input
            type="radio"
            value={'Backend'}
            name="title"
            onChange={props.handleChange}
          ></input>
          <p>Backend</p>
          <input
            type="radio"
            value={'Fullstack'}
            name="title"
            onChange={props.handleChange}
          ></input>
          <p>Fullstack</p>
        </div>

        <div id="experience_level-buttons">
          <input
            type="radio"
            value={'Junior'}
            name="experience_level"
            onChange={props.handleChange}
          ></input>
          <p>Junior</p>
          <input
            type="radio"
            value={'Mid'}
            name="experience_level"
            onChange={props.handleChange}
          ></input>
          <p>Mid</p>
          <input
            type="radio"
            value={'Senior'}
            name="experience_level"
            onChange={props.handleChange}
          ></input>
          <p>Senior</p>
        </div>

        <div id="skills-buttons">
          <input
            type="checkbox"
            value={'React'}
            name="skills"
            onChange={props.handleChange}
          ></input>
          <p>React</p>
          <input
            type="checkbox"
            value={'Redux'}
            name="skills"
            onChange={props.handleChange}
          ></input>
          <p>Redux</p>
          <input
            type="checkbox"
            value={'Ruby'}
            name="skills"
            onChange={props.handleChange}
          ></input>
          <p>Ruby</p>
        </div>

        <div id="position_type-buttons">
          <input
            type="radio"
            value={'Contract'}
            name="position_type"
            onChange={props.handleChange}
          ></input>
          <p>Contract</p>
          <input
            type="radio"
            value={'Part-time'}
            name="position_type"
            onChange={props.handleChange}
          ></input>
          <p>Part-time</p>
          <input
            type="radio"
            value={'Full-time'}
            name="position_type"
            onChange={props.handleChange}
          ></input>
          <p>Full-time</p>
        </div>

        <input
          onChange={props.handleChange}
          type="text"
          name="company"
          placeholder="company"
        ></input>
        <p>Company</p>
        <input
          onChange={props.handleChange}
          type="text"
          name="location"
          placeholder="location"
        ></input>
        <p>Location</p>
        <input
          onChange={props.handleChange}
          type="text"
          name="description"
          placeholder="description"
        ></input>
        <p>Description</p>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default ListingForm;
