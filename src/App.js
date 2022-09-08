
import './App.css';
import BlogList from './components/BlogList';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BlogContextProvider from './context/BlogContext';
import BlogForm from './components/BlogForm';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <div className="App">
    <BlogContextProvider>
    <BrowserRouter>
    <Routes>
      
      <Route exact path="/" element={<BlogList />} />
      <Route path="/addblog" element={<BlogForm />}/>
      <Route path="/blog/:id" element={<BlogDetails />} />
    </Routes>
  </BrowserRouter>
  </BlogContextProvider>
    </div>
  );
}

export default App;
