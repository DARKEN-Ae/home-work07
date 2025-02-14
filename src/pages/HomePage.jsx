import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { v4 } from "uuid";

import FromStudent from "../components/form/FormStudent";
import FilterStudents from "../components/header/filterStudents";
import TableStudents from "../components/table/tableStudent";

import "./sass/HomePage.scss";

const HomePage = () => {
  let studentesLocal = localStorage.getItem("students");

  const [students, setStudents] = useState(JSON.parse(studentesLocal) || []);
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    group: "ASUS TUF GAMING F17",
    age: "",
    descrip: "",
  });
  const [validated, setValidated] = useState(false);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);

    if (form.checkValidity()) {
      let updatedStudents;
      if (editId) {
        updatedStudents = students.map((item) =>
          item.id === editId ? { ...student, id: editId } : item
        );
        setEditId(null);
      } else {
        updatedStudents = [...students, { ...student, id: v4() }];
      }

      setStudents(updatedStudents);
      localStorage.setItem("students", JSON.stringify(updatedStudents));

      setValidated(false);
      setStudent({
        firstName: "",
        lastName: "",
        group: "Select Laptop",
        age: "",
        descrip: "",
      });
    }
  };

  const handleStudent = (e) => {
    setStudent({ ...student, [e.target.id]: e.target.value });
  };

  const handleSearchStudents = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };

  const handleEdit = (id) => {
    const editStudent = students.find((student) => student.id === id);
    if (editStudent) {
      setStudent(editStudent);
      setEditId(id);
    }
  };

  const handleDelete = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const result = students.filter(
    (el) =>
      el.firstName.toLowerCase().includes(search) ||
      el.lastName.toLowerCase().includes(search) ||
      el.age.toLowerCase().includes(search)
  );

  return (
    <Container>
      <Row className="row-center">
        <Col className="col-one mb-3">
          <FromStudent
            md={2}
            validated={validated}
            handleSubmit={handleSubmit}
            handleStudent={handleStudent}
            student={student}
          />
        </Col>
        <Col md={10}>
          <FilterStudents
            handleSearchStudents={handleSearchStudents}
            handleCount={students.length}
          />
          <TableStudents
            students={result}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
