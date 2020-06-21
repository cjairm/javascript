import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { 
    Grid, 
    Radio, 
    FormControlLabel, 
    RadioGroup, 
    FormControl,
    Select,
    InputLabel,
    Button } from '@material-ui/core';

// Init styles for Material UI components
const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    marginBottom: {
        marginBottom: 30
    }
}));

function Menu(props) {
    // use history to push query parameters
    let history = useHistory();
    // use classes
    const classes = useStyles();

    // variebl to save input radio button
    const [radioValue, setRadioValue] = useState('s');
    // variable to save number of pages selected
    const [pagesValue, setPagesValue] = useState(1);

    // on change save new value for radio button selected
    const handleRadioButtonChange = event => {
        setRadioValue(event.target.value);
    };

    // on change save new value of the items per page
    const handlePagesChange = event => {
        setPagesValue(event.target.value);
    };

    // on every change of radio button or items per page or new query params
    useEffect(() => {
        if (radioValue && pagesValue) {
            history.push("/?size="+radioValue+"&page_items="+pagesValue);
        } else {
            history.push("/");
        }
    }, [radioValue, pagesValue, history]);

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                    {/* FORM RADIO GROUP => event "onChange" to watch for changes on radio buttons */}
                    <h1>Select a size of picture you need</h1>
                    <RadioGroup aria-label="position" name="position" value={radioValue} onChange={handleRadioButtonChange} row>
                        <FormControlLabel
                            value="s"
                            control={<Radio color="primary" />}
                            label="Small (75x75)"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="q"
                            control={<Radio color="primary" />}
                            label="Large (150x150)"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="t"
                            control={<Radio color="primary" />}
                            label="Thumbnail"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="n"
                            control={<Radio color="primary" />}
                            label="Medium (320)"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="z"
                            control={<Radio color="primary" />}
                            label="Original (640)"
                            labelPlacement="bottom"
                        />
                    </RadioGroup>
                    {/* FORM RADIO GROUP */}
                </Grid>

                <Grid item xs={12} lg={6}>
                    {/* SELECT FOR ITEMS PER PAGE => event "onChange" that watch for every change */}
                    <h1>How many photos do you need?</h1>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="number-of-items">Quantity</InputLabel>
                        <Select
                            native
                            onChange={handlePagesChange}
                            inputProps={{
                                name: '1 photo',
                                id: 'number-of-items',
                            }}
                        >
                            <option value={1}>1 photo</option>
                            <option value={5}>5 photos</option>
                            <option value={10}>10 photos</option>
                            <option value={20}>20 photos</option>
                        </Select>
                    </FormControl>
                    {/* SELECT FOR ITEMS PER PAGE */}
                </Grid>

                <Grid className={classes.marginBottom} item xs={12}>
                    {/* BUTTON => executes a function that is passed in props*/}
                    <Button
                        onClick={() => props.onClickFetchPhotos()}
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        Get Photos
                    </Button>
                    {/* BUTTON */}
                </Grid>
            </Grid>
        </div>
    );
}

export default Menu;