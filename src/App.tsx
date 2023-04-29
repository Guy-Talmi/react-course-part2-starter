import './App.css';
import TodoForm from './react-query/TodoForm';
import TodoList from './react-query/TodoList';
import Counter from './state-management/Counter';
import LoginStatus from './state-management/loginStatus';
import TaskList from './state-management/TaskList';
import { useReducer } from 'react';
import tasksReducer from './state-management/reducers/tasksReducer';

import { Dispatch } from 'react';
import TasksContext from './state-management/context/tasksContext';
import NavBar from './state-management/NavBar';
import authReducer from './state-management/reducers/loginStatusReducer';
import AuthContext from './state-management/context/authContext';

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, '');

  return (
    <>
      {/* <TodoForm />
      <TodoList /> */}
      {/* <Counter /> */}
      {/* <TaskList /> */}
      {/* <LoginStatus /> */}

      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
          <NavBar />
          <TaskList />
        </AuthContext.Provider>
      </TasksContext.Provider >

    </>
  );
}

export default App;


//import PostList from './react-query/PostList';
// return <PostList />;
