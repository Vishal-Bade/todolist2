import React, { useState } from "react";
import img from "../todo_img.png";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      alert("plzz Fill the data.");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setInputData("");
      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    const updateItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updateItems);
  };

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    // console.log(newEditItem);
    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
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
            {toggleSubmit ? (
              <span
                className="material-symbols-outlined add_btn"
                title="Add Item"
                onClick={addItem}
              >
                add
              </span>
            ) : (
              <span
                className="material-symbols-outlined edit_btn"
                title="Update Item"
                onClick={addItem}
              >
                edit
              </span>
            )}
          </div>

          <div className="showItems">
            {items.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.name}</h3>
                  <div className="todo-btn">
                    <span
                      className="material-symbols-outlined edit_btn"
                      title="Edit Item"
                      onClick={() => editItem(elem.id)}
                    >
                      edit
                    </span>
                    <span
                      className="material-symbols-outlined delete_btn"
                      title="Delete Item"
                      onClick={() => deleteItem(elem.id)}
                    >
                      delete
                    </span>
                  </div>
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
              <span> Remove </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
