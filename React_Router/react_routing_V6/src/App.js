import { Route, Routes, Navigate, Link } from "react-router-dom";

import AllQuote from "./pages/AllQuote";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import Comments from "./components/comments/Comments";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<AllQuote />} />
        <Route path="/quote/:quoteid" element={<QuoteDetail />} >
          <Route path="" element={<Link className="btn--flat" to='comments'>Comments</Link>}/>
          <Route path='comments' element={<Comments/>}/>  
        </Route>
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
