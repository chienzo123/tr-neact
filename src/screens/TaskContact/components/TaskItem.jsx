import React, {useState}  from 'react'
import { makeStyles } from '@mui/styles';
import TaskItemStyle from './TaskItemStyle.js';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import UpDateIcon from '@material-ui/icons/Update';
import  PropTypes  from 'prop-types';
import {Link} from 'react-router-dom';
import { deleteTask } from 'services/task/task.service.js';

const useStyles = makeStyles(
    TaskItemStyle
);
function TaskItem({title, timeCreate, timeUpdate, status, user, caterogy, id }){
    const classes = useStyles();
    const notCate = 'không có danh mục';
    const [show, setShow] = useState(false);
    const getCate = caterogy ?  caterogy.map(item => {
        return item.name
    }) : notCate;
    const deleteTasks = async () => {
        await deleteTask(id).then(res =>{
            alert('đã xóa thành công')
            
        })
        .catch(res => {console.log(res); alert('xóa không thành công');})
    }
    return(
        <div className={classes.form}>
        <div className={classes.header}>
            <div className={classes.title}>
                <p>{title}</p>
            </div>
            <div className={classes.icon}>
                <ArrowDropDownIcon className={classes.icon__item} onClick={() => {setShow(!show)}}/>
                <DeleteIcon className={classes.icon__item} onClick={deleteTasks}/>
                <Link to={`/EditTask/${id}`}><UpDateIcon className={classes.icon__item}/></Link>
            </div>
        </div>
        <div className={classes.body}>
           {show ? <div>
            <p>Creat at: {timeCreate}</p>
            <p>Last updated: {timeUpdate}</p>
            <p>Status: {status}</p>
            <p>User: {user}</p>
            <p>Caterogy: {getCate}</p> 
            </div> : <div>click vào biểu tượng để xem chi tiết</div> }
        </div>
    </div>
    )
}
export default TaskItem
TaskItem.propTypes = {
    title: PropTypes.string.isRequired,
    timeCreate: PropTypes.string.isRequired,
    timeUpdate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    caterogy: PropTypes.array.isRequired,
   
}