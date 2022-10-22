import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Go back to <Link to='/signup'>Signup</Link></p>
        </div>
    );
};

export default TermsAndConditions;