//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import  Drawer  from "../Components/Drawer/Drawer";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Drawer />
        </Switch>
      </Router>
    </>
  );
}

export default App;
