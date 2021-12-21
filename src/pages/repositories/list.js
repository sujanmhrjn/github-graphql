import React, { useContext, useEffect,useState } from 'react';
import { AppContext } from '../../context/appContext';

import { useLazyQuery } from '@apollo/client';
import { FETCH_REPOSITORIES } from '../../graphql/queries';
// import ReactPaginate from 'react-paginate';
import {ReactComponent as Prev} from '../../assets/images/icon-arrow-left.svg'
import {ReactComponent as Next} from '../../assets/images/icon-arrow-right.svg'

const RepositoriesList = () => {
    const {state, dispatch} = useContext(AppContext)
    const getUserIdFromUrl = state.selectedUser?.url.substring(state.selectedUser?.url.lastIndexOf('/')+1)
    const [executeMyQuery, { data: queryData, loading, error, fetchMore, previousData }] = useLazyQuery(FETCH_REPOSITORIES);
    const [repositories, setRepositories] = useState([])
    const [totalPageCount, setTotalPageCount] = useState(0)
    const perPage = 10
    useEffect(()=>{
        executeMyQuery({
            variables: { login: getUserIdFromUrl, first: perPage, last: null,  after: null, before:null, isFork: false, ownerAffiliations: "OWNER"}
        })
    },[getUserIdFromUrl])

    useEffect(()=>{
        setRepositories(queryData?.user.repositories.edges)
        // setTotalPageCount(Math.ceil(queryData?.user.repositories.totalCount / 10))
    },[queryData])


    const updateQuery = (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }
        return fetchMoreResult
      };

    const onRepoClick = (repo) => {
        dispatch({selectedRepository: repo})
    }

    if(loading) return "loading..."

    return(
        <div className="w-full">
            <h2 className='font-bold uppercase font-rubik text-lg mb-10'>Repositories</h2>

            <div className="mb-32">
                {repositories && repositories.map((repo,i)=>{
                    return (
                        <div className={`flex items-center justify-between py-6 px-10 border-b-1 border-gray-100 font-rubik font-light ${(i+1) % 2?'bg-gray-50':''}`} key={"repo-"+i} onClick={()=>onRepoClick(repo.node)}>
                            {/* <p className="text-gray-600 font-normal"><a href={repo.url} target="_blank" rel="noreferrer" className='text-gray-500 hover:underline'>{repo.node.name}</a></p> */}
                            <p className="text-gray-600 font-normal cursor-pointer">{repo.node.name}</p>
                            <p className="text-gray-600 font-normal cursor-pointer">{repo.node.nameWithOwner}</p>
                            <p className="text-gray-600">{repo.node.stargazerCount} stars/ {repo.node.watchers.totalCount} watching</p>
                        </div>
                    )
                })}
                
            </div>

            {/* pagination */}
            <div className='flex items-center justify-center'>

            {
               queryData && queryData.user.repositories.pageInfo.hasPreviousPage && 
        
                <button className='bg-white border-1 border-gray-200 p-2 mx-10 rounded-sm' onClick={() =>
                    fetchMore({
                    variables: {
                        before:
                        queryData.user.repositories.pageInfo.startCursor,
                        last: perPage,
                        first: null
                    },
                    updateQuery,
                    })
                }><div className="p-8"><Prev className="opacity-50 hover:opacity-100"/></div></button>
            }
            {
               queryData && queryData.user.repositories.pageInfo.hasNextPage && 
                <button className='bg-white border-1 border-gray-200 p-2 mx-10 rounded-sm'  onClick={() =>{
                    console.log(queryData.user.repositories.pageInfo.startCursor,queryData.user.repositories.pageInfo.endCursor, previousData)
                    fetchMore({
                    variables: {
                        after:
                        queryData.user.repositories.pageInfo.endCursor,
                    },
                    updateQuery,
                    })
                }}><div className="p-8"><Next className="opacity-50 hover:opacity-100"/></div></button>
            }

            </div>

        </div>
    )
}
export default RepositoriesList