import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSignIn,...otherProps}) => (
        <button className={ `custom-button${isGoogleSignIn ? '-v2' : ''}`} {...otherProps}>
        {children}
        </button>
)

export default CustomButton;