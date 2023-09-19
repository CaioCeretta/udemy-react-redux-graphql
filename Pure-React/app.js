const Person = props => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('p', {}, props.occupation)
  ])
}

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {'className': 'title'}, "React IS rendered"), 
    React.createElement(Person, {name: 'Caio', occupation: 'student'}, null),
    React.createElement(Person, {name: 'Bruno', occupation: 'God'}, null),
    React.createElement(Person, {name: 'Alex', occupation: '.Net Developer'}, null)

  ])
}

// ReactDOM.render(React.createElement(App), document.getElementById('root'))

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

