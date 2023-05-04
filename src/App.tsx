import './App.css';
import TodoForm from './react-query/TodoForm';
import TodoList from './react-query/TodoList';
import Counter from './state-management/counter/Counter';
import LoginStatus from './state-management/auth/loginStatus';
import TaskList from './state-management/tasks/TaskList';
import NavBar from './state-management/NavBar';
import { TasksProvider } from './state-management/tasks';
import { AuthProvider } from './state-management/auth';

function App() {

  return (
    <>
      {/* <TodoForm />
      <TodoList /> */}
      {/* <Counter /> */}
      {/* <TaskList /> */}
      {/* <LoginStatus /> */}

      <TasksProvider>
        <AuthProvider>
          <Counter />
          <br />
          <NavBar />
          <br />
          <TaskList />
          <br />
        </AuthProvider>
      </TasksProvider >

    </>
  );
}

export default App;


//import PostList from './react-query/PostList';
// return <PostList />;
