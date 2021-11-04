import React  from 'react'
import Header from 'components/Header/Header';
function MainLayout(props){
    
    return(
        <div>
             <Header/>
        {
            props.children
        }
        </div>
    )
}
export default MainLayout
