import logo from './logo.svg';
import './App.css';
import { ROUTER } from "./utils/constants";
import Home from "./pages/home";
import {
    Route,
    HashRouter as Router,
    Switch,
} from "react-router-dom";
import Layout from "./components/layout";
import '@shopify/polaris/build/esm/styles.css';

function App() {
  return (
      <Router>
        <Switch>
          <Layout>
            <Route exact path={ROUTER.POLARIS} component={Home}/>
          </Layout>
        </Switch>
      </Router>
  );
}

export default App;
