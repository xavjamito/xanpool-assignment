import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from './components/Layout/Layout';
import Home from './components/Home/Home';
import Repos from './components/Repos/Repos';
import 'antd/dist/antd.css';


const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/repos/:username" component={Repos} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
