import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import CoffeeShops from './components';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<ProtectedRoute />}>
            
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<Nomatch />} />
        </Routes>
      </>
    </FetchUser>
  </>
)

export default App;