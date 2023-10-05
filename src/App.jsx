import reactLogo from './assets/react.svg';

// importamos los componentes
import CompShowBlogs from './components/blog/ShowBlogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompCreateBlog from './components/blog/CreateBlog';
import CompEditBlog from './components/blog/EditBlog';

function App() {
   return (
      <div>
         <div className="bg">
            <a target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<CompShowBlogs />} />
               <Route path="/create" element={<CompCreateBlog />} />
               <Route path="/edit/:id" element={<CompEditBlog />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
