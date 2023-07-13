import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users/Users';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  const onChangeSearchValue = event => {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(json => setUsers(json.data))
      .catch(error => {
        console.warn(error);
        alert('Error receiving data');
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onClickInvite = userId => {
    return invites.includes(userId)
      ? setInvites(prevUsers => prevUsers.filter(id => id !== userId))
      : setInvites(prevUsers => [...prevUsers, userId])
  }

  const onClickSendInvites = () => {
    setSuccess(true);
  }

  return (
    <div className="App">
      {success 
        ? <Success count={invites.length}/>
        : <Users 
          onClickSendInvites={onClickSendInvites}
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue} 
          items={users} 
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
        />
      }
    </div>
  );
}

export default App;
