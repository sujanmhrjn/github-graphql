import React from 'react';
const Card = ({id, avatarUrl, name, url,isSelected}) => {
    return(
        <div className={`shadow shadow-sm hover:shadow-lg transition-all duration-500 ease border-1  rounded-sm overflow-hidden h-full cursor-pointer ${isSelected?'border-blue-300':'border-white '}`}>
            <div className='w-full relative'>
     
                <img src={avatarUrl} alt={name} className="w-full object-cover object-center"/>
            </div>
            <div className={`font-medium text-sm p-10 ${isSelected?'bg-blue-300 text-white':''}`}>
                {name}
            </div>
        </div>
    )
}
export default Card