import React, { useState, useEffect}  from 'react'
import TaskItem from'./components/TaskItem';
import { makeStyles } from '@mui/styles';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import TaskStyle from './TaskStyle';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {getListTask} from '../../services/task/task.service'
const useStyles = makeStyles(TaskStyle);
function TaskContactScreen(){
    const classes = useStyles()
    const [page, setPage] = useState(1);
    const limit = 3;
    const [list, setList] = useState([]);
    const handleChange = (event, value) => {
      setPage(value);
    };
    const fillTask = (id) =>{
     let newList = list.filter(item =>
      item.id !== id
    )
    setList(newList);
  }
    console.log(list);
    
    useEffect(() => {
        let mounted = true;
        let params = {limit,page}
        getListTask(params)
          .then(items => {
            if(mounted) {
              setList(items.items)
            }
          })
        return () => mounted = false;
      }, [page, list.length])  
    return(
        <div>
          <div className={classes.TaskItem}>
            {
              list.map(item => 
                <TaskItem
                key={item.id}
                title={item.title} 
                timeCreate={item.createdAt}
                timeUpdate={item.updatedAt}
                status={item.status}
                user={item.author.username}
                caterogy={item.categories}
                id={item.id}
                />
              )
            }
         
          </div>
            
            <div className={classes.Paging}>
             <Stack spacing={2}>
            <Pagination count={10} page={page} onChange={handleChange} />
            </Stack> 
            </div>
            <div className={classes.CreateTask}>
               <Link to="/CreateTask"> <button className={classes.CreateTask__Button} ><p>Create a new Task</p></button></Link>
            </div>
        </div>

    )
}
export default TaskContactScreen