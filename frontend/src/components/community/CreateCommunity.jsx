import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom'


export const CreateCommunity = () => {

    const initialState = {
      id: null,
      title: "",
      text: "",
    };

    const [community, setCommunity] = useState(initialState);
    const history = useHistory();

    const onChangeInput = event => {
      const { name, value } = event.target;
      setCommunity({ ...community, [name]: value });
    };

    const save = () => {
      const data = {
        title: community.title,
        text: community.text
      };

      axios.post('http://localhost:8000/api/communities', data, {
        headers: JSON.parse(localStorage.user),
      })
        .then(res => {
        console.log(res.data);
        history.push('/IndexCommunity');
      })
    .catch(e => {
      console.log(e)
    })
  };


  return (
    <div className="submit-form">
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={community.title}
              onChange={onChangeInput}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="text">text</label>
            <input
              type="text"
              className="form-control"
              id="text"
              required
              value={community.text}
              onChange={onChangeInput}
              name="text"
            />
          </div>

          <button onClick={save} className="btn btn-success">
            Submit
          </button>
        </div>
    </div>
  );
};
