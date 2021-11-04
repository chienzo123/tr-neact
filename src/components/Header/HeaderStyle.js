const HeaderStyle =
    {
      header : {
        position: 'sticky',
        zIndex: 100,
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 20px',
        backgroundColor: '#ffffff',
        boxShadow:'0 5px 8px -9px rgba(0,0,0,.75)',
         
    },
    header__tag : {
      fontSize: 30,
      fontWeight: 700,
      color: 'black'
    },
    header__left : {
      display: 'flex',
      alignItems: 'center',
      justifyContent:' space-evenly',
      textDecoration: 'none',
    },
    
     
    header__right :{
           display: 'flex',
           alignItems: 'center',
    },
    
    header__rightButton : {
               backgroundColor: '#E3E6EA !important',
               margin: '0 10 !important',
               position: 'relative',
               
    },
    header__rightIcon :{
                   color: 'black',
    },
    info :{
      position: 'absolute',
      display: 'none',
      zIndex: 999,
      width:400,
      height: 300,
      backgroundColor: '#efdede',
      top: 65,
      right: 10,
      padding: 0,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      boxShadow: '0 5px 8px -9px rgba(0,0,0,.75)',
      
    
    },
    info__button : {
      width: '92%',
      height: '21%',
      backgroundColor:' #ffffff',
      color: 'black',
      alignItems: 'center',
      justifyContent: 'start',
      cursor: 'pointer',
      display: 'flex',
      border: 0,
      borderRadius: 20,
      margin: 10,
      '&:hover': {
        backgroundColor: '#a6a8ab6e'
      }
    },
    header__link :{
      textDecoration: 'none',
    },
    info__buttonText :{
      display: 'flex',
      justifyContent: 'start',
      color: 'black',
      width: '70%',
      marginTop: 0,
      fontSize: 16,
      left: -20,
    },
    info__buttonIcon :{ 
    width: '30%',
    justifyContent: 'start',
    marginTop: 0,
    }  
  }
  export default HeaderStyle