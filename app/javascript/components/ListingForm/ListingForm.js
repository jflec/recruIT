import React from 'react';

const ListingForm = (props) => {
  return (
    <div className="listing-form-container">
      <form id="listing-form" onSubmit={props.handleSubmit}>
        <div id="title-buttons">
          <label>
            <input
              type="radio"
              value={'Frontend'}
              name="title"
              onChange={props.handleChange}
            ></input>
            Frontend
          </label>
          <label>
            <input
              type="radio"
              value={'Backend'}
              name="title"
              onChange={props.handleChange}
            ></input>
            Backend
          </label>
          <label>
            <input
              type="radio"
              value={'Fullstack'}
              name="title"
              onChange={props.handleChange}
            ></input>
            Fullstack
          </label>
        </div>

        <div id="experience_level-buttons">
          <label>
            <input
              type="radio"
              value={'Junior'}
              name="experience_level"
              onChange={props.handleChange}
            ></input>
            Junior
          </label>
          <label>
            <input
              type="radio"
              value={'Mid'}
              name="experience_level"
              onChange={props.handleChange}
            ></input>
            Mid
          </label>
          <label>
            <input
              type="radio"
              value={'Senior'}
              name="experience_level"
              onChange={props.handleChange}
            ></input>
            Senior
          </label>
        </div>

        <div id="position_type-buttons">
          <label>
            <input
              type="radio"
              value={'Contract'}
              name="position_type"
              onChange={props.handleChange}
            ></input>
            Contract
          </label>
          <label>
            <input
              type="radio"
              value={'Part-time'}
              name="position_type"
              onChange={props.handleChange}
            ></input>
            Part-time
          </label>
          <label>
            <input
              type="radio"
              value={'Full-time'}
              name="position_type"
              onChange={props.handleChange}
            ></input>
            Full-time
          </label>
        </div>

        <div id="skills-buttons">
          <label>
            <input
              type="checkbox"
              value={'React'}
              name="skills"
              onChange={props.handleChange}
            ></input>
            React
          </label>
          <label>
            <input
              type="checkbox"
              value={'Redux'}
              name="skills"
              onChange={props.handleChange}
            ></input>
            Redux
          </label>
          <label>
            <input
              type="checkbox"
              value={'Ruby'}
              name="skills"
              onChange={props.handleChange}
            ></input>
            Ruby
          </label>
        </div>

        <div id="listing-form-textbox-container">
          <label>
            <input
              onChange={props.handleChange}
              type="text"
              name="company"
              placeholder="company"
            ></input>
            Company
          </label>
          <label>
            <input
              onChange={props.handleChange}
              type="text"
              name="location"
              placeholder="location"
            ></input>
            Location
          </label>
          <label>
            <input
              onChange={props.handleChange}
              type="text"
              name="description"
              placeholder="description"
            ></input>
            Description
          </label>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default ListingForm;
