import './App.css';
import { Switch, Route } from 'react-router-dom';
// import Navbar from './Components/navbar';
import Register from './Components/register';
import ViewUsers from './Components/viewusers';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/viewusers" component={ViewUsers} />
      </Switch>
    </div>

  );
}

export default App;
