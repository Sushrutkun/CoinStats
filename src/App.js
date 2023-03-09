import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Homepage from "./Pages/Homepage";
import Coinpage from './Pages/CoinPage'


function App() {
  // const classes = useStyles();
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}></Route>
          <Route path='/coins/:id' element={<Coinpage/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
