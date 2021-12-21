import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import Card from '../../components/card';

const UserLists = ({data}) => {
    const {state, dispatch} = useContext(AppContext)
    const onSelectUser = (user) => {
       dispatch({selectedUser: user})
    }
    
    return(
        <div className="py-24 border-t-1 border-gray-100 px-16">
            <h2 className='font-bold uppercase font-rubik text-lg mb-10'>Users</h2>
            {/* <ExchangeRates/> */}
            <div className="flex flex-wrap -mx-16">
                {data.map((obj,i)=>{
                    return (
                        <div className={`w-full sm:w-3/12 lg:w-2/12 px-16 mb-16 `} key={obj.id} onClick={()=>onSelectUser(obj)}>
                            <Card id={obj.id} name={obj.name} url={obj.url} avatarUrl={obj.avatarUrl} isSelected={state.selectedUser?.id === obj.id} /> 
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}
export default UserLists;