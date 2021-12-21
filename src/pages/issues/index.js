import React, { useContext, useEffect,useState } from 'react';
import {ReactComponent as BackIcon} from '../../assets/images/icon-arrow-left.svg'
import { AppContext } from '../../context/appContext';
import { FETCH_ISSUES } from '../../graphql/queries';
import { useLazyQuery } from '@apollo/client';
import moment from 'moment'
import Modal from '../../components/modal';
import IssueForm from './issueForm';
const IssuesPage = () => {
    const { state,dispatch } = useContext(AppContext);
    const [issueModalActive, setIssueModalActive] = useState(false)
    const getUserIdFromUrl = state.selectedUser?.url.substring(state.selectedUser?.url.lastIndexOf('/')+1)
    const perPage=100
    const [executeMyQuery, { data: queryData, loading, error }] = useLazyQuery(FETCH_ISSUES);
    const [data, setData] = useState([])
    const onBackClick = () => {
        dispatch({selectedRepository:null})
    }
    useEffect(()=>{
        executeMyQuery({
            variables: { owner: getUserIdFromUrl, name:state.selectedRepository.name, first: perPage, last: null,  after: null, before:null, states: "OPEN"}
        })
    },[executeMyQuery, getUserIdFromUrl, state.selectedRepository.name])

    useEffect(()=>{
        setData(queryData?.repository.issues.edges)
    },[queryData])

    const getUsernameFromUrl = (url) => {
        return url.substring(url.lastIndexOf('/')+1)
    }

    const onIssueModalToggle = () => {
        setIssueModalActive(!issueModalActive)
    }
    
 
    return(
        <>
            <div className='container mx-auto px-16'>
                
                <div className='mb-32 py-10 flex items-center  cursor-pointer' onClick={onBackClick}>
                    <BackIcon className="mr-10"/>
                    Go Back
                </div>
                <div className='w-full'>
                    <h4 className='text-gray-400 text-sm text-center'>Repository</h4>
                    <h2 className='font-bold text-blue-400 text-xl text-center'>{state.selectedRepository.name}</h2>
                    
                    <div className='flex items-center justify-between border-b-1 border-gray-100 pb-16'>
                        <h2 className="font-bold text-lg">Open Issues</h2>
                        <button type="button" className="border-1 border-gray-400 py-10 px-16 inline-block text-xs hover:bg-gray-500 hover:text-white" onClick={onIssueModalToggle}>Add Issue</button>
                    </div>
                    {loading && "Loading..."}
                    {error && "Error..."}
                    {!loading && !error && 
                        <div className=''>
                            {data && data.map((issue)=>{
                                return(
                                    <div className="flex items-center -mx-16" key={issue.node.id}>
                                        <div className="px-16 w-full">
                                            <div className='flex justify-between py-10 border-b-1 border-gray-100 text-sm'>
                                                <div className="font-medium  ">{issue.node.title}</div>
                                                <div className="font-light">
                                                    {moment(issue.node.createdAt).fromNow()} by 
                                                    <a href={issue.node.author?.url} target="_blank" rel="noreferrer"> {getUsernameFromUrl(issue.node.author?.url)} </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        
                        </div>
                    }
                    {data && data.length === 0 && "No Issues Found"}
                </div>
            </div>
            <Modal title="New Issue" isOpen={issueModalActive} onToggle={onIssueModalToggle}>
                <IssueForm/>
            </Modal>
        </>
    )
}

export default IssuesPage

