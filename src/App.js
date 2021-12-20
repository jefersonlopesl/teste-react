import React, {useState} from 'react';

import Tasks from './components/Tasks.js'
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      tittle: 'Ler Livro',
      complete: true,
    },

  ]);
  return (
      <>
        <div className= "container">
            <Tasks />
        </div>;
      </>
    );
};

export default App;
