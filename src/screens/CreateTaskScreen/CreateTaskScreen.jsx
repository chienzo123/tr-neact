import React,{ useState, useEffect}  from 'react'
import TextInputGroup from '../../components/TextInputGroup/TextInputGroup'
import { makeStyles } from '@mui/styles';
import{ createTask } from '../../services/task/task.service'
import { getCategories } from '../../services/caterogy/caterogy.services'
import { useHistory } from 'react-router';
import CreateTaskStyle from './CreateTaskStyle.js';
const useStyle = makeStyles(CreateTaskStyle)
function CreateTaskScreen(){
 const [newtitle, setTitle] = useState('');
 const [categoryIds, setCaterogies] = useState([]);
 const [caterogy, setCaterogy] = useState([]);
 const classes = useStyle();
 const history = useHistory();
 const pushData = async (e) => {
    e.preventDefault();
    let title = newtitle.target.value
     let newTask={title,categoryIds}
     console.log(newTask);
    await createTask(newTask)
    .then(res => {
        alert('tạo mới thành công');
        history.push('/');
    }).catch(rej => {
        console.log(rej);
        alert('tạo mới không thành công');
    })
 } 
 const handleCheckboxChange = (e) => {
     let newItem = e.target.value;
     let newList = [...categoryIds, newItem];
     categoryIds.forEach(item => {
         if(newItem === item){
             console.log('delete');
             newList = categoryIds.filter(item => item !== newItem)
         }})
         setCaterogies(newList)
        
    }
 useEffect(() => {
    let mounted = true;
    getCategories()
      .then(items => {
        if(mounted) {
          setCaterogy(items.items)
        }
      })
    return () => mounted = false;
  }, []) 
    return(
        <form className={classes.form} onSubmit={pushData}>
             <TextInputGroup 
                                    
                                    type="text"
                                    name="title"
                                    placeholder="Title..."
                                    onChange={setTitle}
                                    label="Title"
                                />
         <div className={classes.formCheckbox}>                
          {
              caterogy.length > 0 && caterogy.map(item => {
                return(<div className={classes.formCheckbox__item} key={item.id}><input onChange={handleCheckboxChange} type="checkbox" id={item.id} name={item.name} value={item.id} /><label htmlFor={item.id}>{item.name}</label></div> )
              })
          }
          </div>
          <button type='submit' className={classes.btn}>Thêm mới</button>
          
        </form>
    )
}
export default CreateTaskScreen 