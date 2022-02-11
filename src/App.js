import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import UserCardList from './components/UserCardList';


function App() {
  
  const [users, setUsers] = useState([])

  const getUser = (userName) => {
    let params = encodeURIComponent(`${userName}`);
    let uri = `https://api.github.com/users/${params}`
    fetch(uri)
      .then(resp => resp.json())
      .then(json => {
        let newUser = {
          name: json.name,
          avatar: json.avatar_url,
          bio: json.bio
        }
        setUsers([...users, {...newUser}])
      })
  }

  return (
    <div className="App">
      <SearchForm getUser={getUser}/>
      <UserCardList users={users} />
    </div>
  );
}

export default App;
