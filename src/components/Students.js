import React, { Component } from "react";
import { connect } from "react-redux"
import { deleteStudent } from "../actions"
import Student from "./Student"
import "../App.css";

class Students extends Component {
	render () {
		return (
			<div className="App">
				<div>
					{
						this.props.students.map ((student) =>
							<Student student={student} key={student.id} delete={this.props.deleteStudent}/>
						)
					}
				</div>
			</div>
		);
	}
}

function mapStateToProps (state, props) {
	console.log ("Students.js", state)
	return {
		students: state
	}
}

function mapDispatchToProps (dispatch) {
	return {
		deleteStudent: (id) => dispatch (deleteStudent (id)),
	}
}

export default connect (
	mapStateToProps,
	mapDispatchToProps
) (Students);
