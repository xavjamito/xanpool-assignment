import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Repos from "./components/Repos/Repos";
import RepoInfo from "./components/RepoInfo/RepoInfo";
import "antd/dist/antd.css";


const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/repos/:username" component={Repos} />
            <Route exact path="/repos/:username/:repoName" component={RepoInfo} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
