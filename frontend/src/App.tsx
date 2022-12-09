import { Route, Routes } from 'react-router-dom';
import Home from './pages';
import { Users, SignIn, SignUp } from './pages/users';
import { Problem, ProblemSet } from './pages/problems';

function App() {
  return (
    <Routes>
      <Route path='/problems/:id' element={<Problem />} />
      <Route path='/problems' element={<ProblemSet />} />
      <Route path='/users/signin' element={<SignIn />} />
      <Route path='/users/signup' element={<SignUp />} />
      <Route path='/users' element={<Users />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
