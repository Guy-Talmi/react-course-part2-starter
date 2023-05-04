import useAuthStore from './store';
import useAuth from './useAuth';

const LoginStatus = () => {
  //const { user, dispatch } = useAuth();
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <span className="mx-2">User name = {user}</span>
        <div>
          <span className="mx-2">{user}</span>
          {/* <a onClick={() => dispatch({ type: 'LOGOUT' })} */}
          <a onClick={() => logout()}
            href="#">
            Logout
          </a>
        </div>
      </>
    );

  return (
    <>
      <span className="mx-2">User name = {user}</span>
      <div>
        {/* <a onClick={() => dispatch({ type: 'LOGIN', userName: 'mosh.hamedani' })} */}
        <a onClick={() => login('mosh.hamedani')}
          href="#">
          Login
        </a>
      </div>
    </>
  );
};

export default LoginStatus;
