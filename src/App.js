import logo from './logo.svg';
import './App.css';

function App() {
  const user = [
    {name: 'Saied', id: 2220144, dob:"12-12-2001"},
    {name: 'Rohan', id: 2230144, dob:"2-1-2002"},
    {name: 'Fahim', id: 2210144, dob:"1-2-2000"}
  ]
  return (
    <div>
      {
        user.map(d => <Person details= {d}></Person>)
      }
    </div>
  );
}

function Person(props){
  const {name, id, dob} = props.details
  return(
    <div style={{border: '1ps solid grey', margin: "10px", padding: "5px", backgroundColor: 'lightgrey'}}>
      <h1>Name: {name}</h1>
      <h2>Id; {id}</h2>
      <p>Date of Birth: {dob}</p>
    </div>
  )
}
export default App;
