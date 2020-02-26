import React from 'react';
import ButtonBackToHome from '../components/ButtonBackToHome';

const NotFound = () => (
    <div>
        <ButtonBackToHome/>
        <h1 className='title'>404!</h1>
        <h2 className='subtitle'>No existe la página</h2>
    </div>
)

export default NotFound;