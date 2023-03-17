import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ComentItems from "../ComomponetsDetails/ComentItems/index";

import "./index.css";

const ComentDetails = () => {
  const [name, setname] = useState("");
  const [comenttext, secomenttext] = useState("");
  const [commentList, setcomentList] = useState([]);

  const onsubmit = (event) => {
    event.preventDefault();
    const newcoment = {
      id: uuidv4(),
      name: name,
      comenttext: comenttext,
    };
    setname("");
    secomenttext("");

    setcomentList((previousState) => [...previousState, newcoment]);
  };

  const onchangeHander = (event) => {
    setname(event.target.value);
  };
  const onchangeComentHander = (event) => {
    secomenttext(event.target.value);
  };

  return (
    <div className="main_container">
      <form onSubmit={onsubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={onchangeHander}
          autoFocus="none"
        />
        <br />
        <br />
        <textarea
          name="text"
          rows="4"
          cols="50"
          value={comenttext}
          onChange={onchangeComentHander}
        ></textarea>
        <div>
          <button>submit</button>
        </div>
      </form>
      <div className="maping">
      {commentList.map(items=><ComentItems ComentDetails={items} key={items.id}/>)}
      </div>
    </div>
  );
};

export default ComentDetails;
