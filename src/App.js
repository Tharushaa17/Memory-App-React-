import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AlllMeetup from './pages/AllMeetup';
import Favourites from './pages/Favourites';
import NewMeetup from './pages/NewMeetup';

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' index element={ <AlllMeetup /> } />
          <Route path='/favourites'  element={ <Favourites /> } />
          <Route path='/newmeetups'  element={ <NewMeetup /> } />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
