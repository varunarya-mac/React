import {render, screen} from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

test('check if summry values present in screen', ()=> {

    const summary = {
        language: 'JavaScript',
        stargazers_count: 5,
        open_issues: 30, 
        forks: 1
    };

    render(<RepositoriesSummary repository={summary} />)

    for(let key in summary)
    {
        const val = summary[key];
        const item = screen.getByText(new RegExp(val));
        expect(item).toBeInTheDocument();
    }

});