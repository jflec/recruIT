import React, { useEffect, useState } from 'react';

const ListingForm = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
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
  const position_types = ['Full-time', 'Part-time', 'Contract'];
  const textboxes = ['company', 'location', 'description'];

  const handleChange = (e) => {
    const filtered_items = skills.filter(e);
  };

  return (
    <div className="listing-form-container">
      <form id="listing-form" onSubmit={props.handleSubmit}>
        <div id="listing-form-radio-buttons">
          <div id="title-buttons">
            {titles.map((title) => {
              return (
                <label id="listing-form-labels">
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
                <label id="listing-form-labels">
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
                <label id="listing-form-labels">
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
        </div>

        <input
          id="search"
          type="text"
          placeholder="Search"
          spellCheck="false"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>

        <div id="skills-buttons">
          {skills
            ?.filter((skill) => {
              if (searchTerm == '') {
                return skill;
              } else if (
                skill.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return skill;
              }
            })
            .map((skill) => {
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
