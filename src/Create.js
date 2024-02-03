import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setbody ] = useState('');
    const [ author, setAuthor ] = useState('deepak');
    const [ isPending, setIsPending ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, author };

      setIsPending(true);

      fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        console.log('new blog added');
        setIsPending(false);
        // navigate(-1);          // go to one step previous on webpage
        navigate('/');
      })
    }

    return (
      <div className="create">
        <h2>Add a New Blog Buddy...!</h2>
        <form onSubmit={ handleSubmit }>
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={ title }
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            required
            value={ body }
            onChange={(e) => setbody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <select
            values={ author }
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="deepak">deepak</option>
            <option value="vijay">vijay</option>
            <option value="kabilan">kabilan</option>
          </select>
          { !isPending && <button>Add Blog</button> }
          { isPending && <button disabled>Adding blog...</button> }

        </form>
      </div>
    );
  }
   
  export default Create;