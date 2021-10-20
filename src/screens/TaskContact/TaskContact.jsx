import React  from 'react'
import TaskItem from'./TaskItem';
import "./TaskContact.css"
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
function TaskContact(){
    return(
        <div>
            <TaskItem/>
            <div className="Task-Create">
               <Link to="/CreateTask"> <button className="Task-Create__btn" ><p>Create a new Task</p></button></Link>
            </div>
        </div>

    )
}
export default TaskContact