import React, {Component} from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Exercise  (props) {
    return(
        <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0.10)}</td>
        <td>
            <Link to = {"/edit/"+props.exercise._id}>edit</Link> | <a href = '#' onClick= { () => {props.deleteExercise(props.exercise._id) }}>delete</a>
        </td>
    </tr>
    )
}


export default class ExercisesList extends Component{
    constructor (props) {
        super(props)
    
        this.deleteExercise = this.deleteExercise.bind(this)

        this.state ={
            exercises : []
        }
    }
    

componentDidMount() {
    axios.get("http://localhost:13920/exer")
        .then(res => {
            this.setState({ exercises : res.data })
        })
        .catch((error) => {
            console.log(error)
        })
}

deleteExercise(id) {
    axios.delete("http://localhost:13920/exer/delete/"+ id)
        .then(res => console.log(res.data))
    this.setState({
        exercises: this.state.exercises.filter(el => el._id !== id)
        })
}

exercisesList(){
    return this.state.exercises
    .map(currentexercise => {
        return <Exercise exercise={currentexercise} deleteExercise = {this.deleteExercise} key = {currentexercise._id} />
    })
}

    render(){
        return(
            <div>
                <h2>Logged Exercises</h2>
                <table className = "table">
                    <thead className = " thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                <tbody>
                    { this.exercisesList()}
                </tbody>
                </table>
            </div>
        )
    }
}

