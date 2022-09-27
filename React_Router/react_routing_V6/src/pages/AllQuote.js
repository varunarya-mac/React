import QuoteList from "../components/quotes/QuoteList";

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

const AllQuote = () => {
  return <QuoteList quotes={Dummy_Data} />;
};

export default AllQuote;
