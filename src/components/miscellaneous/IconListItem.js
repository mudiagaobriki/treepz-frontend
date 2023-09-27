import React from 'react';
import Image from "next/image";

const IconListItem = ({text, imageURL, iconHeight=16, iconWidth=16}) => {
    return (
        <div className="d-flex align-items-center">
            <Image src={imageURL} alt="verified" height={iconHeight} width={iconWidth} />
            <span style={{fontSize: 14, color: '#6F7174', textDecoration: 'underline'}}>
                            {text}
                        </span>
        </div>
    );
};

export default IconListItem;