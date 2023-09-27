import React from 'react';

const SubtitleText = ({text, mb}) => {
    return (
        <h1 className="text-center" style={{fontSize: 20, fontWeight: 400, marginBottom: mb}}>
            {text}
        </h1>
    );
};

export default SubtitleText;