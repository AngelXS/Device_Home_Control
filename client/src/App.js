import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './view/Main';
import RegistroForm from './view/RegistroForm';
import Update from './view/Update';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/autor/:id/edit' element={<Update/>}/>
            <Route exact path='/registro/new' element={<RegistroForm/>}/>
            <Route path="/" element={<Main/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
