import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/problems'>Go to problems</Link> <br />
      <Link to='/users'>Go to users</Link> <br />
    </div>
  );
}

export default Home;
