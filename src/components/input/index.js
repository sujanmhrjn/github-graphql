import React from 'react';

const Input = ({type, name, value, error, label, placeholder, onChange}) => {
    return(
    <div className='mb-16'>
        <label htmlFor={`input_${name}`} className='text-sm text-gray-500 font-rubik block'>{label}</label>
        <input type={type} name={name} value={value} placeholder={placeholder} className="font-rubik py-10 px-16 font-sm border-1 border-gray-200 w-full rounded-sm" onChange={onChange}/>
        {error&&<p className='text-red-300 text-sm'>{error}</p>}
    </div>
    )
}
export default Input