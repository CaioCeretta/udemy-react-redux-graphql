// import React from "react";
// import "./App.css";
// import reactLogo from "./assets/react.svg";

// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       name: {firstName: 'Caio', lastName: 'Ceretta'},
//       company: 'lá'
//     }

//   }

  


//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <a href="https://react.dev" target="_blank" rel="noreferrer">
//             <img src={reactLogo} className="logo react" alt="React logo" />
//           </a>
//           <p>Hi, i'm {this.state.name.firstName} {this.state.name.lastName} and i work at {this.state.company}</p>

//           {/* setState receives two parameters, one is a cb function that handles the state and the second one is what
//           happens after it */}
//           <button onClick={(e) => {
//             this.setState((state, props) => {
//               return {
//                 name: {firstName: 'pilipipili', lastName: 'plupluplu'}
//               }
//             }, () => {
//               console.log(this.state)
//             })
            
//           }
//           }>Change Name</button>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
