
import React, { useState } from 'react';
import Input from '../../components/input';
import Textarea from '../../components/textarera';
const IssueForm = () => {
    const [formData, setFormData] = useState({
        title:'',
        description:'',
        errors:{}
    })

    const onInputChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const validation = () => {
        const _errors = {}
        if(!formData.title) _errors.title="Please enter a title";
        if(!formData.description) _errors.description="Please enter a description";
        setFormData({...formData, errors:_errors})
        return _errors;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const validationErrors = validation()
        if(!Object.keys(validationErrors).length){
            alert("Return")
            return false
        }
        return false
    }
    return(
    <div className='w-full'>
        <form  onSubmit={handleFormSubmit}>
            <Input type="text" name="title" placeholder="Enter title" label="Issue Title" error={formData.errors?.title} value={formData.title} onChange={onInputChange}/>
            <Textarea name="description" rows="5" placeholder="Enter Description" label="Issue Description" error={formData.errors?.description} value={formData.description} onChange={onInputChange}/>
            <button type="submit" className='bg-blue-300 py-10 px-16 text-white rounded-sm text-sm hover:bg-blue-400'>Submit</button>
       </form>
    </div>)
}
export default IssueForm