import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Peaky Blinders', 'The Sopranos' ]);
    
    const  onAddCategory = () => {

        //categories.push('Bojack Horseman');
        setCategories( ['Bojack Horseman', ...categories ] );
        //setCategories( cat => [...cat, 'Bojack Hprseman'] );

    }

  return (
    <>
        {/* titulo */}
        <h1>Gif Expert App</h1>

        {/* Input */}
        <AddCategory/>

        {/* Listado de Gifs */}
        <button onClick={ onAddCategory }>Agregar</button>

        <ol>

            { categories.map( category => {
                return <li key = { category }> { category } </li>
            }) }
            
        </ol>

            {/* Gif Items */}
    
    </>
  )
}
