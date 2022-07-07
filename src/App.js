// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import "./App.css";
import ToDoLists from "./ToDoLists";

const App = () => {
  const [InputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const ItemEvnet = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    if (InputList === "") {
      console.error("err");
      alert("Enter Something");
    }
    else {
      setItems((oldItems) => {
        return [...oldItems, InputList];
      });
      setInputList("");
    }
  };

  const deleteItems = (id) => {
    console.log("Deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a items" onChange={ItemEvnet} />
          <button onClick={listOfItems}>+</button>
          <ol>
            {/* <li>{inputList}</li> */}
            {Items.map((itemval, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
