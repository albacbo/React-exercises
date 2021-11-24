import React, { Component } from "react";
import { Link } from "react-router-dom"
import "../App.css";

class Student extends Component {
  constructor (props) {
    super(props);
    this.state = {showDetail : false }
  }

  showDetail = () => {
    console.log("Clicking detail : ",this.state.showDetail);
    this.setState({
      showDetail: !this.state.showDetail
    })
  }

  render() {
    const student = this.props.student;
    return (
            <div className="Student"  >{student.name}
              <div className="StudentControls">
                <a  onClick={() => this.showDetail()}>Detail</a> | 
                <Link to={`/studetns/edit/${student.id}`}>Update</Link> |  
                <a  onClick={() => this.props.delete(student.id)}>Delete</a>
              </div>
              {
                this.state.showDetail &&
                <div>
                  <div><b>Id:</b> {student.id}</div>
                  <div><b>Name:</b> {student.name}</div>
                  <div><b>Surname:</b> {student.surname}</div>
                  <div><b>Age:</b> {student.age}</div>
                </div>
              }
            </div>
    );
  }
}


export default Student;
