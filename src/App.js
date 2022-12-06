import './App.css';
import Products from './Components/Products';
import Login from './Components/Login';
import {useState} from 'react'

function App() {
  const [token, setToken] = useState(localStorage.getItem('userToken') ?? null);


  return (
    <div className='App'>
      {token ? <Products /> : <Login token={token} setToken={setToken} />}
    </div>
  );
}

export default App;
