import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import TextInputGroupStyle from './TextInputGroupStyle.js';
const useStyles = makeStyles(TextInputGroupStyle);
export default function TextInputGroup({
    label,
    name,
    value,
    onChange,
    placeholder,
    type,
    error,
    Icon, 
    id
})
{
    const  classes = useStyles()
    return(                                      
    <div className={classes.inputItem}>
                              <label htmlFor={name} className={classes.inputItem__heading} >{label}</label>
                              <div className={classes.inputItem__input} >
                              {Icon && Icon }
                                  <input className={classes.inputItem__inputInput}
                                    type={type}
                                    name={name} 
                                    placeholder={placeholder}
                                    onChange={onChange}
                                    id={id}
                                    />
                              </div>
                              { error && <div className={classes.inputItem__error} >{error}</div> }
                          </div>
            
    )
}
TextInputGroup.defaultProps = {
    type: 'text'
}

TextInputGroup.propTypes ={
    name : PropTypes.string.isRequired,
    label : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    placeholder : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    error: PropTypes.string,

}