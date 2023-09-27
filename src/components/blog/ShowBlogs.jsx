import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_BACKEND_URL;

const CompShowBlogs = () => {
   const [blogs, setBlogs] = useState([]);
   useEffect(() => {
      getBlogs();
   }, []);

   // Procedimiento para mostrar todos los blogs
   const getBlogs = async () => {
      const res = await axios.get(apiUrl);
      setBlogs(res.data);
   };

   // procedimiento para eliminar
   const deleteBlog = async id => {
      await axios.delete(`${apiUrl}${id}`);
      getBlogs();
   };

   return (
      <div className="container">
         <div className="row">
            <div className="col">
               <Link to={'/create'} className="btn btn-primary mb-2 mt-2">
                  <i className="fa-solid fa-circle-plus"></i>
               </Link>
               <table className="table">
                  <thead className="table-primary">
                     <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     {blogs.map(value => (
                        <tr key={value.id}>
                           <td>{value.title}</td>
                           <td>{value.content}</td>
                           <td>
                              <Link
                                 to={`/edit/${value.id}`}
                                 className="btn btn-info"
                              >
                                 <i className="fa-solid fa-pen"></i>
                              </Link>
                              <button
                                 onClick={() => deleteBlog(value.id)}
                                 className="btn btn-danger"
                              >
                                 <i className="fa-solid fa-trash"></i>
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default CompShowBlogs;
