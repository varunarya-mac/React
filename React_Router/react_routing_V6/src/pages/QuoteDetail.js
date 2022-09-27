import { Fragment } from "react";
import { useParams,  Outlet } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
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

  const quote = Dummy_Data.find((quote) => quote.id === quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
     
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
