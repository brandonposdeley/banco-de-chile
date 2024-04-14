/* eslint-disable react/prop-types */
import React from 'react';

import '../../index.css';

function Card({
    title,
    children,
}) {
    return (
        <div className="flex-1 bg-white p-4 text-gray-600 max-h-96 overflow-hidden rounded-lg border border-gray-300">
           {title ? (
            <h2 className="text-base font-medium mb-2">{`${title}`}</h2>
           ) : null}
           <div className="scroll overflow-y-scroll h-80">
              {children}
           </div>
        </div>
    )
}

export default Card;