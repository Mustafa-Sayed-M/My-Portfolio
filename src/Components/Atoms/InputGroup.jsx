import React from 'react';

function InputGroup({ label, ...attributes }) {
    return (
        <div className='input-group'>
            <label htmlFor={attributes.name}>{label}</label>
            <input
                {...attributes}
                className='p-3 mt-2 rounded-md w-full bg-transparent border border-purple-color placeholder:transition-opacity focus:placeholder:opacity-0'
            />
        </div>
    )
}

export default InputGroup;