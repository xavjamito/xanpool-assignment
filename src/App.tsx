import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import { Layout } from './components/Layout/Layout';
import 'antd/dist/antd.css';

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
