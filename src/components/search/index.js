import React from 'react'

const SearchForm = ({onSearch,search}) => {
    const onInputChange = (e) => {
        onSearch(e.target.value)
    }
    return(
        <div className='flex justify-center mb-24'>
            <div className='w-full lg:w-8/12 px-10'>
                <div className='-mx-10 flex flex-wrap'>
                    <div className="px-10 w-full lg:w-8/12 relative">
                        <input type="text" name="search" className='border-1 border-gray-200 text-sm lg:text-md py-10 px-16 rounded-sm w-full' placeholder="Enter search keyword" onChange={onInputChange} value={search}/>
                    </div>
                    <div className="px-10 w-full lg:w-4/12 ">
                        <button type="submit"  className="bg-blue-300 text-white block py-10 px-16 rounded-sm text-sm hover:bg-blue-400">Search</button>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default SearchForm