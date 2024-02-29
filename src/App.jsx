import { Route, Routes } from 'react-router';
import './App.css';
import AllPlayers from './components/AllPlayers';
import NavBar from './components/NavBar';
import SinglePlayer from './components/SinglePlayer';

function App() {

  return (
    <>
      <h1>App</h1>
      <NavBar />
      <Routes>
        {/* path: what is added to baseUrl */}
        <Route path='/' element={<AllPlayers />} />
        <Route path='/players/:id' element={<SinglePlayer />} />
      </Routes>
    </>
  );
}

export default App;
