import PropTypes from "prop-types";
import { memo } from "react";
import { Table } from "react-bootstrap";
import oflineStudents from "./oflineStudents";

const TableStudents = ({ students, onEdit, onDelete }) => {
  return (
    <Table
      className="table-responsive"
      striped
      bordered
      hover
      style={{ fontFamily: "Montserrat" }}
    >
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Laptop</th>
          <th>Age</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.length ? (
          students.map((student, i) => (
            <tr key={student.id}>
              <td>{i + 1}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.group}</td>
              <td>{student.age}</td>
              <td>{student.descrip}</td>
              <td
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <button
                  className="btn btn-sm btn-primary edit-btn"
                  onClick={() => onEdit(student.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger ml-2 delete-btn"
                  onClick={() => onDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr className="text-center">
            <td colSpan={7}></td>
          </tr>
        )}
        {oflineStudents.map((student, index) => (
          <tr key={`offline-${index}`}>
            <td>{students.length + index + 1}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.group}</td>
            <td>{student.age}</td>
            <td>{student.descrip}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TableStudents.propTypes = {
  students: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const TableStudentsMemo = memo(TableStudents);
export default TableStudentsMemo;
