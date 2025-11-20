import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [form, setFrom] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const onChange = (e) =>{
    const {name, value} = e.target;
    setFrom({
      ...form,
      [name]: value
    })
  }

  const handelSubmit = async (e) => {
      e.preventDefault();
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts",form);
      console.log(res.data);
      setFrom({
         userId: "",
    title: "",
    body: "",
      })
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label>UserID</label>
        <input
          onChange={onChange}
          className="bg-red-200"
          type="text"
          name="userId"
          value={form.userId}
        />

        <label>title</label>
        <input
          onChange={onChange}
          className="bg-red-200"
          type="text"
          name="title"
          value={form.title}
        />

        <label>body</label>
        <input
          onChange={onChange}
          className="bg-red-200"
          type="text"
          name="body"
          value={form.body}
        />

        <button type="submit" className="bg-green-600 px-4 ">
          submit
        </button>
      </form>
    </div>
  );
};

export default App;
