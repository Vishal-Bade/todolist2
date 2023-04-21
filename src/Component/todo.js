import React, { useState } from "react";
import img from "../todo_img.png";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    const updateItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updateItems);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure className="fig_div">
            <img className="img_div" src={img} alt="todo_img" />
            <figcaption>Add Your List Here</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <span
              className="material-symbols-outlined add_btn"
              title="Add Item"
              onClick={addItem}
            >
              add
            </span>
          </div>

          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{elem}</h3>
                  <span
                    className="material-symbols-outlined deleteItem"
                    title="Delete Item"
                    onClick={() => deleteItem(ind)}
                  >
                    delete
                  </span>
                </div>
              );
            })}
          </div>

          {/* clear all button */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              title="Remove All"
              onClick={() => setItems([])}
            >
              <span> REMOVE ALL </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
