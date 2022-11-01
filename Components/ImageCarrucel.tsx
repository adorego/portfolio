import classes from './ImageCarrousel.module.css';
import { useState } from 'react';

export interface ImageCarrouselProps{
    images:Array<string>;
    title?:string;

}

const ImageCarrousel = (props:ImageCarrouselProps) =>{
    const [currentImage, setCurrentImage] = useState(props.images[0]);
    
    
    return(
        <div className={classes.container}>

        </div>
    )
}

export default ImageCarrousel;