import React from 'react';

const TitleText = ({text, mb}) => {
    return (
        <h1 className="text-center" style={{fontSize: 40, fontWeight: 500, marginBottom: mb}}>
            {text}
        </h1>
    );
};

export default TitleText;