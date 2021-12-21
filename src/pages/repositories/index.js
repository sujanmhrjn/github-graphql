import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import {ReactComponent as BackIcon} from '../../assets/images/icon-arrow-left.svg'
import RepositoriesList from './list';

const UserPage = () => {
    const { state,dispatch } = useContext(AppContext);
    const onBackClick = () => {
        dispatch({selectedUser:null})
    }
    const user = state.selectedUser
    if(!user) return ''
    return(
        <div className='container mx-auto px-16'>
            <div className='mb-32 py-10 flex items-center  cursor-pointer' onClick={onBackClick}>
                <BackIcon className="mr-10"/>
                Go Back
            </div>
            <div className='-mx-16 flex flex-wrap'>
                <div className='w-full lg:w-2/12 px-16'>
                    <img src={user.avatarUrl} width="200" className='mb-10 border-1 border-gray-300 rounded-sm'/>
                    <h2 className='font-bold'>{user.name}</h2>
                    <a href={user.url} target="_blank" rel="noreferrer" className='text-sm hover:text-red-300'>View Github Profile</a>
                </div>
                <div className="w-full lg:w-10/12 px-16">
                    <RepositoriesList/>
                </div>
            </div>
        </div>
    )
}

export default UserPage