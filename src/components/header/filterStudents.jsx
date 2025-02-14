import { memo } from "react";
import PropTypes from "prop-types";

const FilterStudents = ({ handleSearchStudents, handleCount }) => {
  return (
    <div className="input-group mb-3 my-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        onChange={handleSearchStudents}
      />
      <span className="input-group-text count" id="basic-addon2">
        {handleCount}
      </span>
    </div>
  );
};

FilterStudents.propTypes = {
  handleSearchStudents: PropTypes.func,
  handleCount: PropTypes.number,
};

const FilterStudentsMemo = memo(FilterStudents);
export default FilterStudentsMemo;
