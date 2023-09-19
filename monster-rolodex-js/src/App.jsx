import { useEffect, useState } from "react";
import "./App.css";
import { CardList } from "./components/CardList";
import { SearchBox } from "./components/SearchBox";

/*Reminder, a component re render when a prop change, that is the arguments inside of a function
  when a state change to a value different from the previous one

  The equality that is compared on re rendering, is not the value, but the reference in memory
*/

const App = () => {
  const [searchField, setSearchField] = useState("a");
  const [monsters, setMonsters] = useState([]);
  const [title, setTitle] = useState("");
  // const [stringField, setStringField] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    async function fetchMonsters() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => resp.json())
        .then((json) => setMonsters(json));
    }

    fetchMonsters();
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters);

    console.log("effect is fired");
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  };

  // const onStringChange = (event) => {
  //   setStringField(event.target.value);
  // };

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>

      <SearchBox
        className={`monsters-search-box`}
        place="Search Monster"
        onChangeHandler={onSearchChange}
      />
      <br />
      <SearchBox
        className={`title-search-box`}
        onChangeHandler={onTitleChange}
        place="set title"
      />
      {/* <SearchBox
        className={`monsters-search-box`}
        place="Set String"
        onChangeHandler={onStringChange}
      /> */}

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

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
