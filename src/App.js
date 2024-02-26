import './App.css';

function App() {
  const user = [
    { name: 'Saied', id: 2345, dob: "12-12-2001" },
    { name: 'Rohan', id: 5432, dob: "2-1-2002" },
    { name: 'Efti', id: 5234, dob: "8-1-2003" },
    { name: 'Leon', id: 46532, dob: "2-10-2000" },
    { name: 'Tanjil', id: 52345, dob: "4-1-2002" },
    { name: 'Fahim', id: 62435, dob: "15-2-2000" }
  ]
  return (
    <div className="App">
      <div style={{display: 'flex'}}>
      {
        user.map(d => <Person details={d} key={d.id}></Person>)
      }
      </div>
    </div>
  );
}

function Person(props) {
  const { name, id, dob } = props.details
  const sectionStyle = { border: '1ps solid grey', margin: "10px", padding: "10px",height: 'auto', width: '400px', borderRadius: '15px', boxShadow: "0px 0px 5px 5px lightgrey"}
  return (
    <div style={sectionStyle}>
      <h1>Name: {name}</h1>
      <h2>ID: {id}</h2>
      <p>Date of Birth: {dob}</p>
    </div>
  )
}
export default App;
