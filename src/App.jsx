import React, { useEffect } from 'react';

import Users from './Users';

import './App.css';

function App() {
  const [persons, setPersons] = React.useState([])
  const [loading, setLoading] = React.useState(true)


  useEffect(() => {
    fetch(`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
      .then(function (response) {
        response.json()
      .then(function(data) {
        setLoading(false)
        setPersons(data)
    })
  })
  }, [setPersons]);

  return (
    <div className="App">

    {

      loading ? <div>Получение данных...</div> : <Users persons={persons} />

    }

    </div>
  );
}

export default App;
