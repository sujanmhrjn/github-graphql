import React from 'react';
import {ReactComponent as ArrowLeft} from '../../assets/images/icon-arrow-left.svg'
import {ReactComponent as ArrowRight} from '../../assets/images/icon-arrow-right.svg'
const Pagination = () => {
    return(<div className="">
        <div className="flex items-center justify-center">
            <div className="inline-block p-16 bg-gray-100 relative cursor-pointer  mr-4 rounded-sm">
                <div className="absolute inset-0 flex items-center justify-center opacity-50 p-10">
                    <ArrowLeft/>
                </div>
            </div>
            {[...Array(8)].map((item,i )=> {
               return (
                   <div className="p-16 mx-2 relative" key={"Pagination-"+(i+1)}>
                        <div className={`text-sm border-1 border-gray-300 absolute inset-0 flex justify-center items-center h-full w-full cursor-pointer  rounded-sm ${i==0?'bg-blue-300 text-white border-blue-300':''}`}>{i}</div>
                   </div>
               )
            })}
            <div className="inline-block p-16 bg-gray-100 relative cursor-pointer ml-4 rounded-sm">
                <div className="absolute inset-0 flex items-center justify-center opacity-50  p-10">
                    <ArrowRight/>
                </div>
            </div>
        </div>
    </div>)
}
export default Pagination