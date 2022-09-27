import QuoteForm from '../components/quotes/QuoteForm'
import { useNavigate } from 'react-router-dom';

const NewQuote = () => {
    const nav = useNavigate()

    const addQuote = (quote) => {
        console.log(quote);
        nav('/quotes');

    }

    return (<QuoteForm onAddQuote={addQuote}></QuoteForm>)
}

export default NewQuote;