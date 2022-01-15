import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Menus from './components/menus/Menus';
import MenuShow from './components/menus/MenuShow';
import Rewards from './components/rewards/Rewards';
import RewardShow from './components/rewards/RewardShow';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <>
        <Routes>
          <Route path='/' element={<Home />} />  
          <Route path='/menus' element={<Menus />} />
          <Route path='/menus/:menuId' element={<MenuShow />} />
          
          <Route path='/' element={<ProtectedRoute />}>
          <Route path='/rewards' elements={<Rewards />} />
          <Route path='/:menuId/rewards/:rewardId' element={<RewardShow />} />
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