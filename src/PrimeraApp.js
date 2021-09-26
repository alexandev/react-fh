
import React from 'react';
import PropTypes from 'prop-types';

//fc
const PrimeraApp = ({ saludo }) =>{

    // const saludo = 'Hola Mundo';

    return(
        <>
            <h1>{ saludo }</h1>
            <p>Mi primera aplicación</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;