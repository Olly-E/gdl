import axios from 'axios'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';


const BlogForm = () => {

  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState('');
  const [body, setBody] = useState('');
  const [id, setId] =  useState('')
  const navigate = useNavigate();
    

 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({title, userId, body})

    axios.post('https://jsonplaceholder.typicode.com/posts', {
    id: title, title, userId, body
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  navigate('/')
  }

  return (
    <FormContainer>
      <Forms onSubmit={handleSubmit}>
        <div>
        <input type="text" placeholder="Enter blog title"  vaue={title}  onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder="Enter user id" value={userId} onChange={(e) => setUserId(e.target.value)}/>
        <textarea name="" id="" cols="30" rows="10" resize="none" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <button>Submit</button>
      </Forms>

      <Link to="/"><button>back</button></Link>
    </FormContainer>
  );
}

export default BlogForm;


const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

button{
  color: black;
    width: 8rem;
    height: 2.5rem;
    background: orange;
    border-radius: 0.4rem;
    box-shadow: 0px 24px 34px rgba(32, 70, 100, 0.1);
    border: none;
    margin-top: 3rem;
}

`


const Forms = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  background: black;
  padding: 2.5rem 2rem;
  border-radius: 2rem;
  height: fit-content;
  width: 30%;
 margin-top: 3rem;
  box-sizing: border-box;
  align-items: left;
  background:  #292d30;


  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    

  }
  input {
    height: 3rem;
    top: 0;
    border-radius: 0.5rem;
    outline: none;
    background:black;
    color: white;
    padding-left: 0.5rem;
  }
  textarea {
    border: 1px solid #0A142F;
    resize: none;
    outline: none;
    height: 15rem;
    border-radius: 0.5rem;
    background: black;
    color: white;
  }
  button {
    color: black;
    width: 8rem;
    height: 2.5rem;
    background: orange;
    border-radius: 0.4rem;
    box-shadow: 0px 24px 34px rgba(32, 70, 100, 0.1);
    border: none;
    margin-top: 3rem;
  }
`;
