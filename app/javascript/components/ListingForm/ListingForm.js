import React from 'react';

const ListingForm = (props) => {
  const skills = [
    'Golang',
    'Python',
    'Django',
    'Scala',
    'C++',
    'Java',
    'C#',
    '.NET',
    'Javascript',
    'Ruby',
    'Rails',
    'Perl',
    'PHP',
    'Laravel',
    'Vue.js',
    'Angular',
    'Node.js',
    'Next.js',
    'GraphQL',
    'PostgreSQL',
    'Redis',
    'SCSS',
    'Tailwind CSS',
    'AWS',
    'Kotlin',
    'Git',
    'Typescript',
    'SQL',
    'MongoDB',
    'Express.js',
    'Redux',
    'React',
    'MySQL',
    'RSpec',
    'Capybara',
    'Jest',
    'Docker',
    'Jenkins',
  ].sort();

  const titles = ['Frontend', 'Backend', 'Fullstack'];
  const experience_levels = ['Junior', 'Mid', 'Senior'];
  const position_types = ['Contract', 'Part-time', 'Full-time'];
  const textboxes = ['company', 'location', 'description'];

  return (
    <div className="listing-form-container">
      <form id="listing-form" onSubmit={props.handleSubmit}>
        <div id="title-buttons">
          {titles.map((title) => {
            return (
              <label>
                <input
                  type="radio"
                  value={title}
                  name="title"
                  onChange={props.handleChange}
                ></input>
                {title}
              </label>
            );
          })}
        </div>

        <div id="experience_level-buttons">
          {experience_levels.map((experience_level) => {
            return (
              <label>
                <input
                  type="radio"
                  value={experience_level}
                  name="experience_level"
                  onChange={props.handleChange}
                ></input>
                {experience_level}
              </label>
            );
          })}
        </div>

        <div id="position_type-buttons">
          {position_types.map((position_type) => {
            return (
              <label>
                <input
                  type="radio"
                  value={position_type}
                  name="position_type"
                  onChange={props.handleChange}
                ></input>
                {position_type}
              </label>
            );
          })}
        </div>

        <div id="skills-buttons">
          {skills.map((skill) => {
            return (
              <label>
                <input
                  type="checkbox"
                  value={skill}
                  name="skills"
                  onChange={props.handleCheckboxChange}
                ></input>
                {skill}
              </label>
            );
          })}
        </div>

        <div id="listing-form-textbox-container">
          {textboxes.map((textbox) => {
            return (
              <label>
                <input
                  onChange={props.handleChange}
                  type="text"
                  name={textbox}
                  placeholder={textbox}
                ></input>
                {textbox.charAt(0).toUpperCase() + textbox.slice(1)}
              </label>
            );
          })}
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default ListingForm;
