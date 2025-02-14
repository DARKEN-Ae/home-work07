import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
import { group } from "../../data/groupData";
import { memo } from "react";

import "../../pages/sass/FormStudents.scss";

const FromStudent = ({ handleSubmit, validated, handleStudent, student }) => {
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="my-3" controlId="firstName">
        <Form.Label>First name</Form.Label>
        <Form.Control
          required
          onChange={handleStudent}
          value={student.firstName}
          type="text"
          placeholder="First name"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please fill!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="my-3" controlId="lastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          required
          onChange={handleStudent}
          value={student.lastName}
          type="text"
          placeholder="Sure name"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please fill!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="my-3" controlId="group">
        <Form.Label>Your Laptop</Form.Label>
        <Form.Select onChange={handleStudent} value={student.group}>
          {group.map((gr, i) => (
            <option key={i} value={gr}>
              {gr}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="my-3" controlId="age">
        <Form.Label>Price</Form.Label>
        <Form.Control
          required
          onChange={handleStudent}
          value={student.age}
          type="number"
          placeholder="How much $"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please fill!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="descrip">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Description"
          onChange={handleStudent}
          value={student.descrip}
          type="text"
        />
      </Form.Group>
      <Button type="submit" className="w-100 submit-btn">
        Submit form
      </Button>
    </Form>
  );
};

FromStudent.propTypes = {
  handleSubmit: PropTypes.func,
  validated: PropTypes.bool,
  handleStudent: PropTypes.func,
  student: PropTypes.object,
};

const FromStudentMemo = memo(FromStudent);
export default FromStudentMemo;
