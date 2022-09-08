import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'



export const BlogContext = createContext();

const BlogContextProvider = (props) => {

    const [loading, setLoading] = useState(true)
    const [blogList, setBlogList] = useState('')

    const api = 'https://jsonplaceholder.typicode.com/posts'
    useEffect(() => {
        setLoading(true)
        const fetchBlog = async () => {
            try {
                const blogResponse = await axios.get(api);
                setBlogList(blogResponse.data)
                console.log(blogResponse)
                
            } catch (error) {
                console.error(error)
            }
        }
        fetchBlog();
        // setLoading(false);
        console?.log(blogList)
}, [])


  return (
    <BlogContext.Provider value={{blogList}}>
      {props.children}
    </BlogContext.Provider>
  );
}

export default BlogContextProvider;
