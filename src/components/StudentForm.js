import React, { Component } from "react";
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"
import { addStudent, updateStudent } from "../actions"
import "../App.css";

class StudentForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      student: {
        content : "",
        id: props.match.params.id,
        name: props.match.params.name,
        surname: props.match.params.surname,
        age: props.match.params.age,
      },
      redirectToDefault: false
    }
  }
  
  handleContentChange = (event) => {
    this.setState({ 
      student : { ...this.state.student, 
                  content: event.target.value}
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.student.id === undefined) 
      this.props.addStudent(this.state.student);
    else
      this.props.updateStudent(this.state.student);

    this.setState({redirectToDefault: true})
  }

  componentDidMount = () => {
    if (this.props.student)
      this.setState({ student: this.props.student })
  }

  render() {
    if (this.state.redirectToDefault) {
      return <Navigate to="/" />;
    }

    return (
          <div className="StudentForm">
          <form onSubmit={this.handleSubmit}>
            <div><label>Task</label></div>
            <div>
              <textarea 
              name="content" 
              value={this.state.student.content}
              onChange={this.handleContentChange}></textarea> 
            </div>
            <div>
             <input type="submit" value="Save Student" />
            </div>
            </form>
          </div>
    );
  }
}
function mapStateToProps (state, props) {
  
  const id = props.match.params.id || ""

  return {
    students: state,
    student: state.find( s => s.id === id)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addStudent: (student) => dispatch(addStudent(student)),
    updateStudent: (student) => dispatch(updateStudent(student))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentForm);

