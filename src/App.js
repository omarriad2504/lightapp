import logo from './logo.svg';
import Lighting from './Lighting';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  
  return (
    <Router>
    <div className="App">
      <h1 className='D'>DigitalCom</h1>
     
   
    <Switch>
      <Route path='/Lighting'>
     <Lighting />
      </Route>
    </Switch>
    
    <Navbar />
    </div>

    
     </Router>
  );
}

export default App;
