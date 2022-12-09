import { Link } from 'react-router-dom';

function Users() {
  return (
    <div>
      <h1>Users</h1>
      <Link to='./signin'>Go to sign in</Link> <br />
      <Link to='./signup'>Go to sign up</Link> <br />
      <Link to='/'>Back to home</Link> <br />
    </div>
  );
}

export default Users;
