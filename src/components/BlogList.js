import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {IoMdAdd} from 'react-icons/io'
import { BlogContext } from '../context/BlogContext'
import { Link } from 'react-router-dom'



const BlogList = () => {
   

    const {blogList} = useContext(BlogContext)

  

  return (
    <div>
        <h1><span style={{color: 'orange'}}>GDL</span> Blog Posts</h1>
    <Bdiv>
        {blogList && blogList.map(blog =>  (
            <Link key={blog.id} to={`blog/${blog.id}`}>
                <Div>
                    <div>
                    <h1>{blog.title}</h1>
                    <p>{blog.body.split('').splice(0, 20).join('')}...</p>
                    </div>
                    <p style={{textAlign: 'right', color:'orange'}}>User {blog.userId}</p>
                </Div>
                </Link>
            )
        )}
        <Link to="/addBlog"><AddBlog>
            <IoMdAdd />
        </AddBlog>
        </Link>
    </Bdiv>
    </div>
  )
}

export default BlogList

const Bdiv = styled.div`
    display: grid;
    gap: 0.9rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 5rem 10%;
    a {
        text-decoration: none;
        color: white;
    }
`;

const Div = styled.div`
    margin: 0 auto;
    background:  #292d30;
    width: 100%;
    border-radius: 2.5rem 1rem 3.2rem 4rem;
    padding: 1rem 2rem;
    box-sizing: border-box;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border-top: 0.5px solid orange */
    h1 {
        font-size: 1.6rem;
        
    }
    p {
        font-size: 1.2rem;
    }
   
`;
const AddBlog = styled.div`
    font-size: 3rem;
    position: fixed;
    bottom: 5rem;
    right: 8rem;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    color: white;
    border-radius: 50%;
`;