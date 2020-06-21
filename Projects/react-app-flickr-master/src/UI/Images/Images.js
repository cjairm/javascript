import React, { useEffect, useState } from 'react';
import Image from './Image/Image';
import { Grid } from '@material-ui/core';

function Images(props) {
    // variable that stores all images
    const [ images, setImages ] = useState([]);

    // watcher for changes on images => sent via props
    useEffect(() => {
        setImages(props.pictures);
    }, [props.pictures]);

    // Create component with params to insert it in return as variable
    const renderedImages = images.map(image => {
        const newImage = (
            <Image 
                key={image.id}
                url={image.url}
                text={image.id}
            />
        ); 
        
        return newImage;
    });

    return (
        <React.Fragment>
            <Grid item xs={12}>
                {/* All images rendered as components */}
                { renderedImages }
            </Grid>
        </React.Fragment>
    );
}

export default Images;