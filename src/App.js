import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Intro from './components/Introduction';
import Pagecontent from './components/PageContent';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/pagecontent" exact component={Pagecontent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
