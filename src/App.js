import { Route, Routes } from 'react-router';
import './App.css';
import { Main } from './Main';
import { Auth } from './pages/Login';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Main />}/>
        <Route path="/auth/*" element={<Auth />}/>
      </Routes>

    </div>
  );
}

export default App;
