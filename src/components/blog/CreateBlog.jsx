import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_BACKEND_URL;

const CompCreateBlog = () => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const navigate = useNavigate();

   // procedimiento guardar
   const store = async event => {
      event.preventDefault();
      await axios.post(apiUrl, { title: title, content: content });
      navigate('/');
   };

   return (
      <div>
         <h3>Create Post</h3>
         <form onSubmit={store}>
            <div className="mb-3">
               <label className="form-label">Title</label>
               <input
                  value={title}
                  type="text"
                  onChange={e => setTitle(e.target.value)}
                  className="form-control"
               />
            </div>
            <div>
               <label className="form-label">Title</label>
               <textarea
                  value={content}
                  type="text"
                  onChange={e => setContent(e.target.value)}
                  className="form-control"
               />
            </div>
            <button type="submit" className="btn btn-primary">
               Store
            </button>
         </form>
      </div>
   );
};

export default CompCreateBlog;
