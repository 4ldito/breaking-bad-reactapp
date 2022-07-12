import '../styles/App.css';
import NavBar from './NavBar.jsx';
import { Route, Routes } from 'react-router-dom';
import Episodes from './Episodes.jsx';
import Characters from './Characters.jsx';
import Home from './Home.jsx';
import CharacterDetails from './CharacterDetails.jsx';
import Deaths from './Deaths';

const App = () => {

  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/characters' element={<Characters/>} />
        <Route path='/characters/:id' element={<CharacterDetails></CharacterDetails>} />
        <Route path='/episodes' element={<Episodes/>} />
        <Route path='/deaths' element={<Deaths/>} />
      </Routes>

    </div>
  )
}

export default App;
