import React, { Component } from "react"
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import "./App.css"
import  Students  from "./components/Students"
import  StudentForm  from "./components/StudentForm"

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
            <div className="lapp-header-title">
              <h1>React Redux CRUD exercise</h1>
            </div>
              <div>
                <Link to="/">Home</Link> | 
                <Link to="/students/new">New Student</Link>
              </div>
              <Routes>
                <Route exact path="/" element={<Students />}/>
                <Route exact path="/students/new" element={<StudentForm />}  />
                <Route exact path="/students/edit/:id" element={<StudentForm />}  />
                <Route exact path="/students/:id" element={<Students />} />
              </Routes>
          
        </div>
      </div>
    );
  }
}


export default App