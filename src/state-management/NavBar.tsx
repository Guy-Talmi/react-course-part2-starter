import { useContext } from 'react';
import LoginStatus from './loginStatus';
import TasksContext from './context/tasksContext';
import AuthContext from './context/authContext';

const NavBar = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
