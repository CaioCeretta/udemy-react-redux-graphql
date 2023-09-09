import React from "react";
import "./App.css";
import { CardList } from "./components/CardList";
import { SearchBox } from "./components/SearchBox";

const App = () => {
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
{/* 
      //         <SearchBox
//           className={`monsters-search-box`}
//           place="Search Monster"
//           onChangeHandler={onSearchChange}
//         /> 

//         <CardList monsters={filteredMonsters}/> */}

    </div>
  )
}

export default App

/*In this case the lifecycle is: first the constructor, than the return and then the component did mount func then
component did mount updates the state and the it is re rendered */
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//     // console.log("Constructor");
//   }

//   componentDidMount() {
//     // console.log("Component did mount"); // Everything a new component mounts
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             // console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render() {
//     // console.log("Render");
//     const { onSearchChange } = this
//     const filteredMonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(this.state.searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className={`monsters-search-box`}
//           place="Search Monster"
//           onChangeHandler={onSearchChange}
//         /> 

//         {/* {filteredMonsters.map((monster) => {
//           return <h1 key={monster.id}>{monster.name}</h1>;
//         })} */}

//         <CardList monsters={filteredMonsters}/>

//         <button onClick></button>
//       </div>
//     );
//   }
// }

// export default App;
