import React from 'react';
import {ReactComponent as CloseIcon} from '../../assets/images/icon-close.svg'


const Modal = ({title, isOpen, onToggle, children}) => {
    return(
        <div className={`c-modal fixed inset-0 h-full w-full overflow-auto flex flex-wrap justify-center items-start ${isOpen?'flex':'hidden'}`}>
            <div className='fixed inset-0 h-full w-full bg-gray-600 opacity-50 z-10'></div>
            <div className='bg-white inline-block py-16 px-16 mx-auto z-40 flex flex-wrap relative mt-40 top-0 left-0 w-full lg:w-6/12 rounded-md'>
                <div className="font-rubik py-10 border-b-1 border-gray-300 w-full flex items-center justify-between">
                   <div className="font-bold text-md lg:text-lg">{title}</div> 
                   <div className="font-bold cursor-pointer" onClick={onToggle}>
                       <CloseIcon/>
                   </div>
                </div>
                <div className='py-16  px-16 w-full'>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Modal