// import logo from './logo.svg';
import React from 'react'
// import './App.css';
import {RezForm, RezList, RezMenu, RezTab} from 'rez-utils'

function App() {
  const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

  return (
    <div className="App">
     <RezList columns={columns} data={data}/>
     <RezForm/>
     <RezMenu/>
     <RezTab/>
    </div>
  );
}

export default App;
