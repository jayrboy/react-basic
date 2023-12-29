import Header from "./components/Header";
import StudentList from "./components/StudentList";
import { useState } from "react";
import AddForm from "./components/AddForm";
import "./App.css";

function App() {
  const [students, setStudent] = useState([{ id: 1, name: "เจ" }]);

  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id !== id));
  }

  return (
    <div className="container">
      <Header title="Home" />
      <main>
        <AddForm />
        <StudentList students={students} deleteStudent={deleteStudent} />
      </main>
    </div>
  );
}

export default App;
