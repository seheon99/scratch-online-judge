import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <form action='/auth/login' method='post'>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
        <br />

        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
        <br />
      </form>
      <Link to='/'>Back to home</Link>
    </div>
  );
}

export default SignIn;
