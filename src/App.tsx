import './App.css';
import TodoForm from './react-query/TodoForm';
import TodoList from './react-query/TodoList';
import Counter from './state-management/Counter';
import LoginStatus from './state-management/authStatus';
import TaskList from './state-management/TaskList';
import { useReducer } from 'react';
import tasksReducer from './state-management/reducers/tasksReducer';

import { Dispatch } from 'react';
import TasksContext from './state-management/context/tasksContext';
import NavBar from './state-management/NavBar';

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <>
      {/* <TodoForm />
      <TodoList /> */}
      {/* <Counter /> */}
      {/* <TaskList /> */}
      {/* <LoginStatus /> */}


      <TasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <TaskList />
      </TasksContext.Provider>
    </>
  );
}

export default App;


//import PostList from './react-query/PostList';
// return <PostList />;
