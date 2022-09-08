import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BlogContext } from '../context/BlogContext'




const BlogDetails = () => {
  const {blogList} = useContext(BlogContext);
  const [status, setStatus] = useState('')
  

    
  const { id } = useParams();
  const ise = id - 1;
  return (
 blogList &&<Div>
    <h1>Blog Details for blog{id}</h1>
    <h1>{blogList[ise].title}</h1>
    <p>{blogList[ise].body}</p>
    <Link to="/"><button>back</button></Link>
 </Div>
  )
}

export default BlogDetails

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button{
  color: black;
    width: 8rem;
    height: 2.5rem;
    background: orange;
    border-radius: 0.4rem;
    box-shadow: 0px 24px 34px rgba(32, 70, 100, 0.1);
    border: none;
    margin-top: 3rem;
    font-size: 1.1rem;
    font-weight: bold;
}
`;