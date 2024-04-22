import React from 'react'
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'


const ListEmployeeComponent= ()=>{

    const [post, setPost] = useState([]);
    
    const navigator= useNavigate();
    useEffect(() => {
       const fetchData= async()=>{
        try{
            const response= await fetch('http://127.0.0.1:8080/api/posts/get')
            const data= await response.json();
            setPost(data.contents);
        }catch(error){
            console.error('There was an error', error);
        }
       }
       fetchData();
      }
      
      , []);


function addNewEmployee(){
    navigator('/add-posts')
}
  return (
    <div className= 'container'>
        <h2>List of Posts</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Post</button>
        
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Post Id</th>
                    <th>Post Title</th>
                    <th>Post Content</th>
                    <th>Post Description</th>
                </tr>
            </thead>
            <tbody>
                {
                   post&& post.map((item) =>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title} </td>
                        <td>{item.content} </td>
                        <td>{item.description} </td>
                    </tr>)
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default ListEmployeeComponent;