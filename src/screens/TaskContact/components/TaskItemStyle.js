
const TaskItemStyle = {
   
    form:{
        width: '600px',
        minHeight: '50px',
        border: '1px black solid',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: '10px'
    },
    header:{
        width: '100%',
        height: '70px',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    },
    title:{
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'start',
        paddingLeft: '10px',
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'center'
    },
    icon:{
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: '10px',
    },
    icon__item : {
        fontSize: '30px !important',
        paddingLeft: '10px',
        cursor: 'pointer',
    },
    body:{
        width:' 80%',
        height: '80%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingLeft: '10px',
        paddingTop:'10px'
    },
    
}
export default TaskItemStyle;