import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/shared/MainNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Menus from './components/menus/Menus';
import MenuShow from './components/menus/MenuShow';
import Rewards from './components/rewards/Rewards';
import RewardShow from './components/rewards/RewardShow';
import Blogs from './components/blogs/Blogs';
import BlogShow from './components/blogs/BlogShow';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Container>
      <>
        <Routes>
          <Route path='/' element={<Home />} />  
          <Route path='/' element={<ProtectedRoute />}>
          <Route path='/rewards' element={<Rewards />} />
          <Route path='/rewards/:rewardId' element={<RewardShow />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:blogId' element={<BlogShow />} />
          </Route>

          <Route path='/menus' element={<Menus />} />
          <Route path='/menus/:menuId' element={<MenuShow />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<Nomatch />} />
        </Routes>
      </>
      </Container>
    </FetchUser>
  </>
)

export default App;