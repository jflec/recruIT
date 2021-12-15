import React from 'react';

const ListingForm = (props) => {
  return (
    <div className="listing-form">
      <form onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChange}
          type="text"
          name="title"
          placeholder="title"
        ></input>
        <input
          onChange={props.handleChange}
          type="text"
          name="description"
          placeholder="description"
        ></input>
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
          name="position_type"
          placeholder="position_type"
        ></input>
        <input
          onChange={props.handleChange}
          type="text"
          name="experience_level"
          placeholder="experience_level"
        ></input>
        <input
          onChange={props.handleChange}
          type="text"
          name="skills"
          placeholder="skills"
        ></input>

        <button type="submit"></button>
      </form>
    </div>
  );
};

export default ListingForm;
