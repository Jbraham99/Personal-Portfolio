import './App.css';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import Layout from './Layout/Layout';

function App() {
  return (
    <Switch>
      <Route path="/">
        <Layout />
      </Route>
    </Switch>
  )
}

export default App;
