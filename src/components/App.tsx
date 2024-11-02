import { useEffect, useState } from 'react';
import './App.css';
import { getTodos, getUsers } from '../api/api';
import { IUser } from '../types/types';
import Main from './Main/main';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  
  useEffect(() => {
    const map = new Map();
    const usersList: IUser[] = [];

   Promise.all([getTodos(), getUsers()])
      .then(([todos, users]) => {
        if (users)
          users.forEach(element => {
            if (!map.has(element.id))
              map.set(element.id, 0)
          });

        if (todos)
          todos.forEach((element) => {
            if (map.has(element.userId))
              map.set(element.userId, map.get(element.userId) + 1);
          })

        users && users.forEach((element) => {
          const newUser: IUser = {
            ...element,
            count: map.get(element.id) 
          }
          usersList.push(newUser);
        })

        setUsers(usersList)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <Main users= {users}></Main>
  );
}

export default App;
