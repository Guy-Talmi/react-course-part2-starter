import { LoginStatus } from './auth';
import useCounterStore from './counter/store';
import { useTasks } from './tasks';

const NavBar = () => {
  const { tasks } = useTasks();
  const { counter: count } = useCounterStore();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <br />
      <span className="badge text-bg-secondary">{count}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
