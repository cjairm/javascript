import React, { useState } from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import Header from './UI/Header/Header';
import Menu from './UI/Menu/Menu';
import Images from './UI/Images/Images';
import { Container, Snackbar, Backdrop, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

// Init styles for Material UI components
const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

function App() {
    // global classes
    const classes = useStyles();

    // variable to save all pictures fetched from API.
    const [pictures, setPictures] = useState([]);
    // variable to close or open Alert
    const [openAlert, setOpenAlert] = useState(false);
    // variable to close or open Backdrop
    const [openBackdrop, setOpenBackdrop] = useState(false);

    // function that open Alert
    const handleAlertClick = () => {
        setOpenAlert(true);
    };

    // function that close Alert
    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpenAlert(false);
    };

    // Helper to catch query params
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    // Get current query params
    let queryParam = useQuery();

    // Function that fetch info from server (Axios)
    const fetchPhotosHandler = () => {
        // catch size of image that user seleted
        const size = queryParam.get("size");
        // catch number of pages that user wants
        const pageItems = queryParam.get("page_items");
        // Flickr endpoint to retrieve all recent images.
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=0d0e78cd535935555246f4175fd8b375&per_page=${pageItems}&format=json&nojsoncallback=1`;
        // init backdrop during fetching
        setOpenBackdrop(true);
        // send request to Flickr server
        axios.get(url).then(response => {
            if (response.status >= 200 && response.status < 300) {
                try {
                    // In case everything run OK, URL is added to photo object
                    const photos = response.data.photos.photo.map(photo => {
                        const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
                        const newPhoto = {
                            ...photo,
                            url
                        };
                        return newPhoto;
                    });
                    // Variable of pictures is updated
                    setPictures(photos);   
                } catch (error) {
                    // In case of error Alert is shown
                    handleAlertClick();
                }
            } else {
                // In case of error Alert is shown
                handleAlertClick();
            }
            // The fetch has finished, so the backdrop is cancelled
            setOpenBackdrop(false);
        }).catch(() => {
            // In case of error Alert is shown
            handleAlertClick();
            // The fetch has finished, so the backdrop is cancelled
            setOpenBackdrop(false);
        });
    }

    return (
        <React.Fragment>
            {/* HEADER */}
            <Header />
            {/* HEADER */}
            <Container maxWidth="md">
                {/* MENU => parameter "function" that is excuted on click to fetch pictures*/}
                <Menu onClickFetchPhotos={fetchPhotosHandler} />
                {/* MENU */}

                {/* IMAGES => parameter "pictures" that contains all images fetched */}
                <Images pictures={pictures} />
                {/* IMAGES */}
            </Container>

            {/* ALERT */}
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity="error">
                    Something went wrong!
                </Alert>
            </Snackbar>
            {/* ALERT */}

            {/* BACKDROP */}
            <Backdrop className={classes.backdrop} open={openBackdrop}>
                <CircularProgress color="inherit" />
            </Backdrop>
            {/* BACKDROP */}
        </React.Fragment>
    );
}

export default withRouter(App);
