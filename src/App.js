import { Route, Routes } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';
import AlllMeetup from './pages/AllMeetup';
import Favourites from './pages/Favourites';
import NewMeetup from './pages/NewMeetup';

const App = () => {
  return (
    <div>
      <MainNavigation/>
      <Routes>
        <Route path='/' index element={ <AlllMeetup /> } />
        <Route path='/favourites'  element={ <Favourites /> } />
        <Route path='/newmeetups'  element={ <NewMeetup /> } />
      </Routes>
    </div>
  );
}

export default App;
