import React, { useState, useEffect } from 'react';

import {
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Backdrop,
    Checkbox,
    FormGroup,
    FormHelperText,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Snackbar
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import MuiAlert from '@material-ui/lab/Alert';
import './First.css';

function First(props) {
    const [serviceStatus, setServiceStatus] = useState(false);
    const [isRunning, setIsRunning] = useState(null);
    const [robot, setRobot] = useState(null);
    const [sectionTwo, setSectionTwo] = useState(null);
    const [palletizingCommands, setPalletizingCommands] = useState({
        columns: 0,
        rows: 0,
    });
    const [machineTendingCommands, setMachineTendingCommands] = useState('');
    const [sortingCommands, setSortingCommands] = useState({
        containers: [
            'container-1',
            'container-2',
            'container-3',
            'container-4',
            'container-5',
        ],
        objects: [
            'primer',
            'foundation',
            'eyeshadow',
            'blush',
            'lipstick',
            'gloss'
        ],
        valueName: {
            primer: false,
            foundation: false,
            eyeshadow: false,
            blush: false,
            lipstick: false,
            gloss:false
        },
        containerValueName: {
            'container-1': '',
            'container-2': '',
            'container-3': '',
            'container-4': '',
            'container-5': ''
        }
    });
    const [kittingCommands, setKittingCommands] = useState({
        valueKey: [
            'cellphones',
            'headphones',
            'charger',
            'manual',
            'laptop',
            'usb'
        ],
        valueName: {
            cellphones: "Phones",
            headphones: "Headphones",
            charger: "Chargers",
            manual: "Manuales",
            laptop: "Laptops",
            usb: "USBs",
        },
        inputState: {
            cellphones: false,
            headphones: false,
            charger: false,
            manual: false,
            laptop: false,
            usb: false,
        },
    });

    const changeHandler = event => {
        setRobot(event.target.value);

        const elementGrid = document.getElementById("select-command");
        elementGrid.scrollIntoView(true);
    };

    const palletizingCommandsChangeHandler = event => {
        if(isNaN(event.target.value)) return;

        setPalletizingCommands({
            ...palletizingCommands,
            [event.target.getAttribute('name')]: event.target.value
        });
    };

    const kittingCommandsChangeHandler = value => event => {
        const kittingCommandsState = kittingCommands.inputState;

        setKittingCommands({ 
            ...kittingCommands, 
            inputState: {
                ...kittingCommandsState,
                [value]: event.target.checked
            }
        });
    };

    const machineTendingCommandsChangeHandler = event => {
        setMachineTendingCommands(event.target.value);
    };

    const machineSortingCommandsChangeHandler = event => {
        setSortingCommands({
            ...sortingCommands,
            containerValueName: {
                ...sortingCommands.containerValueName,
                [event.target.name]: event.target.value
            }
        });
    };

    const onStartServiceHanldler = () => {
        setServiceStatus(true);

        if (!sectionTwo || sectionTwo == 'waiting' || sectionTwo == 'error-service') {
            setIsRunning(null); 
            return;
        }

        if (isRunning == '2') {
            setIsRunning('1');
        } else if (isRunning == '1') {
            setIsRunning('2');
        } else {
            setIsRunning('2');
        }
    };

    const onStopServiceHanldler = (event, reason) => {
        if (reason === 'clickaway') return;
    
        setServiceStatus(false);
    };

    useEffect(() => {
        setSectionTwo('waiting');
        setTimeout(() => {
            setSectionTwo(robot);
        }, 500);
    }, [robot]);

    let sectionTwoComponentPromise = null;
    switch (sectionTwo) {
        case 'kitting':
            sectionTwoComponentPromise = (
                <div className="middle-content-radiogroup" style={{ margin: '0 auto' }}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Select your kit</FormLabel>
                        <FormGroup>
                            { kittingCommands.valueKey.map(commandKey => {
                                return (
                                    <FormControlLabel
                                        key={ commandKey }
                                        control={
                                            <Checkbox 
                                                checked={ kittingCommands.inputState[commandKey] } 
                                                onChange={ kittingCommandsChangeHandler(commandKey) } 
                                                value={ commandKey } 
                                            />}
                                        label={ kittingCommands.valueName[commandKey]}
                                    />
                                );
                            }) }
                        </FormGroup>
                        <FormHelperText>Select as many items as you need</FormHelperText>
                    </FormControl>
                </div>
            );
            break;
    
        case 'palletizing':
            sectionTwoComponentPromise = (
                <div className="middle-content-radiogroup" style={{ margin: '0 auto' }}>
                    <form noValidate autoComplete="off">
                        <div className="middle-content-radiogroup">
                            <TextField 
                                name="columns" 
                                onChange={ palletizingCommandsChangeHandler } 
                                style={{margin: '10px 0'}} 
                                label="Columns"
                                value={ palletizingCommands.columns } />
                            <TextField 
                                name="rows" 
                                onChange={ palletizingCommandsChangeHandler } 
                                style={{margin: '10px 0'}} 
                                label="Row"
                                value={ palletizingCommands.rows } />
                        </div>
                    </form>
                </div>
            );
            break;
    
        case 'machine-tending':
            sectionTwoComponentPromise = (
                <div className="middle-content-radiogroup" style={{ margin: '0 auto' }}>
                    <FormControl style={{ width: '150px' }}>
                        <InputLabel id="machine-tending-select-label">Select machine</InputLabel>
                        <Select
                            labelId="machine-tending-select-label"
                            id="machine-tending-select"
                            value={ machineTendingCommands }
                            onChange={ machineTendingCommandsChangeHandler }
                        >
                            <MenuItem value={'mills'}>Mills</MenuItem>
                            <MenuItem value={'lathes'}>Lathes</MenuItem>
                            <MenuItem value={'vcm'}>VCM</MenuItem>
                            <MenuItem value={'injection-molding-machines'}>Injection Molding Machines</MenuItem>
                            <MenuItem value={'3d-printing'}>3D printing</MenuItem>
                            <MenuItem value={'in-case-testing'}>In-Circuit Testing</MenuItem>
                            <MenuItem value={'laser-marking'}>Laser Marking</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            );
            break;
    
        case 'packing':
            sectionTwoComponentPromise = (
                <div className="middle-content-radiogroup" style={{ margin: '0 auto' }}>
                    <div className="page-not-found-text">
                        <h2>Start packing</h2>
                    </div>
                </div>
            );
            break;
    
        case 'bin-picking':
            sectionTwoComponentPromise = (
                <div className="middle-content-radiogroup" style={{ margin: '0 auto' }}>
                    <div className="page-not-found-text">
                        <h2>Start picking</h2>
                    </div>
                </div>
            );
            break;
    
        case 'sorting':
            sectionTwoComponentPromise = (
                <div className="middle-content-radiogroup" style={{ margin: '0 auto' }}>
                    <FormControl component="fieldset">
                        <FormGroup>
                            { sortingCommands.containers.map(containerKey => {
                                return (
                                    <div key={ containerKey }>
                                        <FormControl style={{ width: '150px' }}>
                                            <InputLabel id={ containerKey+"sorting-select-label" }>{ containerKey }</InputLabel>
                                            <Select
                                                labelId={ containerKey+"sorting-select-label" }
                                                id={ containerKey+"-select" }
                                                value={ sortingCommands.containerValueName[containerKey] }
                                                onChange={ machineSortingCommandsChangeHandler }
                                                name={ containerKey }
                                            >
                                                { sortingCommands.objects.map(objectName => {
                                                    return (
                                                        <MenuItem 
                                                            key={ containerKey+"-"+objectName } 
                                                            value={ objectName }
                                                        >{ objectName }</MenuItem>
                                                    );
                                                }) }
                                            </Select>
                                        </FormControl>   
                                    </div>
                                );
                            }) }
                        </FormGroup>
                        <FormHelperText>Select one item for each container</FormHelperText>
                    </FormControl>
                </div>
            );
            break;
    
        case 'error-service':
            sectionTwoComponentPromise = (
                <div className="middle-content-radiogroup" style={{ margin: '0 auto' }}>
                    <div className="page-not-found-text">
                        <h2>The service does not exists</h2>
                    </div>
                </div>
            );
            break;
        
        case 'waiting':
            sectionTwoComponentPromise = (
                <Backdrop style={{zIndex: 1000}} open={ true }>
                    <CircularProgress color="inherit" />
                </Backdrop>
            );
            break;
    
        default:
            sectionTwoComponentPromise = (
                <div className="middle-content-radiogroup" style={{ margin: '0 auto' }}>
                    <div className="page-not-found-text">
                        <h2>Select a service</h2>
                    </div>
                </div>
            );
            break;
    }

    return (
        <div>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="stretch"
            >
                <Grid id="select-robot" className="first-each-grid" container item xs={12} sm={4} spacing={1}>
                    <FormControl component="fieldset" className="first-center-radiogroup">
                        <div className="middle-content-radiogroup">
                            <FormLabel component="legend">Select a service</FormLabel>
                            <RadioGroup aria-label="robots-name" name="robots-name" value={ robot } onChange={ changeHandler }>
                            {/* Select kit  */}
                            <FormControlLabel value="kitting" control={ <Radio /> } label="Kitting" />
                            {/* Row - Columns */}
                            <FormControlLabel value="palletizing" control={ <Radio /> } label="Palletizing" />
                            {/* Select your machine */}
                            <FormControlLabel value="machine-tending" control={ <Radio /> } label="Machine tending" />
                            {/* Quantity of packs */}
                            <FormControlLabel value="packing" control={ <Radio /> } label="Packing" />
                            {/* Select type of bin */}
                            <FormControlLabel value="bin-picking" control={ <Radio /> } label="Bin picking" />
                            {/* Sorting */}
                            <FormControlLabel value="sorting" control={ <Radio /> } label="Sorting" />
                            {/* Create error */}
                            <FormControlLabel value="error-service" control={ <Radio /> } label="Service error" />
                            <FormControlLabel
                                value="disabled"
                                disabled
                                control={<Radio />}
                                label="(Service not available)"
                            />
                            </RadioGroup>
                        </div>
                    </FormControl>
                </Grid>

                <Grid id="select-command" className="first-each-grid" container item xs={12} sm={4} spacing={1}>
                    { sectionTwoComponentPromise }
                </Grid>

                <Grid id="select-other" className="first-each-grid" container item xs={12} sm={4} spacing={1}>
                    <div className="middle-content-radiogroup" style={{ margin: '0 auto' }}>
                        <div className="page-not-found-text">
                            <h2>{(sectionTwo !== 'waiting' && sectionTwo !== null && sectionTwo !== 'error-service') ? "Service "+sectionTwo : null }</h2>
                            <Button variant="contained" color="primary" onClick={ onStartServiceHanldler }>
                                { (isRunning === '2' ) ? "Stop" : "Start" }
                            </Button>

                            <Snackbar open={ serviceStatus } autoHideDuration={ 5000 } onClose={ onStopServiceHanldler }>
                                <MuiAlert elevation={6} variant="filled" onClose={ onStopServiceHanldler } severity={ (isRunning === '1' ) ? "warning" : (isRunning === '2' ) ? "success" : "info" }>
                                    { (isRunning === '1' ) ? "Stoping service!" : (isRunning === '2' ) ? "Started service!" : "Select a service" }
                                </MuiAlert>
                            </Snackbar>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default First;