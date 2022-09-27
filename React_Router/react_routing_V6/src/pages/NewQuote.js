import QuoteForm from '../components/quotes/QuoteForm'
import { useHistory } from 'react-router-dom';

const NewQuote = () => {
    const history = useHistory()

    const addQuote = (quote) => {
        console.log(quote);
        history.push('/quotes');

    }

    return (<QuoteForm onAddQuote={addQuote}></QuoteForm>)
}

export default NewQuote;