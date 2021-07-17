import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Intro from './components/Introduction';
import Pagecontent from './components/PageContent';
import OverView from './components/content/Overview';
import History from './components/content/History';
import Differentiation from './components/content/Differentiation';
import Integration from './components/content/Integration';
import Others from './components/content/Others';
import Members from './components/content/Members';
import Farewell from './components/content/Farewell';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/pagecontent" exact component={Pagecontent} />
          <Route path="/overview" exact component={OverView} />
          <Route path="/history" exact component={History} />
          <Route path="/differentiation" exact component={Differentiation} />
          <Route path="/integration" exact component={Integration} />
          <Route path="/others" exact component={Others} />
          <Route path="/members" exact component={Members} />
          <Route path="/farewell" exact component={Farewell} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
