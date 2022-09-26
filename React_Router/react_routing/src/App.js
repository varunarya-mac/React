import { Route, Switch, Redirect } from 'react-router-dom'

import AllQuote from './pages/AllQuote';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout'
import NotFound from './pages/NotFound';
function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes'></Redirect>
      </Route>
      <Route path='/quotes' exact>
        <AllQuote></AllQuote>
      </Route>
      <Route path='/quote/:quoteid'>
      <QuoteDetail></QuoteDetail>
      </Route>
      <Route path='/new-quote'>
      <NewQuote></NewQuote>
      </Route>
      <Route path='*'>
      <NotFound></NotFound>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
