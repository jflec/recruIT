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
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default ListingForm;
