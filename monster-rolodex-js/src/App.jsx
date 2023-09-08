import React from "react";
import "./App.css";

/*In this case the lifecycle is: first the constructor, than the return and then the component did mount func then
component did mount updates the state and the it is re rendered */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component did mount"); // Everything a new component mounts
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("Render");

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="Search Monsters"
          onChange={(e) => {
            const searchField = e.target.value.toLowerCase()
             this.setState(() => {
              return { searchField} 
             }, () => {
              console.log({endingArray: this.state.monsters})
             })
          }}
        />

        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}

        <button onClick></button>
      </div>
    );
  }
}

export default App;
