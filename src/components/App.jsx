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
        <Route path='/breaking-bad-reactapp/' element={<Home/>} />
        <Route path='/breaking-bad-reactapp/characters' element={<Characters/>} />
        <Route path='/breaking-bad-reactapp/characters/:id' element={<CharacterDetails></CharacterDetails>} />
        <Route path='/breaking-bad-reactapp/episodes' element={<Episodes/>} />
        <Route path='/breaking-bad-reactapp/deaths' element={<Deaths/>} />
      </Routes>

    </div>
  )
}

export default App;
