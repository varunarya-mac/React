import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
const Dummy_Data = [
    {
      id: "1",
      author: "Varun",
      text: "React Router App",
    },
    {
      id: "2",
      author: "Arya",
      text: "React Router App",
    },
  ];

const QuoteDetail = () => {
    

  const params = useParams();
  const quoteId = params.quoteid;

  const routeMatch = useRouteMatch();
  console.log(routeMatch);
  const quote = Dummy_Data.find(quote => quote.id === quoteId);

    if(!quote) {
        return <p>No quote found</p>
    }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
      <Route path={routeMatch.url } exact>
        <Link className="btn--flat" to={`${routeMatch.url}/comments`}> Comments </Link>
      </Route>
      
      <Route path={`${routeMatch.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
