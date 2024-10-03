import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main'
import Historia from './pages/Historia'
import Ciencias from './pages/Ciencias';
import Tecnologia from './pages/Tecnologia';
import Musica from './pages/Musica';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/historia' element={<Historia/>}/>
        <Route path='/ciencias' element={<Ciencias/>}/>
        <Route path='/tecnologia' element={<Tecnologia/>}/>
        <Route path='/musica' element={<Musica/>}/>
        <Route path='/*' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
