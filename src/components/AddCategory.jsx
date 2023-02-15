import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ( { onNewCategory } ) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (/*event*/ { target }) => {
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    console.log('Hola Mundo desde onSubmit');
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;

    //setCategories( categories => [ inputValue, ...categories  ]);
    onNewCategory( inputValue.trim() );
    setInputValue('');

  }

  return (

    <form onSubmit={ (event ) => onSubmit(event)} aria-label="form" >
        <input 
            type="text"
            placeholder="Buscar Gif"
            value={ inputValue }
            onChange={ onInputChange }
        
        />
    </form>
    
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
