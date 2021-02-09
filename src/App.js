import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [name, setname] = useState([]);
  const [gender, setgender] = useState([]);
  const [age, setage] = useState([]);

  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");

    //const { name, gender, age } = this.state;
    //localStorage.setItem('gender', gender);
    //localStorage.setItem('name', name ? name : '');
    //localStorage.setItem('age', age);
  }, []);

  return (
    <form onSubmit={this.useEffect}>
      <div className="card" style={{ width: 400 }}>
        <div className="card-content">
          <p className="is-4 title has-text-centered">Add Pet</p>
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input"
              type="text"
              placeholder="e.q Coco"
              //update related state based on event
            ></input>
          </div>

          <div className="field">
            <label className="label">Gender</label>
            <select
              className="input"
              type="text"
              placeholder="Please select .."
            >
              <option value="" disabled selected hidden>
                -- Select Gender --
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="field">
            <label className="label">Age</label>
            <input className="input" type="number" placeholder="e.q 5"></input>
          </div>

          <button className="button is-danger is-fullwidth">Submit</button>

          <div className="mb-4"></div>

          {/* display tables for all persons */}
          <p className="is-4 title has-text-centered">Pet List</p>
          {/* sample table */}
          <ItemTable
            name={ItemTable.name}
            gender={ItemTable.gender}
            age={ItemTable.age}
          />
          <p>Chanathip Songchanthuek 620612145</p>
        </div>
      </div>
    </form>
  );
}

export default App;
