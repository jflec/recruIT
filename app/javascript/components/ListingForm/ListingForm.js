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
          <input
            type="radio"
            value={'Backend'}
            name="title"
            onChange={props.handleChange}
          ></input>
          <input
            type="radio"
            value={'Fullstack'}
            name="title"
            onChange={props.handleChange}
          ></input>
        </div>

        <div id="experience_level-buttons">
          <input
            type="radio"
            value={'Junior'}
            name="experience_level"
            onChange={props.handleChange}
          ></input>
          <input
            type="radio"
            value={'Mid'}
            name="experience_level"
            onChange={props.handleChange}
          ></input>
          <input
            type="radio"
            value={'Senior'}
            name="experience_level"
            onChange={props.handleChange}
          ></input>
        </div>

        <div id="skills-buttons">
          <input
            type="checkbox"
            value={'React'}
            name="skills"
            onChange={props.handleChange}
          ></input>
          <input
            type="checkbox"
            value={'Redux'}
            name="skills"
            onChange={props.handleChange}
          ></input>
          <input
            type="checkbox"
            value={'Ruby'}
            name="skills"
            onChange={props.handleChange}
          ></input>
        </div>

        <div id="position_type-buttons">
          <input
            type="radio"
            value={'Contract'}
            name="position_type"
            onChange={props.handleChange}
          ></input>
          <input
            type="radio"
            value={'Part-time'}
            name="position_type"
            onChange={props.handleChange}
          ></input>
          <input
            type="radio"
            value={'Full-time'}
            name="position_type"
            onChange={props.handleChange}
          ></input>
        </div>

        <input
          onChange={props.handleChange}
          type="text"
          name="company"
          placeholder="company"
        ></input>
        <input
          onChange={props.handleChange}
          type="text"
          name="location"
          placeholder="location"
        ></input>
        <input
          onChange={props.handleChange}
          type="text"
          name="description"
          placeholder="description"
        ></input>

        <button type="submit"></button>
      </form>
    </div>
  );
};

export default ListingForm;
