import React, { useState } from 'react'
import { createPost } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

  const [title, setTitle]= useState('')
  const[content, setContent]= useState('')
  const[description, setDescription]= useState('')

  const navigator= useNavigate();

  const[errors, setErrors]= useState({
    title: '',
    content: '',
    description: ''
  })

  function savePost(event){
    event.preventDefault();

    if(validateForm()){
      const post= {title, content, description}
      console.log(post)

      createPost(post).then((response)=>{
        console.log(response.data);
        navigator('/posts')
      })
    }    
  }

  function validateForm(){
    let valid= true;

    const errorsCopy= {... errors};
    if(title.trim()){
      errorsCopy.title='';
    }else{
      errorsCopy.title='title is required'
      valid=  false;
    }
    if(content.trim()){
      errorsCopy.content='';
    }else{
      errorsCopy.content='title is required'
      valid=  false;
    }
    if(description.trim()){
      errorsCopy.description='';
    }else{
      errorsCopy.description='title is required'
      valid=  false;
    }
    setErrors(errorsCopy);

    return valid;
  }

  return (
    <div className='container'>
      <br /><br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add Post</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Title</label>
                <input 
                  type="text"
                  placeholder='Enter Post Title'
                  name="title"
                  value={title} 
                  className={`form-control ${errors.title ? 'is-invalid': '' }`}
                  onChange={(event)=> setTitle(event.target.value)}/>
                  {errors.title && <div className='invalid-feedback'>{errors.title}</div>}
              </div>
            

              <div className='form-group mb-2'>
                <label className='form-label'>Content</label>
                <input 
                  type="text"
                  placeholder='Enter Post Content'
                  name="content"
                  value={content} 
                  className={`form-control ${errors.content ? 'is-invalid': '' }`}
                  onChange={(event)=> setContent(event.target.value)}/>
                  {errors.content && <div className='invalid-feedback'>{errors.content}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Description</label>
                <input 
                  type="text"
                  placeholder='Enter Description Title'
                  name="description"
                  value={description} 
                  className={`form-control ${errors.description ? 'is-invalid': '' }`}
                  onChange={(event)=> setDescription(event.target.value)}/>
                  {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
              </div>
              <button className='btn btn-success' onClick={savePost}>Submit</button>
            </form>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default EmployeeComponent