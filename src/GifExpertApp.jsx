import { useState } from "react"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Peaky Blinders', 'The Sopranos' ]);
    console.log(categories);

  return (
    <>
        {/* titulo */}
        <h1>Gif Expert App</h1>

        {/* Input */}

        {/* Listado de Gifs */}

        <ol>

            { categories.map( category => {
                return <li key = { category }> { category } </li>
            }) }
            
        </ol>

            {/* Gif Items */}
    
    </>
  )
}
