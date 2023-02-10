import { useEffect, useState } from "react";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {

    //lo Haremos creando un custom Hook
    const { images, isLoading } = useFetchGifs( category );
   

    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs( category );
    //     setImages( newImages );
    // }

    // useEffect( () => {

    //     getImages();

    // }, []);


    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading
                ? ( <h2>Cargando...</h2> )
                : null
            }

            <div className="card-grid">
                {
                    images.map( (image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image } //otra forma de hacerlo, todas las propiedades que vengan en el imagen las estamos esparciendo
                            // title={ image.title }
                            // url={ image.url }
                        />
                    ))
                }
            </div>
            
        </>
    )
}
