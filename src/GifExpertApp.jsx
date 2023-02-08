import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Peaky Blinders']);
    
    const  onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return;

        //categories.push('Bojack Horseman');
        setCategories( [newCategory, ...categories ] );
        //setCategories( cat => [...cat, 'Bojack Hprseman'] );

    }

  return (
    <>
        {/* titulo */}
        <h1>Gif Expert App</h1>

        {/* Input */}
        <AddCategory 
           
            onNewCategory = { value => onAddCategory(value) }
        />

        {/* Listado de Gifs */}


        { 
            categories.map( category => {
                return (
                    <GifGrid key={ category } category={ category } />
                )
            }) 
        }
            
    
    </>
  )
}
