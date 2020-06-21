import React, { lazy, useState, useEffect } from 'react';

const FirstApproach = lazy(() => {
    const component = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(import('./First/First'));
        }, 500);
    });
    return component;
});

const NotFound = lazy(() => {
    const component = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(import('../../Views/Errors/4XX/404'));
        }, 500);
    });
    return component;
});

function Approach(props) {
    const [ approachNumber, setApproachNumber ] = useState(props.match.params.number);

    useEffect(() => {
        setApproachNumber(props.match.params.number);
    }, [props.match.params.number]);

    let componentApproach = null;
    switch (approachNumber) {
        case '1':
            componentApproach = (
                <FirstApproach/>
            );
            break;
    
        default:
            componentApproach = (
                <NotFound/>
            );
            break;
    }

    return (
        <div>
            { componentApproach }
        </div>
    );
}

export default Approach;