import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const CourseList = ({ title, courses }) => {
  return (
    <div className="course-list-container">
      <h2 className="course-list-title">{title}</h2>
      <ul className="course-list">
        {courses.map((course, index) => (
          <li key={index} className="course-list-item">{course}</li>
        ))}
      </ul>
    </div>
  );
};

// Define PropTypes for the component
CourseList.propTypes = {
  title: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CourseList;